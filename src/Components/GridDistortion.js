import { useEffect } from 'react';

const GridDistortion = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.distortable');

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const offsetX = clientX - (rect.left + rect.width / 2);
                const offsetY = clientY - (rect.top + rect.height / 2);

                // Calcule la rotation en fonction de la position de la souris
                const rotateX = (offsetY / windowHeight) * 4; // Ajuste pour une distorsion plus ou moins forte
                const rotateY = -(offsetX / windowWidth) * 4;

                // Applique la transformation
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        };

        const handleMouseLeave = () => {
            elements.forEach((element) => {
                // Retourne à la position d'origine
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Nettoyage
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return null; // Aucun rendu nécessaire pour ce composant
};

export default GridDistortion;
