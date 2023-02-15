// Three
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, useHelper } from "@react-three/drei";

/**
 * Character Model
 * @param {object} props - Properties of Component
 */
function Model({ ...props }) {
  const pointer = new THREE.Vector2();

  const { nodes } = useGLTF("/models/model.gltf");

  // onClick={(event) => handlePointerOver(event)}

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={props.reference}
        geometry={nodes["BaseMesh_Low_Res-Detailed_Male-Femalelwo"].geometry}
        material={props.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default Model;
