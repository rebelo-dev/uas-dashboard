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

        const interval = setInterval(fetchTelemetry, 5000); // auto refresh
        return () => clearInterval(interval);
    }, [droneId]);

    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">Telemetry</h2>

                {telemetry.slice(0, 8).map((t) => (
                    <div key={t.id} className="p-2 border-b text-sm">
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