"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ROOF_TYPES, COLORS, WINDOW_TYPES } from "./constants";

function House({ roofType, roofColor, wallColor, windowType, windowColor, doorColor }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Main structure */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[6, 4, 6]} />
        <meshPhongMaterial color={COLORS[wallColor]} />
      </mesh>

      {/* Roof */}
      <group position={[0, 4.5, 0]}>
        {roofType === 'flat' ? (
          <mesh>
            <boxGeometry args={[7, 0.5, 7]} />
            <meshPhongMaterial color={COLORS[roofColor]} />
          </mesh>
        ) : (
          <mesh rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry 
              args={[
                5,
                ROOF_TYPES[roofType].height,
                ROOF_TYPES[roofType].segments
              ]} 
            />
            <meshPhongMaterial color={COLORS[roofColor]} />
          </mesh>
        )}
      </group>

      {/* Door */}
      <mesh position={[0, 1.5, 3.01]}>
        <boxGeometry args={[1.5, 3, 0.1]} />
        <meshPhongMaterial color={COLORS[doorColor]} />
      </mesh>

      {/* Windows */}
      {[-2, 2].map((x) => (
        <mesh key={x} position={[x, 2.5, 3.01]}>
          <boxGeometry 
            args={[
              WINDOW_TYPES[windowType].width,
              WINDOW_TYPES[windowType].height,
              0.1
            ]} 
          />
          <meshPhongMaterial 
            color={COLORS[windowColor]}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Scene(props) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 15]} />
      <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <House {...props} />
      <gridHelper args={[20, 20]} />
    </Canvas>
  );
}