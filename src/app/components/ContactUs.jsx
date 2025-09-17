"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validatePhone = (phone) => {
    return /^[1-9]\d{2}-\d{3}-\d{4}/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 letters";
    }

    if (!formData.phone || formData.phone.trim().length <=11) {
      tempErrors.phone = "Phone Number must be at least 11 numbers";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      tempErrors.email = "Invalid email address";
    }

    if (!formData.message || formData.message.trim().length < 5) {
      tempErrors.message = "Message must be at least 5 letters";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      setSuccessMsg(""); 
      console.log("Message not sent due to validation errors");
      return;
    }

    
    console.log("Message Sent Successfully:", formData);
    setSuccessMsg("Message Sent Successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});

    
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gray-50 flex justify-center items-start md:items-center">
      <div className="w-full max-w-lg bg-white mt-20 p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit} noValidate>
          
          <div className="flex flex-col">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </div>


          <div className="flex flex-col">
            <Input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
          </div>

          
          <div className="flex flex-col">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </div>

          
          <div className="flex flex-col">
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
          </div>

          <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
            Send Message
          </Button>

          
          {successMsg && <p className="text-green-600 font-semibold text-center mt-2">{successMsg}</p>}
          {Object.keys(errors).length > 0 && !successMsg && (
            <p className="text-red-600 font-semibold text-center mt-2">Message not sent</p>
          )}
        </form>
      </div>
    </section>
  );
}
