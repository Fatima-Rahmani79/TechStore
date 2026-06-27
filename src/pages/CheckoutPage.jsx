import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectCartTotalItems,
  selectCartTotalPrice,
} from "../features/cart/cartSelectors";
import { useState } from "react";
import { clearCart } from "../features/cart/cartSlice";
import { Check, ShoppingBag } from "lucide-react";

const steps = ["Cart", "Detais", "Confirm"];

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
}
