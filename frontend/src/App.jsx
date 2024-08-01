import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Bottombar from './Bottombar';
import Navbar from './navbar';
import Home from './home';
import Workoutform from './workoutform';
import { useAuthContext } from './useauthcontext';
import Signup from './signup';
import Login from './login';

export default function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages h-[90vh] box-border bg-gray-200">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/user/login" />} />
          <Route path="/form" element={user ? <Workoutform /> : <Navigate to="/user/login" />} />
          <Route path="/user/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/user/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </div>
      <Bottombar />
    </BrowserRouter>
  );
}
