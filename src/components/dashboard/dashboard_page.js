import { Outlet } from "react-router-dom";
import Dashboard from "./dashboard";
import Dashboard_layout from "./dashboard_layout";

function Dashboard_page() {
  return (
    <div>
      < Dashboard_layout dashboard_page={<Dashboard />} heading="Dashboard" />
    </div>
  );
}
export default Dashboard_page;