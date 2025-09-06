import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import Gallery from "@/app/components/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section title="À propos" subtitle="Bistrot toulousain, simple et généreux.">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/salle.jpg" alt="Salle" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <p>
              Aux <strong>Deux Escargots</strong>, on cuisine les produits du marché avec respect et créativité.
              Le menu change chaque semaine selon les arrivages.
            </p>
            <ul className="list-disc list-inside text-neutral-700">
              <li>Produits locaux & de saison</li>
              <li>Options végétariennes</li>
              <li>Vins naturels et biodynamiques</li>
            </ul>
            <div className="flex gap-3">
              <Link href="/menu" className="px-4 py-2 border rounded-xl text-sm">
                Découvrir le menu
              </Link>
              <Link href="/reservation" className="px-4 py-2 rounded-xl bg-black text-white text-sm">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Photos">
        <Gallery />
      </Section>
    </>
  );
}
