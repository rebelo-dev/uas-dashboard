
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import DronePage from "@/pages/DronePage";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  if (loading) {


    return (
      <>
        <LoadingScreen />
        <button onClick={() => setLoading(false)}> tornar loading false</button>
      </>);


  }




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
   <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drone/:id" element={<DronePage />} />
      </Routes>


TEST TO SEE IF TAILWIND IS WORKING


export default function App() {
  return (
    <div className="text-red-500 text-3xl">
      Tailwind is working
    </div>
  );
}
  
*/