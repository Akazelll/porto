"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ScrollFloat from "@/components/shared/ScrollFloat";

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
      loading: "Sending…",
      success: () => { form.current?.reset(); return "Message sent!"; },
      error: "Failed to send. Please try again.",
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <ScrollFloat>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something together.
          </h2>
        </ScrollFloat>

        <div className="mt-14 grid gap-16 lg:grid-cols-2">

          {/* left — info */}
          <ScrollFloat delay={0.05}>
            <div className="space-y-8">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Have an idea, a collaboration opportunity, or just want to chat? I&apos;m always open to interesting conversations and new projects.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:adamxraga@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition hover:border-primary/40 hover:bg-primary/5"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">adamxraga@gmail.com</span>
                </a>
                <Link
                  href="https://github.com/Akazelll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition hover:border-primary/40 hover:bg-primary/5"
                >
                  <Github className="h-4 w-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">github.com/Akazelll</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/adamxraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition hover:border-primary/40 hover:bg-primary/5"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">linkedin.com/in/adamxraga</span>
                </Link>
              </div>
            </div>
          </ScrollFloat>

          {/* right — form */}
          <ScrollFloat delay={0.1}>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-1.5">
                <Label htmlFor="user_name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  required
                  className="rounded-xl border-border/60 bg-card focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="user_email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input
                  id="user_email"
                  type="email"
                  name="user_email"
                  required
                  className="rounded-xl border-border/60 bg-card focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-xl border-border/60 bg-card focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </ScrollFloat>

        </div>
      </div>
    </section>
  );
}
