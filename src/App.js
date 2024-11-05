import './App.css';
import { useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import GridDistortion from './Components/GridDistortion';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import { WakaTimeStats } from './Components/WakaTimeStats';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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

        // Cleanup function
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="App">
            <GridDistortion />
            <NavBar />
            <Banner />
            <Skills />
            <div className="distortable">
                <Projects />
            </div>
            <WakaTimeStats />
            <Footer />
        </div>
    );
}

export default App;
