import GradientText from "@/components/reactbits/GradientText";

interface GradientHeadingProps {
  text: string;
  className?: string;
}

export function GradientHeading({ text, className }: GradientHeadingProps) {
  return <GradientText className={className} text={text} />;
}
