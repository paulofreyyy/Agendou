import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <Router>
            <Routes>
                {/* Página de início */}
                <Route path="/" element={<Home />} />

            </Routes>
        </Router>
    )
}