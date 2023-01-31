import React from "react";
import "../styles/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
    	<Layout>
        	<Routes>
         		 <Route path="/" element={<Home />} />
          		<Route path="/login" element={<Login />} />
         		 <Route path="/password-recovery" element={<PasswordRecovery />} />
          		<Route path="*" element={<NotFound />} />
        	</Routes>
      	</Layout>
    </BrowserRouter>
  );
};

export default App;