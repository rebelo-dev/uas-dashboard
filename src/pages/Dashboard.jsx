import DroneList from "../components/DroneList";
import CreateDrone from "../components/DroneCreate";

export default function Dashboard() {
    return (
        <div className="p-6 grid grid-cols-2 gap-6">
            <CreateDrone />
            <DroneList />
        </div>
    );
}