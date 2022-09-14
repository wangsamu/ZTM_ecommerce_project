import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
