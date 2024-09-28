import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef, useState } from 'react';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import python from "../assets/python.png";
import c from "../assets/c.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import cpp from "../assets/cpp.png";

import * as THREE from 'three'; // Import explicit de THREE

const SkillSphere = ({ texture, name, position }) => {
    const sphereRef = useRef();
    const iconTexture = useTexture(texture);

    // Correction du wrapping de la texture
    iconTexture.wrapS = iconTexture.wrapT = THREE.RepeatWrapping;

    return (
        <mesh 
            position={position}
            ref={sphereRef}
        >
            {/* Utilisation d'une géométrie de sphère */}
            <sphereGeometry args={[0.4, 64, 64]} />
            {/* Application de la texture sur la sphère */}
            <meshStandardMaterial map={iconTexture} />
        </mesh>
    );
};
export const SkillsGalaxy = () => {
    const skills = [
        { texture: react, name: "React", position: [1, 1, 0] },
        { texture: python, name: "Python", position: [-1, -1, 0] },
        { texture: c, name: "C", position: [1, -1, 0] },
        { texture: javascript, name: "JavaScript", position: [-1, 1, 0] },
        { texture: cpp, name: "C++", position: [0, 0, 1] }
    ];

    return (
        <section className="skill" id="skills" style={{ height: '50vh', width: '100vw' }}>
            <Canvas>
                {/* Orbit Controls for camera movement */}
                <OrbitControls enableZoom={false} />
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                {/* Background stars for space effect */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                {/* Render each skill as a textured sphere */}
                {skills.map((skill, index) => (
                    <SkillSphere 
                        key={index} 
                        texture={skill.texture} 
                        name={skill.name} 
                        position={skill.position} 
                    />
                ))}
            </Canvas>
        </section>
    );
};
