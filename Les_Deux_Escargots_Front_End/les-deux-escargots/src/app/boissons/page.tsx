import Section from "@/app/components/Section";

const boissons = [
  { nom: "Verre de vin blanc (AOP Gascogne)", prix: "6€" },
  { nom: "Verre de vin rouge (AOP Fronton)", prix: "6€" },
  { nom: "Bière artisanale pression", prix: "7€" },
  { nom: "Eau pétillante 75cl", prix: "5€" },
  { nom: "Café", prix: "2€" },
];

export default function BoissonsPage() {
  return (
    <Section title="Carte des boissons" subtitle="Une petite sélection qui change au fil des découvertes.">
      <ul className="divide-y">
        {boissons.map((b) => (
          <li key={b.nom} className="py-4 flex items-center justify-between">
            <span>{b.nom}</span>
            <span className="font-semibold text-sm">{b.prix}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
