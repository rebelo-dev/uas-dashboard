const BASE_URL = "http://localhost:3000";

export const api = {

    // DRONES

    getDrones: () => fetch(`${BASE_URL}/drones`).then(r => r.json()),


    createDrone: (data) =>
        fetch(`${BASE_URL}/drones`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(r => r.json()),

    getDrone: (id) =>
        fetch(`${BASE_URL}/drones/${id}`).then(r => r.json()),

    updateDrone: (id, data) =>
        fetch(`${BASE_URL}/drones/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(r => r.json()),

    deleteDrone: (id) =>
        fetch(`${BASE_URL}/drones/${id}`, {
            method: "DELETE",
        }).then(r => r.json()),

    // TELEMETRY

    // manual post

    sendTelemetry: (id, data) =>
        fetch(`${BASE_URL}/drones/${id}/telemetry`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(r => r.json()),

    getTelemetry: (id) =>
        fetch(`${BASE_URL}/drones/${id}/telemetry`).then(r => r.json()),

    // ALERTS

    getAlerts: (id) =>
        fetch(`${BASE_URL}/alerts/drone/${id}`).then(r => r.json()),

    //SIMULATION

    startSimulation: (id) =>
        fetch(`${BASE_URL}/simulate/${id}/start`, { method: "POST" }).then(r => r.json()),

    stopSimulation: (id) =>
        fetch(`${BASE_URL}/simulate/${id}/stop`, { method: "POST" }).then(r => r.json()),


};