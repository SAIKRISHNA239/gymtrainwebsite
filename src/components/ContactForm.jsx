// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";
import { validateContact } from "../utils/validation"; // keep your validator here

// Helper to encode form data for Netlify (application/x-www-form-urlencoded)
function encodeFormData(data = {}) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key] == null ? "" : data[key])
    )
    .join("&");
}

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    location: "",
    "form-name": "contact",
    "bot-field": "", // honeypot for Netlify
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // clear single-field error on change
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    // If you don't have a validateContact util, add a minimal inline validator here.
    // const localErrors = {};
    // if (!values.name.trim()) localErrors.name = "Name is required";
    // if (!/^\S+@\S+\.\S+$/.test(values.email || "")) localErrors.email = "Valid email required";
    // if (!values.message.trim()) localErrors.message = "Message is required";
    // ...
    // const validationErrors = localErrors;

    const validationErrors = validateContact ? validateContact(values) : {};
    if (validationErrors && Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus("error");
      // focus first errorable field for accessibility
      const firstErrField = Object.keys(validationErrors)[0];
      const el = formRef.current?.querySelector(`[name="${firstErrField}"]`);
      if (el) el.focus();
      return;
    }

    // If honeypot filled — silently fail
    if (values["bot-field"]) {
      setStatus("success"); // pretend success to bots
      return;
    }

    // Netlify form capture: POST to root with application/x-www-form-urlencoded
    const body = encodeFormData(values);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.ok) {
        setStatus("success");
        setErrors({});
        // reset fields except form-name and bot-field
        setValues((v) => ({ "form-name": v["form-name"], "bot-field": "", name: "", email: "", phone: "", message: "", preferredTime: "", location: "" }));
        // move focus to success message
        const successEl = formRef.current?.querySelector("[data-success]");
        if (successEl) successEl.focus();
      } else {
        throw new Error("Network response not ok");
      }
    } catch (err) {
      console.error("Form submit error", err);
      setStatus("error");
      setErrors((prev) => ({ ...prev, _form: "Submission failed — please try again or WhatsApp." }));
    }
  }

  return (
    <section aria-labelledby="contact-title" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 id="contact-title" className="text-2xl font-bold">Book a Free Session</h2>
      <p className="text-sm text-white/80 mt-2">We’ll get back within 24 hours. Or WhatsApp directly.</p>

      <div className="mt-6 grid gap-6 2xl:grid-cols-2">
        <form
          ref={formRef}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="bg-white/3 p-5 rounded-md shadow-sm space-y-4"
          aria-describedby={status === "error" ? "form-error" : undefined}
        >
          {/* Netlify required hidden fields */}
          <input type="hidden" name="form-name" value={values["form-name"]} />
          {/* Honeypot field */}
          <div className="sr-only">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" value={values["bot-field"]} onChange={onChange} />
            </label>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              id="name"
              name="name"
              className={`w-full rounded-md bg-white/5 border p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.name ? "border-[#ff3b30]" : "border-white/10"}`}
              value={values.name}
              onChange={onChange}
              required
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "error-name" : undefined}
            />
            {errors.name && <p id="error-name" className="mt-1 text-xs text-[#ff3b30]">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full rounded-md bg-white/5 border p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.email ? "border-[#ff3b30]" : "border-white/10"}`}
              value={values.email}
              onChange={onChange}
              required
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && <p id="error-email" className="mt-1 text-xs text-[#ff3b30]">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-1">Phone (optional)</label>
            <input
              id="phone"
              name="phone"
              inputMode="tel"
              className="w-full rounded-md bg-white/5 border border-white/10 p-3"
              value={values.phone}
              onChange={onChange}
              aria-describedby="tel-help"
            />
            <div id="tel-help" className="mt-1 text-xs text-white/60">Include country code if outside India.</div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredTime" className="block text-sm mb-1">Preferred time</label>
              <select
                id="preferredTime"
                name="preferredTime"
                className={`w-full rounded-md bg-white/5 border p-3 ${errors.preferredTime ? "border-[#ff3b30]" : "border-white/10"}`}
                value={values.preferredTime}
                onChange={onChange}
                required
                aria-invalid={errors.preferredTime ? "true" : "false"}
                aria-describedby={errors.preferredTime ? "error-preferredTime" : undefined}
              >
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              {errors.preferredTime && <p id="error-preferredTime" className="mt-1 text-xs text-[#ff3b30]">{errors.preferredTime}</p>}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm mb-1">Location</label>
              <select
                id="location"
                name="location"
                className={`w-full rounded-md bg-white/5 border p-3 ${errors.location ? "border-[#ff3b30]" : "border-white/10"}`}
                value={values.location}
                onChange={onChange}
                required
                aria-invalid={errors.location ? "true" : "false"}
                aria-describedby={errors.location ? "error-location" : undefined}
              >
                <option value="">Select</option>
                <option value="in-person">In-person</option>
                <option value="online">Online</option>
              </select>
              {errors.location && <p id="error-location" className="mt-1 text-xs text-[#ff3b30]">{errors.location}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full rounded-md bg-white/5 border p-3 focus:outline-none ${errors.message ? "border-[#ff3b30]" : "border-white/10"}`}
              value={values.message}
              onChange={onChange}
              required
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "error-message" : undefined}
            />
            {errors.message && <p id="error-message" className="mt-1 text-xs text-[#ff3b30]">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#ff3b30] text-white font-medium disabled:opacity-60"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>

            <div aria-live="polite" className="min-h-[1rem]">
              {status === "success" && (
                <p tabIndex={-1} data-success className="text-[#22c55e] text-sm">Thanks! Your request is received. We’ll contact you within 24 hours.</p>
              )}
              {status === "error" && errors._form && (
                <p id="form-error" className="text-[#ff3b30] text-sm">{errors._form}</p>
              )}
              {status === "error" && !errors._form && (
                <p className="text-[#ff3b30] text-sm">Please fix the highlighted fields and try again.</p>
              )}
            </div>
          </div>
        </form>

        <aside className="space-y-4">
          <a
            className="block text-center px-4 py-3 rounded-md border border-white/10 bg-white/3"
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp
          </a>

          <a
            className="block text-center px-4 py-3 rounded-md border border-white/10 bg-white/3"
            href="tel:+910000000000"
            aria-label="Call now"
          >
            Call Now
          </a>

          <div className="text-xs text-white/60">By submitting, you agree to our privacy policy.</div>
        </aside>
      </div>
    </section>
  );
}
