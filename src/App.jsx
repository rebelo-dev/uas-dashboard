
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import DronePage from "@/pages/DronePage";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drone/:id" element={<DronePage />} />
      </Routes>
    </div>
  );
}
/*

TEST TO SEE IF TAILWIND IS WORKING


export default function App() {
  return (
    <div className="text-red-500 text-3xl">
      Tailwind is working
    </div>
  );
}
  
*/