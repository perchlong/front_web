type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};
export function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";
  const variants = {
    primary:
      "bg-sky-400 text-slate-950 hover:bg-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]",
    secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  };

  return <button className={`${base}${variants[variant]}`}>{children}</button>;
}
