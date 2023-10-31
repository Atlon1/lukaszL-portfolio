import '../src/styles/tailwind.css';
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";


function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services'" element={<Services/>}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Layout>

    );
}

export default App;
