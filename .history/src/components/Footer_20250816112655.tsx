export function Footer() {
  return (
    <footer id="footer" className="border-t">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Built and designed by{" "}
          <a
            href="https://github.com/Akazelll"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 transition-colors hover:text-primary"
          >
            Akazell
          </a>
          .
        </p>
      </div>
    </footer>
  );
}