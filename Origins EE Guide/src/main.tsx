import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import MainGuide from './components/Main/MainGuide';
import FireStaffPage from './components/Pages/FireStaff';
import IceStaffPage from './components/Pages/IceStaff';
import WindStaffPage from './components/Pages/WindStaff';
import LightningStaffPage from './components/Pages/LightningStaff';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainGuide />,
      },
      {
        path: 'FireStaff',
        element: <FireStaffPage />,
      },
      {
        path: 'IceStaff',
        element: <IceStaffPage />,
      },
      {
        path: 'WindStaff',
        element: <WindStaffPage />,
      },
      {
        path: 'LightningStaff',
        element: <LightningStaffPage />,
      },
    
    ],
  },
]);

// Grab the root element from the HTML file
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
