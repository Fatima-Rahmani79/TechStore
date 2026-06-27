import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectCartTotalItems,
  selectCartTotalPrice,
} from "../features/cart/cartSelectors";
import { useState } from "react";
import { clearCart } from "../features/cart/cartSlice";
import { ArrowLeft, Check, ShoppingBag } from "lucide-react";

const STEPS = ["Cart", "Detais", "Confirm"];

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const items = useSelector((state) => state.cart.items);

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const shipping = totalPrice > 500 ? 0 : 9.99;
  const total = totalPrice + shipping;

  //   Validation ------------------------------------------

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.zip.trim()) errs.zip = "ZIP code is required";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleNext() {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(1);
  }

  async function handleConfirm() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    dispatch(clearCart());
    setStep(2);
    setLoading(false);
  }

  //   Success ------------------------
  if (step === 2) {
    const orderNumber = `TS-${Math.floor(Math.random() * 90000) + 10000}`;
    return (
      <div className="mx-auto flex min-h-[80vh] max-w-lg items-center justify-center px-6 py-16">
        <div className="w-full text-center">
          {/* Checkmark */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)]">
            <Check size={36} color="var(--accent-text)" strokeWidth={3} />
          </div>

          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-[var(--text-secondary)]">
            Thanks, {form.name.split(" ")[0]}! Your order has been placed.
          </p>

          {/* Order info */}
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 text-left">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <span className="text-sm text-[var(--text-secondary)]">
                Order number
              </span>
              <span className="font-mono font-semibold text-[var(--text-primary)]">
                {orderNumber}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--border)] py-4">
              <span className="text-sm text-[var(--text-secondary)]">
                Email
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                {form.email}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--border)] py-4">
              <span className="text-sm text-[var(--text-secondary)]">
                Ship to
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                {form.city}
              </span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="font-semibold text-[var(--text-primary)]">
                Total paid
              </span>
              <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:opacity-90"
          >
            <ShoppingBag size={16} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Back */}
      <Link
        to="/cart"
        className="btn-secondary mb-8 inline-flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back to Cart
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-[var(--text-primary)]">
        Checkout
      </h1>

      {/* ── Step indicator ────────────────────────────────────────────── */}
      <div className="mb-10 flex items-center gap-3">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                  i < step
                    ? "bg-[var(--accent)] text-[var(--accent-text)]"
                    : i === step
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
                }`}
              >
                {i < step ? <Check size={13} strokeWidth={3} /> : i + 1}
              </div>
              <span
                className={`text-sm font-medium ${
                  i === step
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-px w-12 ${i < step ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* ── Left — Form or Review ──────────────────────────────────── */}
        <div>
          {step === 0 ? (
            // Details form
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
              <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
                Shipping Details
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Fatima Rahmani"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="fatima@email.com"
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={errors.address}
                  placeholder="123 Main Street"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                  placeholder="Kabul"
                />
                <Field
                  label="ZIP Code"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  error={errors.zip}
                  placeholder="10001"
                />
              </div>

              <button
                onClick={handleNext}
                className="btn-primary mt-6 flex w-full items-center justify-center py-3.5"
              >
                Review Order
              </button>
            </div>
          ) : (
            // Review
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
              <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
                Review Your Order
              </h2>

              {/* Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.shortName || item.name}
                      className="h-14 w-14 rounded-xl bg-[var(--bg-subtle)] object-contain"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {item.shortName || item.name}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Shipping address */}
              <div className="mt-6 rounded-xl bg-[var(--bg-subtle)] p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Ship to
                </p>
                <p className="text-sm text-[var(--text-primary)]">
                  {form.name}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {form.address}, {form.city} {form.zip}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {form.email}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  className="btn-secondary flex-1 py-3"
                >
                  Edit Details
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className="btn-primary flex flex-1 items-center justify-center gap-2 py-3 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Check size={16} />
                      Place Order
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Right — Order Summary ──────────────────────────────────── */}
        <div className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
          <h2 className="mb-4 font-semibold text-[var(--text-primary)]">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">
                Items ({totalItems})
              </span>
              <span className="text-[var(--text-primary)]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">Shipping</span>
              {shipping === 0 ? (
                <span className="font-medium text-green-500">Free</span>
              ) : (
                <span className="text-[var(--text-primary)]">
                  ${shipping.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="my-4 h-px bg-[var(--border)]" />

          <div className="flex justify-between">
            <span className="font-bold text-[var(--text-primary)]">Total</span>
            <span className="font-mono text-xl font-bold text-[var(--text-primary)]">
              ${total.toFixed(2)}
            </span>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--text-secondary)]">
            🔒 Secure checkout · Free returns
          </p>
        </div>
      </div>
    </div>
  );
}
// ── Field component ──────────────────────────────────────────────────────────
function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] bg-[var(--bg-subtle)] ${
          error
            ? "border-red-400 focus:border-red-400"
            : "border-[var(--border)] focus:border-[var(--accent)]"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
