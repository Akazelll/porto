export function Footer() {
  return (
    <footer id="footer" className="border-t">
      <div className="container py-6">
        <div className="text-center text-sm text-muted-foreground">
          <h3>
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved by {" "}
            <a
              href="https://github.com/Akazelll"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Akazell
            </a>
            .
          </h3>
        </div>
      </div>
    </footer>
  );
}