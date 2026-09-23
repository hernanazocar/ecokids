"use client";

import MobileGenericList from "./MobileGenericList";
import { ShoppingBag } from "lucide-react";

export default function MobileServicios() {
  return (
    <MobileGenericList
      title="Servicios"
      apiEndpoint="/api/servicios"
      dataKey="servicios"
      icon={ShoppingBag}
      fields={[
        { key: "nombre", label: "Nombre del Servicio", type: "text" },
        { key: "descripcion", label: "Descripción", type: "textarea", rows: 4 },
        { key: "icono", label: "Icono (emoji)", type: "text" }
      ]}
      newItemTemplate={{
        nombre: "Nuevo Servicio",
        descripcion: "Descripción del servicio...",
        icono: "🎨"
      }}
    />
  );
}
