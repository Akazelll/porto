"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // Menampilkan toast loading
    const promise = emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );

    // 2. Gunakan toast.promise untuk menangani status loading, success, dan error
    toast.promise(promise, {
      loading: 'Sending your message...',
      success: () => {
        form.current?.reset();
        return 'Your message has been sent successfully!';
      },
      error: (err) => {
        console.error("FAILED...", err);
        return 'Failed to send the message. Please try again.';
      },
    });
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Get In Touch
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="user_name">Name</Label>
          <Input type="text" id="user_name" name="user_name" required />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="user_email">Email</Label>
          <Input type="email" id="user_email" name="user_email" required />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}