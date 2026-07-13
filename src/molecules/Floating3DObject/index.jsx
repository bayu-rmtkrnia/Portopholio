import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron, Environment } from '@react-three/drei';

const RotatingOctahedron = ({ color, speed }) => {
  const meshRef = useRef(null);

  // Animasi rotasi terus-menerus
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.5;
      meshRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <Octahedron ref={meshRef} args={[1, 0]}>
      {/* Material mengkilap (Glossy/Shiny) */}
      <meshPhysicalMaterial 
        color={color} 
        metalness={0.2}
        roughness={0.1}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        reflectivity={0.6}
      />
    </Octahedron>
  );
};

export const Floating3DObject = ({ 
  color = "#344CB7", 
  speed = 0.5 
}) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        {/* Pencahayaan untuk memperkuat efek glossy */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" /> {/* Memberikan pantulan realistis */}
        
        <RotatingOctahedron color={color} speed={speed} />
      </Canvas>
    </div>
  );
};
