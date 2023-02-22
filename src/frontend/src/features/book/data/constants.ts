// #region Placement Limb Data

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface Euler {
  x: number;
  y: number;
  z: number;
  order: string;
}

interface Decal {
  position: Vector3;
  rotation: Euler;
  scale: Vector3;
}

interface AngleRange {
  x: { max: number; min: number };
  y: { max: number; min: number };
}

interface Controls {
  target: Vector3;
  angle: AngleRange;
  distance: number;
}

export interface Limb {
  route: string;
  decal?: Decal;
  controls: Controls;
}

export const full: Limb = {
  route: "",
  controls: {
    target: { x: 0, y: 1.0324999736621976, z: 0.08649562485516048 },
    angle: { x: { max: Infinity, min: 0 }, y: { max: 1.5, min: 1.5 } },
    distance: 2,
  },
};

export const body: Limb = {
  route: "body",
  decal: {
    position: { x: 0, y: 0, z: -0.295 },
    rotation: { x: 0, y: 0, z: 0, order: "XYZ" },
    scale: { x: 0.36, y: 1, z: 0.69 },
  },
  controls: {
    target: { x: 0, y: 1.0324999736621976, z: 0.08649562485516048 },
    angle: { x: { max: Infinity, min: 0 }, y: { max: 1.5, min: 1.5 } },
    distance: 2,
  },
};

export const rArm: Limb = {
  route: "rarm",
  decal: {
    position: { x: -0.483, y: 0, z: -0.365 },
    rotation: body.decal!.rotation,
    scale: { x: 0.605, y: 1, z: 0.57 },
  },
  controls: {
    target: {
      x: -1.5696918740868568,
      y: 1.2109748385846615,
      z: 0.04135896824300262,
    },
    angle: { x: { max: 0.5, min: -3.5 }, y: { max: 6, min: 1 } },
    distance: 2,
  },
};

export const lArm: Limb = {
  route: "larm",
  decal: {
    position: { ...rArm.decal!.position, x: -rArm.decal!.position.x },
    rotation: body.decal!.rotation,
    scale: rArm.decal!.scale,
  },
  controls: {
    target: { ...rArm.controls!.target, x: -rArm.controls!.target.x },
    angle: {
      ...rArm.controls.angle,
      x: { max: -rArm.controls.angle.x.min, min: -rArm.controls.angle.x.max },
    },
    distance: rArm.controls.distance,
  },
};

export const rLeg: Limb = {
  route: "rleg",
  decal: {
    position: { x: -0.16, y: 0, z: 0.475 },
    rotation: body.decal!.rotation,
    scale: { x: 0.305, y: 1, z: 0.845 },
  },
  controls: {
    target: {
      x: -0.5631728826556355,
      y: -1.649847905151546,
      z: -0.05354689061641656,
    },
    angle: { x: { max: 1, min: -4 }, y: { max: 1.5, min: 1.5 } },
    distance: 2.5,
  },
};

export const lLeg: Limb = {
  route: "lleg",
  decal: {
    position: { ...rLeg.decal!.position, x: -rLeg.decal!.position.x },
    rotation: body.decal!.rotation,
    scale: rLeg.decal!.scale,
  },
  controls: {
    target: { ...rLeg.controls!.target, x: -rLeg.controls!.target.x },
    angle: {
      ...rLeg.controls.angle,
      x: { max: -rLeg.controls.angle.x.min, min: -rLeg.controls.angle.x.max },
    },
    distance: rLeg.controls.distance,
  },
};

// #endregion
