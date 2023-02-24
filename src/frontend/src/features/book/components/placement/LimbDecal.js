// #region Imports

// Hooks
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

// Components
import { Decal } from "./Decal";
import React from "react";

// Limb Type
import { Limb } from "../../data/constants";

// #endregion

/**
 * Decal for Limbs on Model
 * @param {object} limb - Decal Data
 */
const LimbDecal = (props) => {
  const navigate = useNavigate();

  const [rotation, setRotation] = useState([0, 0, 0]);

  const { limb, disabled } = props;

  const [hovered, hover] = useState(false);

  /*
  rotation={[
        limb.decal.rotation.x,
        limb.decal.rotation.y,
        limb.decal.rotation.z,
      ]}
  */

  return (
    <Decal
      position={[
        limb.decal.position.x,
        limb.decal.position.y,
        limb.decal.position.z,
      ]}
      rotation={rotation}
      scale={[limb.decal.scale.x, limb.decal.scale.y, limb.decal.scale.z]}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}
      onClick={disabled ? () => {} : () => navigate(limb.route)}
    >
      {/*!disabled && (
        <Html
          position={[
            limb.decal.position.x,
            limb.decal.position.y,
            limb.decal.position.z,
          ]}
        >
          <div
            style={{
              color: "var(--beige)",
              background: "var(--brown)",
              padding: "8px",
              borderRadius: "8px",
              transform: "translateX(-50%)",
            }}
          >
            {limb.route}
          </div>
        </Html>
          )*/}
      <meshStandardMaterial
        color={hovered && !disabled ? 0xf05d23 : 0x493d08}
        depthTest={true}
        depthWrite={true}
        polygonOffset={true}
        polygonOffsetFactor={-4}
      />
    </Decal>
  );
};

export default LimbDecal;
