import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import FinancialHealth from "./pages/FinancialHealth";
import Settlement from "./pages/Settlement";
import Email from "./pages/Email";
import History from "./pages/History";
import AINegotiation from "./pages/AINegotiation";
import KnowYourRights from "./pages/KnowYourRights";
import NotFound from "./pages/NotFound";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/financial-health" element={<FinancialHealth />} />

      <Route path="/settlement" element={<Settlement />} />

      <Route path="/ai-negotiation" element={<AINegotiation />} />

      <Route path="/email" element={<Email />} />

      <Route path="/know-your-rights" element={<KnowYourRights />} />

      <Route path="/history" element={<History />} />

      <Route path="*" element={<NotFound />} />

    </Routes>

  );

}

export default App;
