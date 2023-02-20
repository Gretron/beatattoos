// #region Imports

// Hooks
import {
  useEffect,
  useRef,
  useState,
  Suspense,
  useMemo,
  useLayoutEffect,
  useCallback,
} from "react";
import { useLocation, useOutletContext } from "react-router-dom";

// Styles
import placementStyles from "../../assets/css/placement.css";

// Three
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  useHelper,
  useProgress,
  Html,
} from "@react-three/drei";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";

import { Decal } from "./Decal.tsx";

// Model Component
import Model from "./Model";
import LimbDecal from "./LimbDecal";

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

  // Character Model Reference
  const modelRef = useCallback((node) => {
    setModelLoaded(true);
  }, []);

  const [modelLoaded, setModelLoaded] = useState(false);

  // Limbs
  const body = {
    route: "body",
    target: [0, 1.0324999736621976, 0.08649562485516048], // Control Target (XYZ)
    position: [0, 0, -0.295],
    rotation: [0, 0, 0],
    scale: [0.36, 1, 0.69],
    angle: { maxX: Infinity, minX: 0, maxY: 1.5, minY: 1.5 },
    distance: 2,
  };

  const rArm = {
    route: "rarm",
    target: [-1.5696918740868568, 1.2109748385846615, 0.04135896824300262],
    position: [-0.483, 0, -0.365],
    rotation: body.rotation,
    scale: [0.605, 1, 0.57],
    angle: { maxX: 0.5, minX: -3.5, maxY: 6, minY: 1 },
    distance: 2,
  };

  const lArm = {
    route: "larm",
    target: [-rArm.target[0], rArm.target[1], rArm.target[2]],
    position: [-rArm.position[0], rArm.position[1], rArm.position[2]],
    rotation: body.rotation,
    scale: rArm.scale,
    angle: {
      ...rArm.angle,
      maxX: -rArm.angle.minX,
      minX: -rArm.angle.maxX,
    },
    distance: rArm.distance,
  };

  const rLeg = {
    route: "rleg",
    target: [-0.5631728826556355, -1.649847905151546, -0.05354689061641656],
    position: [-0.16, 0, 0.475],
    rotation: body.rotation,
    scale: [0.305, 1, 0.845],
    angle: { maxX: 1, minX: -4, maxY: 1.5, minY: 1.5 },
    distance: 2.5,
  };

  const lLeg = {
    route: "lleg",
    target: [-rLeg.target[0], rLeg.target[1], rLeg.target[2]],
    position: [-rLeg.position[0], rLeg.position[1], rLeg.position[2]],
    rotation: body.rotation,
    scale: rLeg.scale,
    angle: {
      ...rLeg.angle,
      maxX: -rLeg.angle.minX,
      minX: -rLeg.angle.maxX,
    },
    distance: rLeg.distance,
  };

  // Array of All Limb Values
  const decals = [body, rArm, lArm, rLeg, lLeg];

  const [initialControls, setInitialControls] = useState({
    target: [0, 0, 0],
    angle: { maxX: 0, minX: 0, maxY: 1.5, minY: 1.5 },
    distance: 5,
  });

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

    // Set Initial Control Target
    decals.forEach((decal) => {
      if (location.pathname.includes(decal.route)) {
        setInitialControls(decal);
      }
    });

    context.setHeader("select tattoo placement");
    context.setNextStep("placement/rarm");
    // TODO: Load Local Store to See Previous Step
  }, []);

  useEffect(() => {
    if (!controls.current) return;

    let decalRoute = false;

    decals.forEach((decal) => {
      if (location.pathname.includes(decal.route)) {
        setLimb(decal);
        decalRoute = true;
        return;
      }
    });

    console.log(decalRoute);

    if (!decalRoute) {
      setLimb(initialControls);
    }
  }, [location]);

  function setLimb(decal) {
    const target = new THREE.Vector3(
      decal.target[0],
      decal.target[1],
      decal.target[2]
    );

    controls.current.target = target;

    controls.current.minAzimuthAngle = decal.angle.minX;
    controls.current.maxAzimuthAngle = decal.angle.maxX;

    controls.current.minPolarAngle = decal.angle.minY;
    controls.current.maxPolarAngle = decal.angle.maxY;

    controls.current.minDistance = decal.distance;
    controls.current.maxDistance = decal.distance;

    controls.current.update();
  }

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

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html center>
        <span className="loader"></span>
      </Html>
    );
  }

  const [position, setPosition] = useState([0, 0, 0]);
  const [scale, setScale] = useState([1, 1, 1]);
  const [increment, setIncrement] = useState(0.01);

  return (
    <div id="placement-canvas" className="placement-form">
      <Canvas
        onCreated={({ camera, scene, gl }) => {
          setScene(scene);
          setCamera(camera);
          setRenderer(gl);
        }}
      >
        <Suspense fallback={<Loader />}>
          <pointLight position={[0, 5, 10]} />
          <pointLight position={[0, 5, -10]} />
          <ambientLight intensity={0.5} />

          <OrbitControls
            ref={controls}
            target={initialControls.target}
            maxDistance={initialControls.distance}
            minDistance={initialControls.distance}
            maxAzimuthAngle={initialControls.angle.maxX}
            minAzimuthAngle={initialControls.angle.minX}
            maxPolarAngle={initialControls.angle.maxY}
            minPolarAngle={initialControls.angle.minY}
            enablePan={false}
            enableDamping={true}
          />

          <Model>
            <LimbDecal limb={body} />
            <LimbDecal limb={rArm} />
            <LimbDecal limb={lArm} />
            <LimbDecal limb={rLeg} />
            <LimbDecal limb={lLeg} />
          </Model>
        </Suspense>
      </Canvas>

      <div style={{ display: "flex" }}>
        <div style={{ padding: "16px 8px" }}>
          <button
            className="outline--button"
            style={{ display: "block", marginBottom: "8px" }}
            onClick={() => {
              console.log(scene.getObjectByName(decal.route));
            }}
          >
            ▲ +X
          </button>
          <button
            className="outline--button"
            onClick={() => {
              setPosition([position[0] - increment, position[1], position[2]]);
              console.log("location", position);
            }}
          >
            ▼ -X
          </button>
        </div>

        <div style={{ padding: "16px 8px" }}>
          <button
            className="outline--button"
            style={{ display: "block", marginBottom: "8px" }}
            onClick={() => {
              setPosition([position[0], position[1] + increment, position[2]]);
              console.log("location", position);
            }}
          >
            ▲ +Y
          </button>
          <button
            className="outline--button"
            onClick={() => {
              setPosition([position[0], position[1] - increment, position[2]]);
              console.log("location", position);
            }}
          >
            ▼ -Y
          </button>
        </div>

        <div style={{ padding: "16px 8px" }}>
          <button
            className="outline--button"
            style={{ display: "block", marginBottom: "8px" }}
            onClick={() => {
              setPosition([position[0], position[1], position[2] + increment]);
              console.log("location", position);
            }}
          >
            ▲ +Z
          </button>
          <button
            className="outline--button"
            onClick={() => {
              setPosition([position[0], position[1], position[2] - increment]);
              console.log("location", position);
            }}
          >
            ▼ -Z
          </button>
        </div>

        <div style={{ padding: "16px 8px" }}>
          <button
            className="outline--button"
            style={{ display: "block", marginBottom: "8px" }}
            onClick={() => {
              setScale([scale[0] + increment, scale[1], scale[2]]);
              console.log("scale", scale);
            }}
          >
            ▲ +W
          </button>
          <button
            className="outline--button"
            onClick={() => {
              setScale([scale[0] - increment, scale[1], scale[2]]);
              console.log("scale", scale);
            }}
          >
            ▼ -W
          </button>
        </div>

        <div style={{ padding: "16px 8px" }}>
          <button
            className="outline--button"
            style={{ display: "block", marginBottom: "8px" }}
            onClick={() => {
              setScale([scale[0], scale[1] + increment, scale[2]]);
              console.log("scale", scale);
            }}
          >
            ▲ +L
          </button>
          <button
            className="outline--button"
            onClick={() => {
              setScale([scale[0], scale[1] - increment, scale[2]]);
              console.log("scale", scale);
            }}
          >
            ▼ -L
          </button>
        </div>

        <div style={{ padding: "16px 8px" }}>
          <button
            className="outline--button"
            style={{ display: "block", marginBottom: "8px" }}
            onClick={() => {
              setScale([scale[0], scale[1], scale[2] + increment]);
              console.log("scale", scale);
            }}
          >
            ▲ +D
          </button>
          <button
            className="outline--button"
            onClick={() => {
              setScale([scale[0], scale[1], scale[2] - increment]);
              console.log("scale", scale);
            }}
          >
            ▼ -D
          </button>
        </div>
        <input
          type="range"
          min={0.005}
          max={0.05}
          step={0.0005}
          onChange={(event) => {
            setIncrement(parseFloat(event.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default PlacementForm;
