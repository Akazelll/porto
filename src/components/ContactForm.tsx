"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
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
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <Card className="rounded-2xl border-border/60 bg-card/70 p-7 shadow-lg backdrop-blur-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something impactful together.</h2>
          <p className="mt-4 text-muted-foreground">Have an idea, collaboration, or freelance opportunity? Reach out and I&apos;ll get back to you soon.</p>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-border/70 bg-background/50 px-4 py-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:adamxraga@gmail.com" className="text-sm font-medium hover:underline">adamxraga@gmail.com</a>
          </div>
        </Card>

        <Card className="rounded-2xl border-border/60 bg-card/70 p-7 shadow-lg backdrop-blur-sm sm:p-9">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid gap-1.5"><Label htmlFor="user_name">Name</Label><Input id="user_name" name="user_name" required /></div>
            <div className="grid gap-1.5"><Label htmlFor="user_email">Email</Label><Input id="user_email" type="email" name="user_email" required /></div>
            <div className="grid gap-1.5"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={5} required /></div>
            <Button type="submit" className="w-full rounded-xl"><Send className="mr-2 h-4 w-4" />Send Message</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
