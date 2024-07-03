import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import './App.css';
import ProjectType from './Components/ProjectType';
import SelectView from './Components/SelectView';


const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/ProjectType", element: <ProjectType /> },
  { path: "/SelectView", element: <SelectView /> },
  { path: "/", element: <Main /> },
  
]);

function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;