import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast'; // Import the Toaster component
import 'react-toastify/dist/ReactToastify.css';
import Policy from './pages/privacy';
import NotFound from './pages/notFound';
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  return (
    <BrowserRouter>
        <Toaster /> {/* Add the Toaster component here */}
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="privacy-policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
        <Route path="delete-account" element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
