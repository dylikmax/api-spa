import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-xl font-mono min-h-screen flex flex-col bg-slate-900 text-white">
      <Header />
      <div className="flex-1 py-10 px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Из дополнительных заданий сделано своё API