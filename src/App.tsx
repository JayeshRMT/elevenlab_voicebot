import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Aiagent1NewVersion from "./lastestVersion/aiAgent1NewVersion";
import Aiagent1 from "./pages/akasaair";
import Batikair from "./pages/batikair";
import BatikairNew from "./lastestVersion/batikair1NewVersion";
import ClearTrip from "./pages/clearTrip";
import TicketNetwork from "./pages/ticketnetwork";
import Yamaha from "./pages/yamaha";

function App() {
  // const OTAROUTE = "/travel/OTA/agent";
  // const ENTERMENT = "/entertainment/events/agent";
  // const AUTOMOBILE = "/automobile/bike/agent";

  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Navigate to={`/akasaair`} replace />} />
        <Route path={`/akasaair`} element={<Aiagent1 />} />
        <Route path={`/batikair`} element={<Batikair />} />
        <Route path={`/yamaha`} element={<Yamaha />} />

        <Route path={`/cleartrip`} element={<ClearTrip />} />
        <Route path={`/ticketnetwork`} element={<TicketNetwork />} />
        <Route path={`/akasaair-new`} element={<Aiagent1NewVersion />} />
        <Route path={`/batikair-new`} element={<BatikairNew />} />

        <Route path="*" element={<div>No Route Exist</div>} />
      </Routes>
    </Router>
  );
}

export default App;
