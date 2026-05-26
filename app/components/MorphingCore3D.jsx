// app/components/MorphingCore3D.jsx
'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, MeshWobbleMaterial, OrbitControls, PresentationControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 2) / 4;
      meshRef.current.rotation.y = time / 4;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -time / 2;
      innerRef.current.rotation.y = Math.cos(time / 2) / 4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} castShadow />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <group>
          {/* Main Morphing Outer Sphere */}
          <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color="#10b981"
              speed={2}
              distort={0.4}
              radius={1}
              metalness={0.8}
              roughness={0.2}
              emissive="#064e3b"
              emissiveIntensity={0.5}
            />
          </mesh>

          {/* Inner Wobbling Core */}
          <mesh ref={innerRef}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <MeshWobbleMaterial
              color="#3b82f6"
              speed={3}
              factor={0.6}
              metalness={1}
              roughness={0.1}
            />
          </mesh>

          {/* Floating Geometric Orbits */}
          {[...Array(3)].map((_, i) => (
            <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
              <mesh position={[2, 0, 0]}>
                <torusGeometry args={[0.1, 0.02, 16, 100]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
              </mesh>
            </group>
          ))}
        </group>
      </Float>
    </>
  );
}

export default function MorphingCore3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <PresentationControls
          global
          snap
          speed={1.5}
          zoom={0.8}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Scene />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
