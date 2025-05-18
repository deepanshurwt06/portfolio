"use client";

import BackgroundDisplay from "@/components/common/backgroundDisplay";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
export default function Page() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          mobile: form.mobile,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
  
      if (!res.ok) {
        const text = await res.text(); // fallback for non-JSON (like 404 HTML)
        throw new Error(text);
      }
  
       await res.json();
       toast.success("Message sent!");

        // ✅ Reset the form
      setForm({
        fullName: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error submitting contact form:", error.message);
      } else {
        console.error("Unknown error", error);
      }
      toast.error(`Failed to send message`);
    }finally {
        setLoading(false); // ✅ Re-enable button
      }
  };

  return (
    <>
      <BackgroundDisplay />
      <div className="container mx-auto min-h-screen px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 lg:mb-10 text-center lg:text-4xl text-white">
          Contact <span className="text-[#4cc9f0]">Me</span>
        </h2>

        <div className="flex justify-center items-center max-w-4xl mx-auto my-20 lg:my-30">
          <form
            onSubmit={handleSubmit}
            className="w-full p-8 flex flex-col gap-3"
          >
            <div className="flex flex-col md:flex-row gap-4 ">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full text-white bg-transparent border border-[#4cc9f0] px-3 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full text-white bg-transparent border border-[#4cc9f0] outline-none px-3 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full outline-none text-white bg-transparent border border-[#4cc9f0] px-3 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full text-white bg-transparent border border-[#4cc9f0] px-3 py-2 rounded-md outline-none"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your message..."
                required
                className="w-full outline-none text-white bg-transparent border border-[#4cc9f0] px-3 py-2 rounded-md"
              />
            </div>
           
              <Button
                type="submit"
                className=" w-full bg-[#4cc9f0] text-[#000010]
                 border-2 border-[#4cc9f0] hover:bg-[#000010] hover:text-[#4cc9f0] font-semibold text-lg py-2  rounded-md transition duration-300 ease-in-out cursor-pointer"
  >
                <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
              </Button>
            
          </form>
        </div>
      </div>
    </>
  );
}
