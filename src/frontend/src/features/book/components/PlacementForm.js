import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";

import {
  PointLight,
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  CanvasTexture,
  NearestFilter,
  MeshBasicMaterial,
  Texture,
  MeshLambertMaterial,
  RepeatWrapping,
  MirroredRepeatWrapping,
  Vector3,
  Raycaster,
  Vector2,
  MathUtils,
} from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import placementStyles from "../assets/css/placement.css";

const PlacementForm = () => {
  let context = useOutletContext();

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
    // context.setPreviousStep("type/select");

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 4 / 2, 0.1, 1000);

    camera.position.z = 5;

    var canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 250, 500);
    ctx.fillRect(0, 250, 250, 250);
    ctx.fillRect(250, 0, 250, 500);

    let texture = new CanvasTexture(canvas);
    let material2 = new MeshStandardMaterial({ map: texture });

    const cube = new Mesh();
    const geometry = new BoxGeometry();

    cube.geometry = geometry;
    cube.material = material2;
    cube.position.x = -2.5;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "/models/untitled1.gltf",
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material = material2;
          }
        });

        gltf.scene.scale.set(2, 2, 2);
        gltf.scene.position.set(0, -2, 0);

        gltf.scene.name = "1";

        scene.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error happened");
      }
    );

    scene.add(cube);

    const ambientLight = new AmbientLight();
    scene.add(ambientLight);

    const pointLight = new PointLight();
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const container = document.getElementById("placement-canvas");

    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.outputEncoding = sRGBEncoding;
    renderer.setSize(container.clientWidth, container.clientHeight);

    if (container) {
      container.appendChild(renderer.domElement);
      console.log("hallo");
    }

    const raycaster = new Raycaster();
    const pointer = new Vector2();

    function onPointerMove(event) {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components

      var rect = event.target.getBoundingClientRect();

      pointer.x = ((event.clientX - rect.left) / container.offsetWidth) * 2 - 1;

      pointer.y =
        -((event.clientY - rect.top) / container.offsetHeight) * 2 + 1;

      console.log(event.clientX - rect.left);
      // console.log(event.clientX);
      console.log(pointer);
    }

    container.addEventListener("pointermove", onPointerMove);

    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      // update the picking ray with the camera and pointer position
      raycaster.setFromCamera(pointer, camera);

      // calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children);

      for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
        console.log(intersects);
      }

      /*
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      */
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div id="placement-canvas" className="placement-form"></div>;
};

export default PlacementForm;
