import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function TelemetryList({ droneId }) {
    const [telemetry, setTelemetry] = useState([]);

    const fetchTelemetry = () => {
        api.getTelemetry(droneId).then(setTelemetry);

    };

    useEffect(() => {
        fetchTelemetry();

        const interval = setInterval(fetchTelemetry, 5000);
        return () => clearInterval(interval);
    }, [droneId]);

    return (
        <Card className="shadow-sm border">
            <CardContent className="p-4 space-y-3">
                <h2 className="text-lg font-semibold">Telemetry</h2>

                {telemetry.slice(0, 8).map((t) => (
                    <div key={t.id} className="p-2 rounded-md bg-gray-50 border text-sm"
                    >
                        <p>Speed: {t.speed}</p>
                        <p>Altitude: {t.altitude}</p>
                        <p>
                            Lat/Lng: {t.lat.toFixed(4)} / {t.lng.toFixed(4)}
                        </p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
