export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-2 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Les Deux Escargots — Tous droits réservés.
        </p>
        <p className="text-sm text-neutral-600">
          12 rue des Capitouls, 31000 Toulouse · 05 61 00 00 00
        </p>
      </div>
    </footer>
  );
}
