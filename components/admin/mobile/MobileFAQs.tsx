"use client";

import MobileGenericList from "./MobileGenericList";
import { HelpCircle } from "lucide-react";

export default function MobileFAQs() {
  return (
    <MobileGenericList
      title="Preguntas Frecuentes"
      apiEndpoint="/api/faqs"
      dataKey="faqs"
      icon={HelpCircle}
      fields={[
        { key: "pregunta", label: "Pregunta", type: "text" },
        { key: "respuesta", label: "Respuesta", type: "textarea", rows: 5 }
      ]}
      newItemTemplate={{
        pregunta: "¿Nueva pregunta?",
        respuesta: "Respuesta aquí..."
      }}
    />
  );
}
