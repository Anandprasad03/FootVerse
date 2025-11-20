import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom' // Import Router components
import LandingPage from './Components/LandingPage';
import MainPage from './Components/MainPage';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* When URL is /, show LandingPage */}
        <Route path="/" element={<LandingPage />} />

        {/* When URL is /main, show MainPage */}
        <Route path="/main" element={<MainPage />} />

        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App