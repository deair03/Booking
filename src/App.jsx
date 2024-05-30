import HeaderLogo from "./components/HeaderLogo";
import HeaderSearch from "./components/HeaderSearch";
import CardSection from "./components/CardSection";
import LocalitySection from "./components/LocalitySection";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
function App()
{
    const [isVisible, setIsVisible] = useState(false);


    function toggle()
    {
        setIsVisible(n => !n);

    }

    return (
        <>
            <div className="flex justify-between py-5 border-b shadow-sm px-52">
                <HeaderLogo />
                <HeaderSearch />
            </div>
            <div className="py-5 px-60">
                <button onClick={toggle} className="p-3 transition-all ease-in-out border-2 hover:scale-95 rounded-xl" >{isVisible ? "Hide" : "Show"} all details</button>
                {(isVisible) && <div>
                    <CardSection />
                    <LocalitySection />
                </div>}

            </div>

        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<CardSection />
    },
    {
        path: "/",
        element:<Categories />

    },{
        path: "/",
        element:<ContactUs />

    },
    {
        path: "/",
        element:<AboutUs />

    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;