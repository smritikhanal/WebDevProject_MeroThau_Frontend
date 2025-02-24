import Sidebar from "./AdminNavbar";
const AdminDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>
        <p>Welcome to the Admin Panel.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
