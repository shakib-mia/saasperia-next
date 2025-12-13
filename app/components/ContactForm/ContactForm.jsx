"use client";

import React, { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "emailjs-com";
import axios from "axios";
import Input from "../Input/Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto generate date & time string
    const now = new Date();
    const dateTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")} - ${String(
      now.getDate()
    ).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}/${now.getFullYear()}`;

    // Prepare template params object
    // const templateParams = {
    //   from_name: formData.name,
    //   reply_to: formData.email,
    //   subject: formData.subject,
    //   message: formData.content,
    //   date: dateTime,
    // };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // taost("✅ Message sent successfully!");
          axios
            .post("https://templatehearth-be.onrender.com/contact", {
              name: e.target.from_name.value,
              email: e.target.reply_to.value,
              subject: e.target.subject.value,
              message: e.target.message.value,
            })
            .then((res) => {
              if (res.status === 200) {
                setFormData({
                  from_name: "",
                  reply_to: "",
                  subject: "",
                  message: "",
                });
              }
            });
        },
        (error) => {
          setStatus("❌ Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <form
      className="space-y-6 col-span-2 w-11/12 shadow-lg p-4 lg:p-12 rounded-lg lg:w-1/2 mx-auto"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <Input
        name="from_name"
        type="text"
        label="Name"
        placeholder="Enter Your Name Here"
        value={formData.from_name}
        onChange={handleChange}
        required
        data-animate="fade-in-up"
        data-delay="100"
      />
      <Input
        name="reply_to"
        type="email"
        label="Email Address"
        placeholder="Enter Your Email Address Here"
        value={formData.reply_to}
        onChange={handleChange}
        required
        data-animate="fade-in-up"
        data-delay="200"
      />
      <Input
        name="subject"
        type="text"
        placeholder="Enter Your Subject Here"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        data-animate="fade-in-up"
        data-delay="300"
      />
      <Input
        name="message"
        label="Your Message"
        placeholder="Type Your Message Here"
        rows="6"
        value={formData.message}
        as="textarea"
        onChange={handleChange}
        required
        data-animate="fade-in-up"
        data-delay="400"
      />

      <div
        className="flex justify-center"
        data-animate="fade-in-up"
        data-delay="500"
      >
        <button type="submit" className="flex! items-center gap-4">
          Send Message <FaPaperPlane />
        </button>
      </div>

      {status && (
        <p className="mt-4 text-center text-sm font-semibold">{status}</p>
      )}
    </form>
  );
};

export default ContactForm;
