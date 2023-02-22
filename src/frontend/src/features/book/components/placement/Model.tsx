// Three
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, useHelper } from "@react-three/drei";
import { ReactNode, forwardRef } from "react";
import React from "react";

interface ModelProps {
  children?: ReactNode;
}

type ModelRef = THREE.Mesh;

/**
 * Character Model
 * @param {object} props - Properties of Component
 */
const Model = forwardRef<ModelRef, ModelProps>((props, ref) => {
  const { children } = props;

  const pointer = new THREE.Vector2();

  const nodes: THREE.BufferGeometry[] = useGLTF("/models/model.gltf")["nodes"];

  // onClick={(event) => handlePointerOver(event)

  return (
    <mesh
      ref={ref}
      geometry={nodes["BaseMesh_Low_Res-Detailed_Male-Femalelwo"].geometry}
      rotation={[Math.PI / 2, 0, 0]}
      scale={3.5}
    >
      <meshStandardMaterial color={0x493d08} />
      {children}
    </mesh>
  );
});

useGLTF.preload("/models/model.gltf");

export default Model;
