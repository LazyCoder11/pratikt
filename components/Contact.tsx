"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import HorizontalBorder from "./ui/HorizontalBorder";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_en4k8uf", // Replace with your EmailJS service ID
        "template_63sct5f", // Replace with your EmailJS template ID
        formRef.current,
        "ekN9JsLW-2AGcAsDv" // Replace with your EmailJS public key
      );
      setSuccessMessage("Message sent successfully!");
      formRef.current.reset();
    } catch {
      setErrorMessage("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="hire"
      className="h-full px-5 lg:px-60 relative rounded-2xl w-full my-20"
    >
      <div className="mb-5 p-3">
        <div className="text-2xl md:text-3xl font-medium tracking-wide project-shadow">
          <h3>Meet me here</h3>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full box-border featured-shadow">
        <HorizontalBorder />
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col md:items-end gap-4 relative featured-bg dark-border box-border border p-3 rounded-2xl"
        >
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full md:w-1/2 p-4 rounded-2xl focus:bg-transparent bg-[#252525] dark-border box-border featured-shadow border"
            />
            <input
              type="email"
              name="user_email"
              placeholder="youremail@email.com"
              required
              className="w-full md:w-1/2 p-4 rounded-2xl focus:bg-transparent bg-[#252525] dark-border box-border featured-shadow border"
            />
          </div>
          <textarea
            name="message"
            rows={10}
            placeholder="Your Inquiries"
            required
            className="w-full p-4 rounded-2xl focus:bg-transparent featured-bg dark-border box-border featured-shadow border"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#252525] transition-all duration-500 w-full text-lg px-5 py-2 rounded-2xl dark-border box-border border featured-shadow"
          >
            {loading ? "Sending..." : "Send a message"}
          </button>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
