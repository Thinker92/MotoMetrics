import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
// import Compare from './pages/Compare';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      // {
      //   path: 'dashboard',
      //   element: <Dashboard />
      // }, 
      {
        path: 'search',
        element: <Search />
      }, 
      // {
      //   path: 'compare',
      //   element: <Compare />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
