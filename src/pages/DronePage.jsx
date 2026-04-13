import { useParams } from "react-router-dom";
//import TelemetrySender from "../components/TelemetrySender";
//import AlertsList from "../components/AlertsList";

export default function DronePage() {
    const { id } = useParams();

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Drone {id}</h1>
            {/* <TelemetrySender droneId={id} /> */}
            {/* <AlertsList droneId={id} /> */}

        </div>
    );
}
