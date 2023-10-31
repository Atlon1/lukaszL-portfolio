import '../src/styles/tailwind.css';
import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";


function App() {

    const location = useLocation();

    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Layout>

    );
}

export default App;
