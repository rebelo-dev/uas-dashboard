import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function CreateDrone({ onCreated }) {
    const [name, setName] = useState("");

    const handleCreate = async () => {
        try {
            const newDrone = await api.createDrone({ name });
            onCreated(newDrone);
            setName("");
        }
        catch (err) {
            alert(err.message);
        }
    };

    return (
        <Card className="shadow-sm border">
            <CardContent className="p-4 space-y-3">
                <h2 className="text-lg font-semibold">Create Drone</h2>

                <Input
                    placeholder="Drone name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Button onClick={handleCreate}>Create</Button>
            </CardContent>
        </Card>
    );
}