import { Link } from "react-router-dom";
import { HomeIcon, BuildingOfficeIcon, UserGroupIcon, QrCodeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700">
          <HomeIcon className="h-6 w-6" />
          Dashboard
        </Link>
        <Link to="/manage-hotel" className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700">
          <BuildingOfficeIcon className="h-6 w-6" />
          Hotels
        </Link>
        <Link to="/users" className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700">
          <UserGroupIcon className="h-6 w-6" />
          Users
        </Link>
        <Link to="/qr-upload" className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-700">
          <QrCodeIcon className="h-6 w-6" />
          QR Upload
        </Link>
      </nav>
    </div>
  );    
};
0
export default Sidebar;
