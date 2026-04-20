import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { api } from "@/services/api";

export default function DroneList({ drones, setDrones }) {
    const navigate = useNavigate();

    return (
        <Card className="shadow-sm border">
            <CardContent className="p-4 space-y-3">
                <h2 className="text-lg font-semibold">Drones</h2>

                {drones.map((d) => (
                    <div
                        key={d.id}
                        onClick={() => navigate(`/drone/${d.id}`)}
                        className="p-3 rounded-md border bg-white hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                        <div>
                            <p className="font-medium">{d.name}</p>
                            <p className="text-sm text-gray-500">{d.status}</p>
                        </div>


                        <button className="text-red-500 text-sm hover:underline" onClick={async (e) => {
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

