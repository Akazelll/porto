"use client";

import { ReactNode } from "react";
import ScrollFloat from "@/components/shared/ScrollFloat";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <section id={id} className={className}>
      <ScrollFloat className='will-change-transform'>{children}</ScrollFloat>
    </section>
  );
}
