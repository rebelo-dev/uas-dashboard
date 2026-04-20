import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
    const [lang, setLang] = useState("en");

    const content = {
        en: {
            title: "UAS Dashboard",
            subtitle:
                "The backend is starting up due to a cold-start. This usually takes a minute or two depending on the hosting provider. Please be patient :)",
            intro1:
                "This application (v1) simulates a drone monitoring and control interface inspired by maritime surveillance operations.",
            intro2:
                "It demonstrates how real-time telemetry, alerts, and control systems can be structured in a scalable architecture.",
            featuresTitle: "Core capabilities:",
            features: [
                "Create and manage drones (Cascade delete)",
                "Access individual drone dashboards",
                "Send telemetry and update status",
                "Run flight simulation",
                "Receive real-time telemetry & alerts"
            ],
            reposTitle: "Repositories:",
            note: "Both repositories include README files with detailed documentation and future improvements.",
            footer: "Initializing backend services..."
        },
        pt: {
            title: "UAS Dashboard",
            subtitle:
                "O backend está a iniciar devido a um cold-start. Normalmente demora cerca de 1 a 2 minutos. Por favor, seja paciente :)",
            intro1:
                "Esta aplicação (v1) simula uma interface de controlo e monitorização de drones inspirada em operações de vigilância marítima.",
            intro2:
                "Demonstra como telemetria em tempo real, alertas e controlo podem ser estruturados numa arquitetura escalável.",
            featuresTitle: "Funcionalidades principais:",
            features: [
                "Criar e gerir drones (Delete em cadeia)",
                "Aceder a páginas individuais de cada drone",
                "Enviar telemetria e atualizar estado de cada drone",
                "Executar simulações de voo",
                "Receber telemetria e alertas em tempo real"
            ],
            reposTitle: "Repositórios:",
            note: "Ambos os repositórios incluem ficheiros README com documentação detalhada e melhorias futuras.",
            footer: "A iniciar serviços do backend..."
        }
    };

    const t = content[lang];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-xl w-full bg-white border rounded-xl shadow-sm p-8 space-y-6">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Loader2 className="animate-spin text-blue-600" />
                        <h1 className="text-xl font-semibold">{t.title}</h1>
                    </div>

                    <button
                        onClick={() => setLang(lang === "en" ? "pt" : "en")}
                        className="text-xs px-3 py-1 border rounded-md hover:bg-gray-100"
                    >
                        {lang === "en" ? "PT" : "EN"}
                    </button>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                    {t.subtitle}
                </p>

                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                    <p>{t.intro1}</p>
                    <p>{t.intro2}</p>
                </div>

                <div className="space-y-2">
                    <p className="font-medium">{t.featuresTitle}</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                        {t.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-2 text-sm">
                    <p className="font-medium">{t.reposTitle}</p>
                    <div className="text-blue-600 space-y-1">
                        <a
                            href="https://github.com/rebelo-dev/uas-mission-control"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mission Control API
                        </a>
                        <br />
                        <a
                            href="https://github.com/rebelo-dev/uas-dashboard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dashboard Frontend
                        </a>
                    </div>
                </div>

                <p className="text-xs text-gray-500">{t.note}</p>

                <p className="text-xs text-gray-400 pt-2">
                    {t.footer}
                </p>
            </div>
        </div>
    );
}