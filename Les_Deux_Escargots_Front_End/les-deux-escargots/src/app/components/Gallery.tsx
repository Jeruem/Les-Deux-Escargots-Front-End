import Image from "next/image";

const imgs = [
  { src: "/images/salle.jpg", alt: "Salle" },
  { src: "/images/plat-1.jpg", alt: "Plat 1" },
  { src: "/images/plat-2.jpg", alt: "Plat 2" },
  { src: "/images/equipe.jpg", alt: "Équipe" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {imgs.map((img) => (
        <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition"
          />
        </div>
      ))}
    </div>
  );
}
