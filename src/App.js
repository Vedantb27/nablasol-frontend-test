import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import Main from './Main';
import './App.css';
import CreateProject from './Components/CreateProject';
import ProjectType from './Components/ProjectType';
import SelectView from './Components/SelectView';
import PermissionSelector from './Components/PermissionSelector';
import TaskManager from './Components/TaskManager';
import TeamManager from './Components/TeamManager';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/CreateProject", element: <CreateProject /> },
  { path: "/ProjectType", element: <ProjectType /> },
  { path: "/SelectView", element: <SelectView /> },
  { path: "/PermissionSelector", element: <PermissionSelector /> },
  { path: "/TaskManager", element: <TaskManager /> },
  { path: "/TeamManager", element: <TeamManager /> },
]);

function App() {
  return (
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  );
}

export default App;