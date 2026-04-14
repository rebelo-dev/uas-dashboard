import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function AlertsList({ droneId }) {
    const [alerts, setAlerts] = useState([]);

    const fetchAlerts = () => {
        api.getAlerts(droneId).then(setAlerts);
    };

    useEffect(() => {
        fetchAlerts();

        const interval = setInterval(fetchAlerts, 5000);
        return () => clearInterval(interval);
    }, [droneId]);

    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-red-600">
                    Alerts
                </h2>

                {alerts.slice(0, 8).map((alert) => (
                    <div key={alert.id} className="p-2 border-b">
                        <p>{alert.type}</p>
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-red-500">
                            {alert.severity}
                        </p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}