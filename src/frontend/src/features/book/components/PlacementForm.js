import { useEffect, useRef, Suspense } from "react";
import { useOutletContext } from "react-router-dom";

import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";

import placementStyles from "../assets/css/placement.css";

const PlacementForm = () => {
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [decal, setDecal] = useState(null);
  const controls = useRef();

  let context = useOutletContext();

  function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += delta));
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  }

  function Model({ ...props }) {
    const pointer = new THREE.Vector2();

    function handlePointerOver(e) {
      let container = document.getElementById("placement-canvas");
      let rect = container.getBoundingClientRect();

      pointer.x = ((e.clientX - rect.left) / container.offsetWidth) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / container.offsetHeight) * 2 + 1;

      var raycaster = new THREE.Raycaster();

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(scene.children);

      if (!hits.length) return;

      const position = hits[0].point.clone();
      const eye = position.clone();
      eye.add(hits[0].face.normal);

      const rotation = new THREE.Matrix4();
      rotation.lookAt(eye, position, THREE.Object3D.DEFAULT_UP);
      const euler = new THREE.Euler();
      euler.setFromRotationMatrix(rotation);

      const decalGeometry = new DecalGeometry(
        hits[0].object,
        hits[0].point,
        euler,
        new THREE.Vector3(0.5, 0.5, 0.5)
      );
      const decalMaterial = new THREE.MeshStandardMaterial({
        color: 0xf05d23,
        depthTest: true,
        depthWrite: true,
        polygonOffset: true,
        polygonOffsetFactor: -4,
      });

      const newDecal = new THREE.Mesh(decalGeometry, decalMaterial);
      newDecal.receiveShadow = true;

      scene.remove(decal);
      scene.add(newDecal);

      setDecal(newDecal);

      console.log(hits);
    }

    const group = useRef();
    const { nodes, materials } = useGLTF("/models/model.gltf");

    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes["BaseMesh_Low_Res-Detailed_Male-Femalelwo"].geometry}
          material={props.material}
          onClick={(event) => handlePointerOver(event)}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    );
  }

  // Component Loaded Flag
  const loaded = useRef(false);

  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return;
    }

    // Else Play Animation
    loaded.current = true;

    context.setHeader("select placement of tattoo");
    context.setNextStep("location");
  }, []);

  const material = new THREE.MeshBasicMaterial();
  material.color = new THREE.Color(0x493d08);

  return (
    <div id="placement-canvas" className="placement-form">
      <Canvas
        onCreated={({ camera, scene, gl }) => {
          setScene(scene);
          setCamera(camera);
          camera.rotateZ(50);
          setRenderer(gl);
        }}
      >
        <axesHelper />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          ref={controls}
          autoRotate={false}
          minPolarAngle={1.5}
          maxPolarAngle={1.5}
        />
        <Model scale={[4, 4, 4]} material={material} />
      </Canvas>
    </div>
  );
};

export default PlacementForm;
