"use client";

import MobileGenericList from "./MobileGenericList";
import { MessageSquare } from "lucide-react";

export default function MobileTestimonios() {
  return (
    <MobileGenericList
      title="Testimonios"
      apiEndpoint="/api/testimonios"
      dataKey="testimonios"
      icon={MessageSquare}
      fields={[
        { key: "nombre", label: "Nombre", type: "text" },
        { key: "rol", label: "Rol (ej: Mamá de Emma)", type: "text" },
        { key: "texto", label: "Testimonio", type: "textarea", rows: 6 },
        { key: "destacado", label: "Destacado", type: "select", options: ["true", "false"] }
      ]}
      newItemTemplate={{
        nombre: "Nuevo Cliente",
        rol: "Mamá/Papá",
        texto: "Testimonio aquí...",
        destacado: "false"
      }}
    />
  );
}
