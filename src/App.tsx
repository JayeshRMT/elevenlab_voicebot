import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Aiagent1NewVersion from "./lastestVersion/aiAgent1NewVersion";
import Aiagent1 from "./aiAgent1";
import Batikair from "./batikair";
import BatikairNew from "./lastestVersion/batikair1NewVersion";
import ClearTrip from "./clearTrip";
import TicketNetwork from "./ticketnetwork";

function App() {
  const BASE = "/travel/airline/agent";
  const OTAROUTE = "/travel/OTA/agent";
  const ENTERMENT = "/entertainment/events/agent";

  return (
    <Router>
      <Routes>
        <Route
          path={`${BASE}/`}
          element={<Navigate to={`${BASE}/akasaair`} replace />}
        />
        <Route path={`${BASE}/akasaair`} element={<Aiagent1 />} />
        <Route path={`${BASE}/batikair`} element={<Batikair />} />
        <Route path={`${OTAROUTE}/cleartrip`} element={<ClearTrip />} />
        <Route
          path={`${ENTERMENT}/ticketnetwork`}
          element={<TicketNetwork />}
        />
        <Route path={`${BASE}/akasaair-new`} element={<Aiagent1NewVersion />} />
        <Route path={`${BASE}/batikair-new`} element={<BatikairNew />} />

        <Route path="*" element={<div>No Route Exist</div>} />
      </Routes>
    </Router>
  );
}

export default App;
