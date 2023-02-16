// #region Imports

// Hooks
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import { Decal } from "./Decal.tsx";

// #endregion

/**
 * Decal for Limbs on Model
 * @param {object} limb - Decal Data
 */
const LimbDecal = ({ limb, reference }) => {
  const navigate = useNavigate();

  const [hovered, hover] = useState(false);

  return (
    <Decal
      position={limb.position}
      rotation={limb.rotation}
      scale={limb.scale}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}
      onClick={() => navigate(limb.route)}
    >
      <meshStandardMaterial
        color={hovered ? 0xf05d23 : 0x493d08}
        depthTest={true}
        depthWrite={true}
        polygonOffset={true}
        polygonOffsetFactor={-4}
      />
    </Decal>
  );
};

export default LimbDecal;
