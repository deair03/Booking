import Header from "./components/Hearder";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";

const AppLayout = () => {
    return (
      <>
        <Header />
        <div className="py-5 px-60">
          <Outlet />
        </div>
      </>
    );
  };
  

  function App() {
    return <RouterProvider router={appRouter} />;
  }
  
  

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
         
      },
      {
        path: "/categories",
        element:<Categories />
      },
      {
        path: "/contactus",
        element: <ContactUs />
     
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
