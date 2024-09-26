import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast'; // Import the Toaster component
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
        <Toaster /> {/* Add the Toaster component here */}
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
