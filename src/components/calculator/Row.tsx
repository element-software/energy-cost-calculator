export default function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/60 dark:bg-white/10 px-3 py-2 border border-black/10 dark:border-white/10">
      <span className="text-foreground/80">{label}</span>
      <span className="font-semibold">{children}</span>
    </div>
  );
}
