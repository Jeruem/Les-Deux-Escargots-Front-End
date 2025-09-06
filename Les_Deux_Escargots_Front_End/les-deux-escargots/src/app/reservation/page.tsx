"use client";

import Section from "@/app/components/Section";
import { useState } from "react";

export default function ReservationPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(null); setErr(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setOk("Réservation envoyée ! Nous vous confirmons par email sous peu.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (error: any) {
      setErr(error.message ?? "Erreur");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section title="Réserver une table" subtitle="Réponse rapide par email.">
      <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
        <div className="grid gap-2">
          <label className="text-sm">Nom complet *</label>
          <input name="name" required className="border rounded-xl px-3 py-2" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Email *</label>
          <input type="email" name="email" required className="border rounded-xl px-3 py-2" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Téléphone</label>
          <input name="phone" className="border rounded-xl px-3 py-2" />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm">Date *</label>
            <input type="date" name="date" required className="border rounded-xl px-3 py-2" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm">Heure *</label>
            <input type="time" name="time" required className="border rounded-xl px-3 py-2" />
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Couverts *</label>
          <input type="number" name="covers" min={1} max={12} required className="border rounded-xl px-3 py-2" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Message</label>
          <textarea name="message" rows={4} className="border rounded-xl px-3 py-2" />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-black text-white text-sm disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer la demande"}
        </button>

        {ok && <p className="text-green-700">{ok}</p>}
        {err && <p className="text-red-600">{err}</p>}
      </form>
    </Section>
  );
}
