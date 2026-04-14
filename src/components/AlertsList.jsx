import { Card, CardContent } from "./ui/card";
export default function AlertsList({ alerts, droneName }) {
    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-red-600">
                    Alerts for Drone: {droneName}
                </h2>

                {alerts.map((alert) => (
                    <div key={alert.id} className="p-2 border-b">
                        <p>{alert.type}</p>
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-red-500">{alert.severity}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}    
