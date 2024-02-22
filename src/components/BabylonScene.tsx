import React, { useRef, useEffect } from "react";
import * as BABYLON from "babylonjs";
import earthImg from "../img/myColor.png";

interface BabylonSceneProps {}

const BabylonScene: React.FC<BabylonSceneProps> = () => {
  const sceneRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (sceneRef.current) {
      const canvas = sceneRef.current;
      const engine = new BABYLON.Engine(canvas, true);

      const createScene = () => {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
        const camera = new BABYLON.ArcRotateCamera(
          "camera",
          -Math.PI / 2,
          Math.PI / 2,
          5,
          new BABYLON.Vector3(0, 0, 0),
          scene
        );
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight(
          "light",
          new BABYLON.Vector3(1, 1, 0),
          scene
        );

        const sphere = BABYLON.MeshBuilder.CreateSphere(
          "sphere",
          { diameter: 3 },
          scene
        );

        // 텍스쳐 이미지 추가
        const earthMaterial = new BABYLON.StandardMaterial(
          "earthMaterial",
          scene
        );
        earthMaterial.diffuseTexture = new BABYLON.Texture(earthImg, scene);
        sphere.material = earthMaterial;

        // 로테이션 애니메이션 적용
        const animationSphere = new BABYLON.Animation(
          "rotationAnimation",
          "rotation.y",
          30,
          BABYLON.Animation.ANIMATIONTYPE_FLOAT,
          BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        // 애니메이션 키프레임 정의
        const keyFrames = [];
        keyFrames.push({
          frame: 0,
          value: 0,
        });
        keyFrames.push({
          frame: 200,
          value: Math.PI * 2,
        });

        // 애니메이션 키프레임 설정
        animationSphere.setKeys(keyFrames);

        // 구에 애니메이션 추가
        sphere.animations.push(animationSphere);

        // 활성화된 상태에서 애니메이션 실행
        scene.beginAnimation(sphere, 0, 200, true);

        return scene;
      };

      const scene = createScene();

      engine.runRenderLoop(() => {
        scene.render();
      });

      return () => {
        engine.dispose();
      };
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <canvas
      style={{ width: "100%", height: "100%" }}
      ref={sceneRef}
      onClick={scrollTop}
    />
  );
};

export default BabylonScene;
