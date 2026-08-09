"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = new URLSearchParams();

    for (const [key, value] of new FormData(form).entries()) {
      if (typeof value === "string") body.append(key, value);
    }

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="contact" method="POST" onSubmit={handleSubmit} className="mt-10 grid gap-8 md:grid-cols-2">
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only" aria-hidden="true">
        <label>Do not fill this out if you are human<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <label className="label text-[var(--forest)]">
        Your name
        <input required name="name" autoComplete="name" className="mt-3 w-full border-0 border-b border-[var(--forest)]/30 bg-transparent px-0 py-3 normal-case tracking-normal outline-none focus:border-[var(--forest)]" />
      </label>
      <label className="label text-[var(--forest)]">
        Email
        <input required type="email" name="email" autoComplete="email" className="mt-3 w-full border-0 border-b border-[var(--forest)]/30 bg-transparent px-0 py-3 normal-case tracking-normal outline-none focus:border-[var(--forest)]" />
      </label>
      <label className="label text-[var(--forest)] md:col-span-2">
        What brings you here?
        <select name="interest" className="mt-3 w-full border-0 border-b border-[var(--forest)]/30 bg-transparent px-0 py-3 normal-case tracking-normal outline-none">
          <option>General question</option>
          <option>Meditation</option>
          <option>Retreat</option>
          <option>Stay</option>
          <option>Event</option>
        </select>
      </label>
      <label className="label text-[var(--forest)] md:col-span-2">
        Message
        <textarea required name="message" rows={5} className="mt-3 w-full resize-y border-0 border-b border-[var(--forest)]/30 bg-transparent px-0 py-3 normal-case tracking-normal outline-none focus:border-[var(--forest)]" />
      </label>
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="label min-h-12 rounded-[4px] bg-[var(--terracotta-bright)] px-8 py-4 text-white hover:bg-[var(--terracotta)] disabled:cursor-wait disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        <p className={`mt-4 text-sm ${status === "error" ? "text-red-700" : "text-[var(--forest)]"}`} aria-live="polite">
          {status === "success" && "Thank you. Your message has been sent."}
          {status === "error" && "Your message could not be sent. Please try again or contact us directly."}
        </p>
      </div>
    </form>
  );
}
