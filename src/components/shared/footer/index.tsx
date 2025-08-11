export default function Footer() {
  return (
    <footer className="mt-10 text-center text-sm text-foreground/70 gap-3 flex flex-row justify-center">
      <p>Iqbal Ibrahim &copy; {new Date().getFullYear()}</p>
      <a
        href="https://linkedin.com/in/iqbalibrahim"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/elementsoftware"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://iqbalibrahim.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Personal
      </a>
      <a
        href="https://element-software.co.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Business
      </a>
    </footer>
  );
}
