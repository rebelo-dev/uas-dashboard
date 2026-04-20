import DroneList from "../components/DroneList";
import CreateDrone from "../components/DroneCreate";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { api } from "@/services/api";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [drones, setDrones] = useState([]);



    useEffect(() => {
        const load = async () => {
            try {
                const data = await api.getDrones();
                setDrones(data);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);


    if (loading) return <LoadingScreen />;

    return (
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreateDrone onCreated={(newDrone) => setDrones(prev => [...prev, newDrone])} />
            <DroneList drones={drones} setDrones={setDrones} />
        </div>
    );
}