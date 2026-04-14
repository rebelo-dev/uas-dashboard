import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function TelemetrySender({ droneId, onTelemetrySent }) {
    const [speed, setSpeed] = useState("");
    const [altitude, setAltitude] = useState("");

    const sendTelemetry = async () => {
        await api.sendTelemetry(droneId, {
            speed: Number(speed),
            altitude: Number(altitude),
            lat: 0,
            lng: 0,
        });
        onTelemetrySent();

    };

    return (
        <Card>
            <CardContent className="p-4 space-y-3">
                <h2 className="text-lg font-semibold">Send Telemetry</h2>

                <Input
                    placeholder="Speed"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                />

                <Input
                    placeholder="Altitude"
                    value={altitude}
                    onChange={(e) => setAltitude(e.target.value)}
                />

                <Button onClick={sendTelemetry}>
                    Send
                </Button>
            </CardContent>
        </Card>
    );
}