import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function DroneList() {
    const [drones, setDrones] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.getDrones().then(setDrones);
    }, []);


    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">Drones</h2>

                {drones.map((d) => (
                    <div
                        key={d.id}
                        onClick={() => navigate(`/drone/${d.id}`)}
                        className="p-2 bg-muted rounded cursor-pointer hover:bg-accent"
                    >
                        {d.name} — {d.status} —

                        <button
                            onClick={async (e) => {
                                e.stopPropagation();
                                await api.deleteDrone(d.id);
                                setDrones(prev => prev.filter(drone => drone.id !== d.id));
                            }}
                        >

                            Delete
                        </button>

                    </div>

                ))}
            </CardContent>
        </Card>

    );
}

