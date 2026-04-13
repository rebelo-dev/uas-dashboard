import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { api } from "../services/api";

export default function CreateDrone() {
    const [name, setName] = useState("");

    const handleCreate = async () => {
        await api.createDrone({ name });
        location.reload();
    };

    return (
        <Card>
            <CardContent className="p-4 space-y-4">
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