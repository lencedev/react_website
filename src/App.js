import './App.css';
import { useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
// import { Contact } from './Components/Contact';
import GridDistortion from './Components/GridDistortion';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import { SkillsGalaxy } from './Components/SkillsGalaxy';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    // useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => { console.log(data) })

    // }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        }
    }, []);

    return (
        <div className="App">
             <GridDistortion />
            <NavBar />
            <Banner />
            {/* <SkillsGalaxy /> */}
            <Skills />
            <div className="distortable">
                <Projects />
            </div>
            {/* <Contact     /> */}
            <Footer />
        </div>
    );
}

export default App;
