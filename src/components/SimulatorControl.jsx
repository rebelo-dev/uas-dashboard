import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";
import { useState } from "react";

export default function SimulatorControl({ droneId }) {
    const startSimulation = () => {
        api.startSimulation(droneId);
        setRunning(true);

    };

    const stopSimulation = () => {
        api.stopSimulation(droneId);
        setRunning(false);

    };

    const [running, setRunning] = useState(false);

    return (
        <Card className="shadow-sm border">
            <CardContent className="p-4 space-y-3">
                <h2 className="text-lg font-semibold mb-2">Simulation</h2>
                <h3>All Dynamic data is triggered to be updated every 5 seconds,
                    please wait a few seconds after starting the simulation to see changes in telemetry and alerts.
                </h3>

                <Button
                    onClick={startSimulation}
                    disabled={running}
                    className={`${running
                        ? "bg-gray-300"
                        : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                >
                    {running ? "Running..." : "Start Simulation"}
                </Button>

                <Button
                    onClick={stopSimulation}
                    disabled={!running}
                    className={`${!running
                        ? "bg-gray-300"
                        : "bg-red-600 text-white hover:bg-red-700"
                        }`}
                >
                    Stop Simulation
                </Button>
            </CardContent>
        </Card>
    );
}

