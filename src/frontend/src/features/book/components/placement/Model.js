// Three
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, useHelper } from "@react-three/drei";
import { forwardRef } from "react";

/**
 * Character Model
 * @param {object} props - Properties of Component
 */
const Model = forwardRef((props, ref) => {
  const { material } = props;

  const pointer = new THREE.Vector2();

  const { nodes } = useGLTF("/models/model.gltf");

  // onClick={(event) => handlePointerOver(event)

  return (
    <mesh
      ref={ref}
      geometry={nodes["BaseMesh_Low_Res-Detailed_Male-Femalelwo"].geometry}
      material={props.material}
      rotation={[Math.PI / 2, 0, 0]}
      scale={props.scale}
    >
      {props.children}
    </mesh>
  );
});

useGLTF.preload("/models/model.gltf");

export default Model;
