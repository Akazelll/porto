"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const promise = emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.promise(promise, {
      loading: "Sending your message...",
      success: () => {
        form.current?.reset();
        return "Your message has been sent successfully!";
      },
      error: (err) => {
        console.error("FAILED...", err);
        return "Failed to send the message. Please try again.";
      },
    });
  };

  return (
    // Tambahkan `px-4` di sini
    <section id="contact" className="container px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-12 max-w-xl space-y-4"
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
          <Textarea id="message" name="message" rows={5} required />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}