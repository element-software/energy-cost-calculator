export default function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-black/30 shadow-lg border border-white/40 dark:border-white/10 backdrop-blur p-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
