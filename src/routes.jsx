import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="home" element={<h1>Hola</h1>} />
      <Route path="home2" element={<h1>Hola2</h1>} />
      <Route path="home3" element={<h1>Hola3</h1>} />
    </Route>
  )
);

export default router;
