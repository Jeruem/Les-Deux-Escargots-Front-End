import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate">
      <Image
        src="/images/2escargots"
        alt="Salle du restaurant"
        width={1920}
        height={1080}
        priority
        className="h-[60dvh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow">
            Les Deux Escargots
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base opacity-90">
            Cuisine de saison, produits du marché & vins vivants. Réservez votre table en ligne.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservation" className="px-5 py-3 rounded-xl bg-white text-black text-sm font-medium">
              Réserver une table
            </Link>
            <Link href="/menu" className="px-5 py-3 rounded-xl border border-white/70 text-sm">
              Voir le menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
