import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import './App.css';
import ProjectType from './Components/ProjectType';
import SelectView from './Components/SelectView';
import PermissionSelector from './Components/PermissionSelector';
import TaskManager from './Components/TaskManager'
import TeamManager from './Components/TeamManager';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/ProjectType", element: <ProjectType /> },
  { path: "/SelectView", element: <SelectView /> },
  { path: "/PermissionSelector", element: <PermissionSelector /> },
  { path: "/TaskManager", element: <TaskManager/> },
  { path: "/TeamManager", element: <TeamManager /> },
  
]);

function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;