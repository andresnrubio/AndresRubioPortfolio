import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="projects" element={<h1>projects</h1>} />
      <Route path="about" element={<h1>sobre mi</h1>} />
      <Route path="contact" element={<h1>contacto</h1>} />
      //* Routes for unspecified routes URLs
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Route>
  )
);

export default router;
