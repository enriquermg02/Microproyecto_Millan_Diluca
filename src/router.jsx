import { createBrowserRouter } from 'react-router-dom';
// import Login from "./view/LoginPage"
// import Main from "./view/Main"
// import Sign from "./view/SingInPage"
import Login from "./view/Login"
import Main from "./view/Main"
import Sign from "./view/Signin"
import AppPage from "./view/AppPage"
import Perfil from "./view/Perfil"
import SinginGoogle from './view/SinginGoogle';
import Intermedio from "./view/Intermedio"
import Buscador from "./view/Buscador"




export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
    },
    
    {
      path: '/login',
      // element: <LoginPage />,
      element: <Login></Login>
    },
    {
        path: '/sign',
        // element: <LoginPage />,
        element: <Sign></Sign>
      },

    {
      path: 'AppPage',
      element: <AppPage></AppPage>,
    },
    {
        path: '/Perfil',
        element: <Perfil></Perfil>,
      },
    {
      path:'/SingGoogle',
      element:<SinginGoogle/>
    },
    {
      path:'/Intermedio',
      element:<Intermedio/>
    },
    {
      path:'/busqueda',
      element:<Buscador/>

    }
  ]);