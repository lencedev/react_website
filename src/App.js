import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';


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

      // Cleanup
      return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
      }
  }, []);

  return (
      <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
      </div>
  );
}

export default App;
