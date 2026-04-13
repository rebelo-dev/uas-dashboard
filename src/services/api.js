const BASE_URL = "http://localhost:3000";

export const api = {
    getDrones: () => fetch(`${BASE_URL}/drones`).then(r => r.json()),

    /*
    createDrone: (data) =>
        fetch(`${BASE_URL}/drones`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }),

    sendTelemetry: (id, data) =>
        fetch(`${BASE_URL}/drones/${id}/telemetry`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }),

    getAlerts: (id) =>
        fetch(`${BASE_URL}/alerts/drone/${id}`).then(r => r.json()),
    
    all this code needs to be tested, not sure about sintax here, will come back after doing drone pages as there are more methods to add.
    
    */


};