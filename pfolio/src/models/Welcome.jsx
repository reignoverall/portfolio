import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import manScene from "../assets_3d/assets/3d/welcome.glb";
const Welcome = () => {
  const { scene, animations } = useGLTF(manScene);
  const manRef = useRef();
  const { actions } = useAnimations(animations, manRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  return (
    <mesh ref={manRef} scale={1} position={[0, -2, -3]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Welcome;
