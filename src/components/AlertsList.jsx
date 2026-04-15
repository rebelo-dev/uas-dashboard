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
        <Card className="shadow-sm border">
            <CardContent className="p-4 space-y-3">
                <h2 className="text-lg font-semibold text-red-600">
                    Alerts
                </h2>

                {alerts.slice(0, 8).map((alert) => (
                    <div key={alert.id} className="p-2 rounded-md bg-red-50 border">
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