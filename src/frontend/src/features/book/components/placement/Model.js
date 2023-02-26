// Three
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";

/**
 * Character Model
 * @param {object} props - Properties of Component
 */
const Model = (props) => {
  const ref = useRef();

  const { disabled, clickHandler, children } = props;

  const nodes = useGLTF("/models/model.gltf")["nodes"];

  //useFrame(({ scene, raycaster }) => {
  //if (raycaster.intersectObjects(scene.children).length > 0)
  //console.log(raycaster.intersectObjects(scene.children));
  //});

  const raycaster = useThree((state) => state.raycaster);
  const scene = useThree((state) => state.scene);

  const handleClick = () => {
    //event.stopPropagation();
    //if (raycaster.intersectObjects(scene.children).length > 0)
    //console.log(raycaster.intersectObjects(scene.children));

    const hits = raycaster.intersectObjects(scene.children);

    if (!hits.length) return;

    const position = hits[0].point.clone();
    const eye = position.clone();
    const normal = hits[0].face.normal;
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(
      hits[0].object.matrixWorld
    );
    normal.applyMatrix3(normalMatrix).normalize();
    eye.add(normal);

    const rotation = new THREE.Matrix4();
    rotation.lookAt(eye, position, new THREE.Vector3(0, 0, -1));
    const euler = new THREE.Euler();
    euler.setFromRotationMatrix(rotation);

    clickHandler(
      ref.current,
      position,
      euler,
      new THREE.Vector3(0.25, 0.25, 0.25),
      eye
    );
  };

  // onClick={(event) => handlePointerOver(event)

  return (
    <mesh
      ref={ref}
      geometry={nodes["BaseMesh_Low_Res-Detailed_Male-Femalelwo"].geometry}
      rotation={[Math.PI / 2, 0, 0]}
      scale={3.5}
      onClick={
        disabled
          ? () => {}
          : (event) => {
              event.stopPropagation();
              handleClick();
            }
      }
    >
      <meshStandardMaterial color={0x493d08} />
      {children}
    </mesh>
  );
};

useGLTF.preload("/models/model.gltf");

export default Model;
