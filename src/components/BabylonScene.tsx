import React, { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";

import sunImg from "../img/sun.png";
import earthImg from "../img/earth.png";
import moonImg from "../img/moon.png";
import marsImg from "../img/mars.png";
import spaceImg from "../img/space.png";

const SolarSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const createScene = () => {
      const canvas = canvasRef.current!;
      const engine = new BABYLON.Engine(canvas, true);
      const scene = new BABYLON.Scene(engine);

      const camera = new BABYLON.ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        Math.PI / 2,
        20,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.attachControl(canvas, true);

      const light = new BABYLON.HemisphericLight(
        "hemiLight",
        new BABYLON.Vector3(0, 1, 0),
        scene
      );

      const sunTexture = new BABYLON.Texture(sunImg, scene);
      const earthTexture = new BABYLON.Texture(earthImg, scene);
      const moonTexture = new BABYLON.Texture(moonImg, scene);
      const marsTexture = new BABYLON.Texture(marsImg, scene);
      const spaceTexture = new BABYLON.Texture(spaceImg, scene);

      const sunMaterial = new BABYLON.StandardMaterial("sunMaterial", scene);
      sunMaterial.diffuseTexture = sunTexture;

      const earthMaterial = new BABYLON.StandardMaterial(
        "earthMaterial",
        scene
      );
      earthMaterial.diffuseTexture = earthTexture;

      const moonMaterial = new BABYLON.StandardMaterial("moonMaterial", scene);
      moonMaterial.diffuseTexture = moonTexture;

      const marsMaterial = new BABYLON.StandardMaterial("marsMaterial", scene);
      marsMaterial.diffuseTexture = marsTexture;

      const spaceMaterial = new BABYLON.StandardMaterial(
        "spaceMaterial",
        scene
      );
      spaceMaterial.diffuseTexture = spaceTexture;
      spaceMaterial.backFaceCulling = false;

      const sun = BABYLON.MeshBuilder.CreateSphere(
        "sun",
        { diameter: 5 },
        scene
      );
      sun.material = sunMaterial;

      const earth = BABYLON.MeshBuilder.CreateSphere(
        "earth",
        { diameter: 1 },
        scene
      );
      earth.position.x = 10;
      earth.material = earthMaterial;

      const moon = BABYLON.MeshBuilder.CreateSphere(
        "moon",
        { diameter: 0.5 },
        scene
      );
      moon.position.x = 12;
      moon.material = moonMaterial;

      const mars = BABYLON.MeshBuilder.CreateSphere(
        "mars",
        { diameter: 1.5 },
        scene
      );
      mars.position.x = 15;
      mars.material = marsMaterial;

      const space = BABYLON.MeshBuilder.CreateSphere(
        "space",
        { diameter: 1000 },
        scene
      );
      space.material = spaceMaterial;

      scene.registerBeforeRender(() => {
        earth.rotation.y += 0.01;
        moon.rotation.y += 0.01;
        mars.rotation.y += 0.01;

        earth.position.x = 10 * Math.cos(scene.getAnimationRatio() * 0.01);
        earth.position.z = 10 * Math.sin(scene.getAnimationRatio() * 0.01);

        moon.position.x = 12 * Math.cos(scene.getAnimationRatio() * 0.03);
        moon.position.z = 12 * Math.sin(scene.getAnimationRatio() * 0.03);

        mars.position.x = 15 * Math.cos(scene.getAnimationRatio() * 0.008);
        mars.position.z = 15 * Math.sin(scene.getAnimationRatio() * 0.008);
      });

      engine.runRenderLoop(() => {
        scene.render();
      });

      window.addEventListener("resize", () => {
        engine.resize();
      });

      return scene;
    };

    createScene();
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default SolarSystem;
