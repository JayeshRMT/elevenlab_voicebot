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
import Allstar from "./pages/allStar";

function App() {
  const BASE = "/travel/airline/agent";
  const OTAROUTE = "/travel/OTA/agent";
  const ENTERMENT = "/entertainment/events/agent";
  const AUTOMOBILE = "/automobile/bike/agent";
  const ALLSTARDRIVEREDU = "/education/driver/agent";

  return (
    <Router>
      <Routes>
        <Route
          path={`${BASE}/`}
          element={<Navigate to={`${BASE}/akasaair`} replace />}
        />
        <Route path={`${BASE}/akasaair`} element={<Aiagent1 />} />
        <Route path={`${BASE}/batikair`} element={<Batikair />} />
        <Route path={`${AUTOMOBILE}/yamaha`} element={<Yamaha />} />

        <Route path={`${OTAROUTE}/cleartrip`} element={<ClearTrip />} />
        <Route path={`${ALLSTARDRIVEREDU}/allstar`} element={<Allstar />} />

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
