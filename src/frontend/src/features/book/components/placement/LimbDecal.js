// #region Imports

// Hooks
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

  const { limb, disabled } = props;

  const [hovered, hover] = useState(false);

  return (
    <Decal
      position={[
        limb.decal.position.x,
        limb.decal.position.y,
        limb.decal.position.z,
      ]}
      rotation={[
        limb.decal.rotation.x,
        limb.decal.rotation.y,
        limb.decal.rotation.z,
      ]}
      scale={[limb.decal.scale.x, limb.decal.scale.y, limb.decal.scale.z]}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}
      onClick={disabled ? () => {} : () => navigate(limb.route)}
    >
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
