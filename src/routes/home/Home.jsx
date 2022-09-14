import Directory from "../../directory/Directory.jsx";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
