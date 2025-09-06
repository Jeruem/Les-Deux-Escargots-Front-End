import Section from "@/app/components/Section";

const plats = [
  { nom: "Velouté de potimarron", desc: "Crème fumée, noisettes torréfiées", prix: "9€" },
  { nom: "Cabillaud rôti", desc: "Carottes glacées, beurre citronné", prix: "21€" },
  { nom: "Gnocchis maison", desc: "Sauce aux cèpes, parmesan", prix: "18€" },
  { nom: "Tarte tatin", desc: "Crème crue", prix: "8€" },
];

export default function MenuPage() {
  return (
    <Section title="Menu" subtitle="Exemples – le menu évolue chaque semaine.">
      <div className="grid gap-6">
        {plats.map((p) => (
          <div key={p.nom} className="flex items-start justify-between border-b pb-4">
            <div>
              <h3 className="font-medium">{p.nom}</h3>
              <p className="text-sm text-neutral-600">{p.desc}</p>
            </div>
            <div className="text-sm font-semibold">{p.prix}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
