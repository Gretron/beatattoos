// #region Imports

import React from "react";

// Hooks
import { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

// Styles
import "../../assets/css/placement.css";

// Three
import * as THREE from "three";
import * as FIBER from "@react-three/fiber";
import * as DREI from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";

// 3D Components
import Model from "./Model";
import LimbDecal from "./LimbDecal";

// Tattoo Types
import { TattooType } from "../../data/constants";

// Limb Constants
import { full, body, rArm, lArm, rLeg, lLeg } from "../../data/constants";

// #endregion

const PlacementForm = () => {
  // Router Outlet Context
  let context = useOutletContext();

  // Site Address
  let location = useLocation();

  // 3D Components
  const [renderer, setRenderer] = useState();
  const [scene, setScene] = useState();
  const [camera, setCamera] = useState();
  const controls = useRef();
  const model = useRef();

  // Array of All Limb Data
  const limbs = [body, rArm, lArm, rLeg, lLeg];

  // Limb Selected Flag
  const [limbSelected, setLimbSelected] = useState(false);

  // Initial Controls Value
  const [initialControls, setInitialControls] = useState(full);

  // Tattoo Decal
  const [decal, setDecal] = useState();
  const [decalMesh, setDecalMesh] = useState();
  const [box, setBox] = useState();

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

    let isLimbRoute = false;

    // Set Initial Control Target
    limbs.forEach((limb) => {
      if (location.pathname.includes(limb.route)) {
        setInitialControls(limb);
        setLimbSelected(true);

        isLimbRoute = true;
        context.setPreviousStep("placement");

        return;
      }
    });

    context.setHeader("select tattoo placement");
    context.setNextStep("");

    if (!isLimbRoute) {
      const tattooType = localStorage.getItem("tattooType");

      if (tattooType === TattooType.Flash) {
        context.setPreviousStep("type/note");
      } else if (tattooType === TattooType.Custom) {
        context.setPreviousStep("type/description");
      }
    }
  }, []);

  // On Location Change
  useEffect(() => {
    if (!controls.current) return;

    let isLimbRoute = false;

    limbs.forEach((limb) => {
      if (location.pathname.includes(limb.route)) {
        setLimb(limb);
        setLimbSelected(true);

        isLimbRoute = true;
        context.setPreviousStep("placement");

        return;
      }
    });

    if (!isLimbRoute) {
      setLimb(full);
      setLimbSelected(false);

      const tattooType = localStorage.getItem("tattooType");

      if (tattooType === TattooType.Flash) {
        context.setPreviousStep("type/note");
      } else if (tattooType === TattooType.Custom) {
        context.setPreviousStep("type/description");
      }
    }
  }, [location]);

  function setLimb(limb) {
    const target = new THREE.Vector3(
      limb.controls.target.x,
      limb.controls.target.y,
      limb.controls.target.z
    );

    controls.current.target = target;

    controls.current.minAzimuthAngle = limb.controls.angle.x.min;
    controls.current.maxAzimuthAngle = limb.controls.angle.x.max;

    controls.current.minPolarAngle = limb.controls.angle.y.min;
    controls.current.maxPolarAngle = limb.controls.angle.y.max;

    controls.current.minDistance = limb.controls.distance;
    controls.current.maxDistance = limb.controls.distance;

    controls.current.update();
  }

  function drawDecal({ object, point, rotation, size }) {
    if (!scene) return;

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
        new THREE.Euler(),
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
            enablePan={false}
            enableDamping={true}
            target={[
              initialControls.controls.target.x,
              initialControls.controls.target.y,
              initialControls.controls.target.z,
            ]}
            maxDistance={initialControls.controls.distance}
            minDistance={initialControls.controls.distance}
            maxAzimuthAngle={initialControls.controls.angle.x.max}
            minAzimuthAngle={initialControls.controls.angle.x.min}
            maxPolarAngle={initialControls.controls.angle.y.max}
            minPolarAngle={initialControls.controls.angle.y.min}
          />

          <Model ref={model}>
            {limbs &&
              limbs.map((limb) => (
                <LimbDecal
                  key={limb.route}
                  limb={limb}
                  disabled={limbSelected}
                />
              ))}
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
