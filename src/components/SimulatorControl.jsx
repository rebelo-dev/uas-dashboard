

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function SimulatorControl({ droneId }) {
    const startSimulation = () => {
        api.startSimulation(droneId);
    };

    return (
        <Card>
            <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">Simulation</h2>

                <Button onClick={startSimulation}>
                    Start Simulation
                </Button>
            </CardContent>
        </Card>
    );
}

