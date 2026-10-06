const NotFound = () => (
  <main className="fixed inset-0 grid place-items-center bg-background px-6 text-center">
    <div>
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-2 text-4xl font-bold">This page drifted off.</h1>
      <a href="/" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
        Back to the portfolio
      </a>
    </div>
  </main>
);

export default NotFound;
