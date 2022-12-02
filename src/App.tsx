import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'Home'
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const App = () => 
   (
    <RouterProvider router={router} />
  )


export default App;
