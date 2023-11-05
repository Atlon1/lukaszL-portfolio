import '../src/styles/tailwind.css';
import {Routes, Route, useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Transition from "./components/Transition";


function App() {

    const location = useLocation();


    return (

        <Layout>
            <motion.div key={location.pathname} className='h-full'>
                <Transition/>
                <Routes>
                    <Route path="lukaszL-portfolio/" element={<Home/>}/>
                    <Route path="lukaszL-portfolio/about" element={<About/>}/>
                    <Route path="lukaszL-portfolio/work" element={<Work/>}/>
                    <Route path="lukaszL-portfolio/contact" element={<Contact/>}/>
                </Routes>
            </motion.div>
        </Layout>

    );
}

export default App;
