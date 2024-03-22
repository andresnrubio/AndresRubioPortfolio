import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import App from './App';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="projects" element={<h1>projects</h1>} />
      <Route path="about" element={<h1>sobre mi</h1>} />
      <Route path="contact" element={<Contact />} />
      //* Routes for unspecified routes URLs
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Route>
  )
);

export default router;
