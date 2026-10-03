import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">Garfield: Escape from Monday Wiki</Link>…
      </p>
    </main>
  );
}
