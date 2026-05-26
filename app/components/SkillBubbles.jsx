'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier';
import { Html, Environment } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// Import all official React Icons for the stack
import { FaReact, FaNodeJs, FaGithub, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiExpress, SiPostgresql, SiHtml5, SiCss3, SiVercel, SiPrisma } from 'react-icons/si';

// Configure the stack with actual SVG components
const skillsConfig = [
  { icon: <FaReact size={80} color="#61dafb" />, name: 'React' },
  { icon: <SiNextdotjs size={80} color="#000000" />, name: 'Next.js' },
  { icon: <SiTypescript size={80} color="#3178c6" />, name: 'TS' },
  { icon: <FaNodeJs size={80} color="#339933" />, name: 'Node' },
  { icon: <SiExpress size={80} color="#333333" />, name: 'Express' },
  { icon: <SiPostgresql size={80} color="#336791" />, name: 'SQL' },
  { icon: <FaDocker size={80} color="#2496ed" />, name: 'Docker' },
  { icon: <FaAws size={80} color="#ff9900" />, name: 'AWS' },
  { icon: <FaGithub size={80} color="#333333" />, name: 'Git' },
  { icon: <SiCss3 size={80} color="#1572b6" />, name: 'CSS' },
  { icon: <SiHtml5 size={80} color="#e34f26" />, name: 'HTML' },
  { icon: <SiVercel size={80} color="#000000" />, name: 'Vercel' },
];

function Bubble({ icon, position }) {
  const rb = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (rb.current) {
        rb.current.applyImpulse({ 
            x: (Math.random() - 0.5) * 0.8, 
            y: (Math.random() - 0.5) * 0.8, 
            z: (Math.random() - 0.5) * 0.8 
        }, true);

        rb.current.setLinearDamping(1.5);
    }
  });

  const handlePointerDown = () => {
    if (rb.current) {
        rb.current.applyImpulse({ 
            x: (Math.random() - 0.5) * 60, 
            y: (Math.random() - 0.5) * 60, 
            z: (Math.random() - 0.5) * 60 
        }, true);
    }
  };

  return (
    // lockRotations keeps the HTML icon perfectly facing forward while acting physically
    <RigidBody 
      ref={rb} 
      position={position} 
      colliders="ball" 
      restitution={1.2} 
      friction={0.1}
      lockRotations 
    >
      <group 
        onPointerDown={handlePointerDown} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Invisible physical geometry just for pointer intersection bounding */}
        <mesh visible={false}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial />
        </mesh>
        
        {/* Center the logo precisely so it acts as the free-floating object */}
        <Html 
          center 
          style={{ 
            pointerEvents: 'none', 
            userSelect: 'none',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            filter: hovered ? 'brightness(1.5) drop-shadow(0px 0px 10px rgba(255,255,255,0.8))' : 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))', 
            transition: 'all 0.3s',
            transform: 'scale(1.5)' // scale the HTML purely via CSS 
          }}
        >
             {icon}
        </Html>
      </group>
    </RigidBody>
  );
}

// Invisible rigid body that tracks the mouse 
function Pointer() {
    const rb = useRef();
    useFrame(({ pointer, viewport }) => {
        if(rb.current) {
           rb.current.setNextKinematicTranslation({ 
               x: (pointer.x * viewport.width) / 2.5, 
               y: (pointer.y * viewport.height) / 2.5, 
               z: 0 
           });
        }
    });
    return (
        <RigidBody type="kinematicPosition" colliders={false} ref={rb}>
            <BallCollider args={[3]} />
        </RigidBody>
    )
}

function Bounds() {
  return (
    <>
      <CuboidCollider position={[0, -15, 0]} args={[30, 1, 30]} />
      <CuboidCollider position={[0, 15, 0]} args={[30, 1, 30]} />
      <CuboidCollider position={[0, 0, -10]} args={[30, 30, 1]} />
      <CuboidCollider position={[0, 0, 10]} args={[30, 30, 1]} />
      <CuboidCollider position={[-25, 0, 0]} args={[1, 30, 30]} />
      <CuboidCollider position={[25, 0, 0]} args={[1, 30, 30]} />
    </>
  )
}

export default function SkillBubbles() {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <spotLight position={[20, 20, 20]} intensity={3} castShadow />
                <Physics gravity={[0, 0, 0]}>
                    <Pointer />
                    <Bounds />
                    {skillsConfig.map((skill, i) => (
                        <Bubble 
                            key={i} 
                            icon={skill.icon} 
                            position={[
                                (Math.random() - 0.5) * 30,
                                (Math.random() - 0.5) * 30,
                                (Math.random() - 0.5) * 5
                            ]} 
                        />
                    ))}
                </Physics>
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
