import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import Home from "./Pages/HomePage";
import UploadProfile from "./Pages/UploadProfile"; // Import Home component
import AboutUs from "./Pages/AboutUs"; // Example: AboutUs component
import Services from "./Pages/Services"; // Example: Services component
import Allhotels from "./Pages/Allhotels"; 
import ContactUs from "./Pages/ContactUs"; // Example: ContactUs component
import Login from "./Pages/Login"; // Example: Login component
import ForgotPassword from "./Pages/ForgotPassword";
import Register from "./Pages/Register";
import Fishtail from "./Hotels/Fishtail"; 
import HotelMalla from "./Hotels/HotelMalla";
import KarmaVilla from './Hotels/KarmaVilla';
import LakesideStay from './Hotels/LakesideStay';
import Confirmation from './Pages/Confirmation';
import ReviewFeedback from './Pages/ReviewFeedback';
import ManageHotel from "./Admin/ManageHotel";
import AdminDashboard from "./Admin/AdminDashboard";
import HotelDetails from "./Pages/HotelDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/profile" element={<UploadProfile />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/all-hotels" element={<Allhotels />} />
        <Route path="/Hotels/Fishtail" element={<Fishtail />} /> 
         <Route path="/Hotels/HotelMalla" element={<HotelMalla />} /> 
         <Route path="/Hotels/KarmaVilla" element={<KarmaVilla />} /> 
         <Route path="/Hotels/LakesideStay" element={<LakesideStay />} /> 
         <Route path="/Pages/Confirmation" element={<Confirmation />} /> 
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/ReviewFeedback" element={<ReviewFeedback />} />


        <Route path="/manage-hotel" element={<ManageHotel />} />
        {/* <Route path="/manage-user" element={<Manageu />} /> */}
        <Route path="/Hotels/:id" element={<HotelDetails />} /> 

        <Route path="/admin-page" element={<AdminDashboard />} />

        
      </Routes>
    </Router>
  );
};

export default App;