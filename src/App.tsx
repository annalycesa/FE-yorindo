import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login'; 
import Event from './pages/Event';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Event /> 
  },
  { 
    path: "/login", 
    element: <Login /> 
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;