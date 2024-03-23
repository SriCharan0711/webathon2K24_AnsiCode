import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Register from './components/Register';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Artists from './components/Artists';
import StoryWriters from './components/StoryWriters';
import Developers from './components/Developers';
import UserProfile from './components/UserProfile';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/aboutus',
          element:<AboutUs/>
        },
        {
          path:'/artists',
          element:<Artists/>
        },
        {
          path:'/storywriters',
          element:<StoryWriters/>
        },
        {
          path:'/developers',
          element:<Developers/>
        },
        {
          path:'/userprofile',
          element:<UserProfile/>
        }
      ]
    }
  ])
  return (
    <div>
     
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
