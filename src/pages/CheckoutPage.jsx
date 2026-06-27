import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartTotalItems,
  selectCartTotalPrice,
} from "../features/cart/cartSelectors";
import { useState } from "react";
import { clearCart } from "../features/cart/cartSlice";

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
}
