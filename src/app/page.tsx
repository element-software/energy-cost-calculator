import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <header className="mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Energy cost calculator
          </h1>
          <p className="text-foreground/70 mt-1">
            Enter usage and tariff details for gas and electricity. Compare two
            tariffs and see potential savings.
          </p>
        </header>
        <Calculator />
        <footer className="mt-10 text-center text-sm text-foreground/70 gap-3 flex flex-row justify-center">
            <p>
              Iqbal Ibrahim &copy; {new Date().getFullYear()}
            </p>
            <a href="https://linkedin.com/in/iqbalibrahim" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/elementsoftware" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://iqbalibrahim.dev" target="_blank" rel="noopener noreferrer">
              Personal
            </a>
            <a href="https://element-software.co.uk" target="_blank" rel="noopener noreferrer">
              Business
            </a>
        </footer>
      </div>
    </div>
  );
}
