import { cn } from "@/lib/utils";
type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ className, children }: H1Props) {
  return (
    <h1
      className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}
    >
      {children}
    </h1>
  );
}
