import React, { useEffect, useRef } from "react";
import planeScene from "../assets_3d/assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeRef} position={[0, -0.5, 1.2]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
