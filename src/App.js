import HomeMenu from "./component/Home-Menu";
import HomeSpecial from "./component/Home-Special";
import PlaceOrder from "./component/Place-Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deserts from "./component/Deserts";
import Beverages from "./component/Beverages";

function App() {
  return (
    <div className="w-full mx-auto">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeSpecial />} />
          <Route exact path="/home-menu" element={<HomeMenu />} />
          <Route exact path="/place-order" element={<PlaceOrder />} />
          <Route exact path="/deserts" element={<Deserts />} />
          <Route exact path="/beverages" element={<Beverages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
