import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import TelemetrySender from "../components/TelemetrySender";
import AlertsList from "../components/AlertsList";

export default function DronePage() {
    const { id } = useParams();
    const [drone, setDrone] = useState(null);
    const [alerts, setAlerts] = useState([]);
    const fetchAlerts = () => api.getAlerts(id).then(setAlerts);


    const statusDrone = async () => {
        const newStatus = prompt("New status? ONLINE, OFFLINE, MAINTENANCE (IN CAPITAL LETTERS)");
        if (!newStatus) return;

        const updated = await api.updateDrone(id, { status: newStatus });
        setDrone(updated);
    };

    useEffect(() => {
        api.getDrone(id).then(setDrone);
        fetchAlerts();
    }, [id]);

    if (!drone) return <div>Loading...</div>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Drone {id}</h1>
            <p>Status: {drone.status}</p>

            <button onClick={statusDrone}>Update Status</button>

            {/* <TelemetrySender droneId={id} /> */}


            <TelemetrySender droneId={id} onTelemetrySent={fetchAlerts} />

            {/* <AlertsList droneId={id} /> */}


            <AlertsList alerts={alerts} droneName={drone?.name} />

        </div>
    );
}



{/* const [alerts, setAlerts] = useState([]);*/ }
{/*  const fetchAlerts = () => api.getAlerts(id).then(setAlerts);*/ }
{/* fetchAlerts(); use effect*/ }