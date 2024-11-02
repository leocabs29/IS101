import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import RegisterForm from './RegisterForm.jsx'; 
import Register from './Register.jsx'; 
import Login from './Login.jsx'
import Products from './Producsts.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/landingPage" element={<LandingPage />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/registerForm" element={<RegisterForm />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/products" element={<Products />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
