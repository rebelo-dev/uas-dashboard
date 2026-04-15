import DroneList from "../components/DroneList";
import CreateDrone from "../components/DroneCreate";

export default function Dashboard() {
    return (
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreateDrone />
            <DroneList />
        </div>
    );
}