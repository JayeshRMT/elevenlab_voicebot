import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aiagent1NewVersion from "./lastestVersion/aiAgent1NewVersion";
import Aiagent1 from "./pages/akasaair";
import Batikair from "./pages/batikair";
import BatikairNew from "./lastestVersion/batikair1NewVersion";
import ClearTrip from "./pages/clearTrip";
import TicketNetwork from "./pages/ticketnetwork";
import Yamaha from "./pages/yamaha";
import LoginSignup from "./pages/login";
import NotFoundPage from "./pages/notFoundPage";
import Allstar from "./pages/allStar";
import TopDrivers from "./pages/topDrivers";
import Amezon from "./pages/amezon";

function App() {
  // const OTAROUTE = "/travel/OTA/agent"; // const ENTERMENT = "/entertainment/events/agent"; // const AUTOMOBILE = "/automobile/bike/agent";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/akasaair/64567" element={<Aiagent1 />} />
        <Route path="/batikair/64567" element={<Batikair />} />
        <Route path="/yamaha" element={<Yamaha />} />
        <Route path="/allstar" element={<Allstar />} />
        <Route path="/amazon" element={<Amezon />} />
        <Route path="/topDriver" element={<TopDrivers />} />
        <Route path="/cleartrip/64567" element={<ClearTrip />} />
        <Route path="/ticketnetwork" element={<TicketNetwork />} />
        <Route path="/akasaair-new/64567" element={<Aiagent1NewVersion />} />
        <Route path="/batikair-new/64567" element={<BatikairNew />} />

        {/* Redirect all unknown routes to login */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
