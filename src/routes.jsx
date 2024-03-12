import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Hero from './components/Title';
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Hero />} />
      <Route path="projects" element={<h1>projects</h1>} />
      <Route path="about" element={<h1>sobre mi</h1>} />
      <Route path="contact" element={<h1>contacto</h1>} />
    </Route>
  )
);

export default router;
