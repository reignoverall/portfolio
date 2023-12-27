import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import manScene from "../assets_3d/assets/3d/monitor.glb";
const Monitor = () => {
  const { scene, animations } = useGLTF(manScene);

  return (
    <mesh scale={20} position={[9, -2, -3]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Monitor;
