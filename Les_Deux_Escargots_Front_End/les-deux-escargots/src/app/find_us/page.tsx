import Section from "@/app/components/Section";
import Link from "next/link";

export default function FindUsPage() {
  const adresse = "12 rue des Capitouls, 31000 Toulouse";
  const query = encodeURIComponent(adresse);
  return (
    <Section title="Nous trouver" subtitle={adresse}>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p>Ouvert du mardi au samedi, 12h–14h & 19h–22h.</p>
          <p>Réservations au <a className="underline" href="tel:+33561000000">05 61 00 00 00</a>.</p>
          <p>
            Email: <a className="underline" href="mailto:contact@lesdeuxescargots.fr">contact@lesdeuxescargots.fr</a>
          </p>
          <Link href="/reservation" className="inline-block mt-2 px-4 py-2 rounded-xl border text-sm">
            Réserver en ligne
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden border">
          <iframe
            title="Carte du restaurant"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="w-full h-[300px] md:h-[360px] grayscale"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
