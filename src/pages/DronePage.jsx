import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import TelemetrySender from "../components/TelemetrySender";
import AlertsList from "../components/AlertsList";
import SimulatorControl from "../components/SimulatorControl";
import TelemetryList from "../components/TelemetryList";
import { Button } from "../components/ui/button";



export default function DronePage() {
    const { id } = useParams();
    const [drone, setDrone] = useState(null);



    useEffect(() => {
        api.getDrone(id).then(setDrone);

        const fetchDrone = () => {
            api.getDrone(id).then(setDrone);

        }
        fetchDrone();

        const interval = setInterval(fetchDrone, 5000);
        return () => clearInterval(interval);

    }, [id]);

    const statusDrone = async () => {
        const newStatus = prompt("New status? ONLINE, OFFLINE, MAINTENANCE (IN CAPITAL LETTERS)");
        if (!newStatus) return;

        const updated = await api.updateDrone(id, { status: newStatus });
        setDrone(updated);
    };


    if (!drone) return <div>Loading...</div>;

    //if (!drone) return <p className="text-gray-500">Loading...</p>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">
                {drone.name}
            </h1>

            <p className="text-sm text-gray-500">
                ID: {id}
            </p>

            <p
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                    ${drone.status === "ONLINE"
                        ? "bg-green-100 text-green-700"
                        : drone.status === "OFFLINE"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                    }`}
            >
                {drone.status}
            </p>

            <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={statusDrone}>
                Update Status Manually
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TelemetrySender droneId={id} />
                <SimulatorControl droneId={id} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TelemetryList droneId={id} />
                <AlertsList droneId={id} />
            </div>



        </div>
    );
}


