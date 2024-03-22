import { Suspense } from 'react';
import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { VRButton, ARButton, XR, Controllers, Hands, TeleportationPlane } from '@react-three/xr'
import './App.css';
import { Physics } from '@react-three/rapier';
import { Ground } from './Ground';
import { Player } from './Player';
import { Gallery } from './Gallery';

function App() {
  return (
    <div className="App">
      {/* <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}>
        <Canvas shadows camera={{ fov: 45 }}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={5} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

          <Suspense fallback={null}>
            <Physics>
              <Gallery />
              <Ground />
              <Player />
            </Physics>
          </Suspense>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls> */}
      <VRButton />
      <Canvas>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={5} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <XR>
          <Physics>
            <Gallery />
            <Ground />
          </Physics>
          <Controllers />
          <Hands />
          <TeleportationPlane
            /** Whether to allow teleportation from left controller. Default is `false` */
            leftHand={true}
            /** Whether to allow teleportation from right controller. Default is `false` */
            rightHand={true}
            /** The maximum distance from the camera to the teleportation point. Default is `10` */
            maxDistance={10}
            /** The radial size of the teleportation marker. Default is `0.25` */
            size={0.25}
          />
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
