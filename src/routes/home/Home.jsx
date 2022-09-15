import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory.jsx";
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
