// #region Imports

// Hooks
import { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

// Styles
import placementStyles from "../assets/css/placement.css";

// Three
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, useHelper } from "@react-three/drei";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";

// #endregion

const PlacementForm = () => {
  // Router Outlet Context
  let context = useOutletContext();

  // Site Address
  let location = useLocation();

  // Core Three Components
  const [renderer, setRenderer] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);

  // Camera Controls
  const controls = useRef();

  // Orbit Point
  const [angle, setAngle] = useState({
    maxX: 0,
    minX: 0,
    maxY: 1.5,
    minY: 1.5,
  });

  // Character Model
  const model = useRef();

  // Materials
  const brownMaterial = new THREE.MeshStandardMaterial();
  brownMaterial.color = new THREE.Color(0x493d08);

  const orangeMaterial = new THREE.MeshBasicMaterial();
  orangeMaterial.color = new THREE.Color(0xf05d23);

  // Body Part Decals
  const bodyDecal = {
    position: {
      x: 0,
      y: 1.03,
      z: 0.18034634277807615,
    },
    scale: { x: 1.265, y: 2.44, z: 1.3 },
    angle: { maxX: Infinity, minX: 0, maxY: 1.5, minY: 1.5 },
    distance: 3,
  };

  const rArmDecal = {
    position: {
      x: 2.21,
      y: 1.37388664109075326,
      z: 0.19235529706892926,
    },
    scale: { x: 3.1, y: 2.2, z: 10 },
    angle: { maxX: 3.5, minX: -0.5, maxY: 6, minY: 1.5 },
    distance: 2,
  };

  const lArmDecal = {
    position: {
      ...rArmDecal.position,
      x: -rArmDecal.position.x,
    },
    scale: rArmDecal.scale,
    angle: {
      ...rArmDecal.angle,
      maxX: -rArmDecal.angle.minX,
      minX: -rArmDecal.angle.maxX,
    },
    distance: rArmDecal.distance,
  };

  const rLegDecal = {
    position: {
      x: 0.676324468407385,
      y: -1.6816877063164857,
      z: -0.031156552116070307,
    },
    scale: { x: 1.3, y: 2.95, z: 1.3 },
    angle: { maxX: 3.5, minX: -0.5, maxY: 1.5, minY: 1.5 },
    distance: 2,
  };

  const lLegDecal = {
    position: {
      ...rLegDecal.position,
      x: -rLegDecal.position.x,
    },
    scale: rLegDecal.scale,
    angle: {
      ...rLegDecal.angle,
      maxX: -rLegDecal.angle.minX,
      minX: -rLegDecal.angle.maxX,
    },
    distance: rLegDecal.distance,
  };

  // Tattoo Decal
  const [decal, setDecal] = useState({});
  const [decalMesh, setDecalMesh] = useState(null);
  const [box, setBox] = useState(null);

  // Component Loaded Flag
  const loaded = useRef(false);

  // Initial Load
  useEffect(() => {
    // If Component Already Loaded...
    if (loaded.current) {
      // Skip
      return;
    }

    // Else Play Animation
    loaded.current = true;

    context.setHeader("select placement of tattoo");
    context.setNextStep("placement/rarm");
    // TODO: Load Local Store to See Previous Step
  }, []);

  function drawDecal({ object, point, rotation, size }) {
    const decalGeometry = new DecalGeometry(
      object,
      point,
      /*euler,*/
      rotation,
      size
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

    scene.remove(decalMesh);
    scene.add(newDecal);

    setDecalMesh(newDecal);
    setDecal({
      object: object,
      point: point,
      rotation: rotation,
      size: size,
    });

    const newBox = new THREE.BoxHelper(newDecal, 0xffff00);
    scene.remove(box);
    scene.add(newBox);

    setBox(newBox);
  }

  function setDecalSize(w, l, d) {
    drawDecal({
      object: decal.object,
      point: decal.point,
      rotation: decal.rotation,
      size: new THREE.Vector3(w, l, d),
    });
  }

  function setDecalPosition(x, y, z) {
    drawDecal({
      object: decal.object,
      point: new THREE.Vector3(x, y, z),
      rotation: decal.rotation,
      size: decal.size,
    });

    console.log(decal);
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

      console.log(hits[0]);

      const position = hits[0].point.clone();
      const eye = position.clone();
      eye.add(hits[0].face.normal);

      const rotation = new THREE.Matrix4();
      rotation.lookAt(eye, position, THREE.Object3D.DEFAULT_UP);
      const euler = new THREE.Euler();
      euler.setFromRotationMatrix(rotation);

      drawDecal({
        object: hits[0].object,
        point: hits[0].point,
        rotation: new THREE.Euler(0, 0, 0, "XYZ"),
        size: new THREE.Vector3(1, 1, 1),
      });
    }

    const { nodes } = useGLTF("/models/model.gltf");

    // onClick={(event) => handlePointerOver(event)}

    return (
      <group {...props} dispose={null}>
        <mesh
          ref={model}
          geometry={nodes["BaseMesh_Low_Res-Detailed_Male-Femalelwo"].geometry}
          material={props.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    );
  }

  const LimbDecal = ({ ...props }) => {
    const position = new THREE.Vector3(
      props.limb.position.x,
      props.limb.position.y,
      props.limb.position.z
    );

    const scale = new THREE.Vector3(
      props.limb.scale.x,
      props.limb.scale.y,
      props.limb.scale.z
    );

    const decalGeometry = useMemo(() => {
      return new DecalGeometry(
        model.current,
        position,
        THREE.Euler.DEFAULT_ORDER,
        scale
      );
    }, [model.current]);

    const [hovered, hover] = useState(false);

    const decalRef = useRef();

    return (
      <mesh
        ref={decalRef}
        name={props.limb.name}
        geometry={decalGeometry}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        onClick={(event) => {
          // Set Orbit Control Target to Center of Decal
          controls.current.target =
            decalRef.current.geometry.boundingSphere.center;

          controls.current.minAzimuthAngle = props.limb.angle.minX;
          controls.current.maxAzimuthAngle = props.limb.angle.maxX;

          controls.current.minPolarAngle = props.limb.angle.minY;
          controls.current.maxPolarAngle = props.limb.angle.maxY;

          controls.current.minDistance = props.limb.distance;
          controls.current.maxDistance = props.limb.distance;

          controls.current.update();

          console.log(controls.current);
        }}
      >
        <meshStandardMaterial
          color={hovered ? 0xf05d23 : 0x493d08}
          depthTest={true}
          depthWrite={true}
          polygonOffset={true}
          polygonOffsetFactor={-4}
        />
      </mesh>
    );
  };

  const TattooDecal = ({ ...props }) => {
    const decalGeometry = useMemo(() => {
      return new DecalGeometry(
        props.mesh,
        props.position,
        THREE.Euler.DEFAULT_ORDER,
        props.scale
      );
    }, [props.mesh]);

    const [hovered, hover] = useState(false);
    // const [clicked, click] = useState(false);

    const decalRef = useRef();
    //useHelper(decalRef, THREE.BoxHelper, "#FFFFFF");

    return (
      <mesh
        ref={decalRef}
        geometry={decalGeometry}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <meshStandardMaterial
          color={hovered ? 0xf05d23 : 0x493d08}
          depthTest={true}
          depthWrite={true}
          polygonOffset={true}
          polygonOffsetFactor={-4}
        />
      </mesh>
    );
  };

  return (
    <div id="placement-canvas" className="placement-form">
      <Canvas
        onCreated={({ camera, scene, gl }) => {
          setScene(scene);
          setCamera(camera);
          setRenderer(gl);
        }}
      >
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[10, 10, -10]} />
        <ambientLight intensity={0.5} />

        <OrbitControls
          ref={controls}
          rotation={new THREE.Euler(0, 0, 5)}
          maxDistance={5}
          minDistance={5}
          maxAzimuthAngle={0}
          minAzimuthAngle={0}
          maxPolarAngle={1.5}
          minPolarAngle={1.5}
        />

        {/*
          maxPolarAngle={1.5}
          minPolarAngle={1.5}*/}

        <Model material={brownMaterial} scale={3.5} />

        {model.current && <LimbDecal limb={bodyDecal} />}

        {model.current && <LimbDecal limb={rArmDecal} />}

        {model.current && <LimbDecal limb={lArmDecal} />}

        {model.current && <LimbDecal limb={rLegDecal} />}

        {model.current && <LimbDecal limb={lLegDecal} />}
      </Canvas>

      <label>w</label>
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        onChange={(event) =>
          setDecalSize(event.target.value, decal.size.y, decal.size.z)
        }
      />
      <label>l</label>
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        onChange={(event) =>
          setDecalSize(decal.size.x, event.target.value, decal.size.z)
        }
      />
      <label>d</label>
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        onChange={(event) =>
          setDecalSize(decal.size.x, decal.size.y, event.target.value)
        }
      />
      <br />
      <label>
        <div>x</div>
        <button
          onClick={(event) =>
            setDecalPosition(decal.point.x + 0.05, decal.point.y, decal.point.z)
          }
        >
          ▲
        </button>
        <button
          onClick={(event) =>
            setDecalPosition(decal.point.x - 0.05, decal.point.y, decal.point.z)
          }
        >
          ▼
        </button>
      </label>
      <label>
        <div>y</div>
        <button
          onClick={(event) =>
            setDecalPosition(decal.point.x, decal.point.y + 0.05, decal.point.z)
          }
        >
          ▲
        </button>
        <button
          onClick={(event) =>
            setDecalPosition(decal.point.x, decal.point.y - 0.05, decal.point.z)
          }
        >
          ▼
        </button>
      </label>
      <label>
        <div>z</div>
        <button
          onClick={(event) =>
            setDecalPosition(decal.point.x, decal.point.y, decal.point.z + 0.05)
          }
        >
          ▲
        </button>
        <button
          onClick={(event) =>
            setDecalPosition(decal.point.x, decal.point.y, decal.point.z - 0.05)
          }
        >
          ▼
        </button>
      </label>
    </div>
  );
};

export default PlacementForm;
