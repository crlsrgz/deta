import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import theData from '/Model.data.json?url';
import { CabinetModel } from './cabinet/cabinet.model';

// import { Perf } from "r3f-perf";
export default function App() {
  console.log(theData);
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <section className="w-full bg-slate-500">
          <h1 className="">Title {theData.name}</h1>{' '}
          <span>
            <img src="vite.svg" alt="" />
          </span>
          <p>
            <a href="/001/index.html">link 001</a>
          </p>
        </section>

        <section className="relative h-full w-full bg-slate-200">
          <Canvas
            style={{ width: '100%', height: '100%' }}
            camera={{
              position: [2, 1, 3],
              near: 0.01,
              far: 100,
              fov: 45,
            }}
          >
            <color attach="background" args={['#cccccc']} />
            {/* <Perf></Perf> */}
            <Environment preset="city" resolution={256} />

            {/* <ambientLight intensity={0.5} />
            <directionalLight position={(1, 1, 2)} /> */}
            <OrbitControls />
            <CabinetModel />
          </Canvas>
          <div
            id="element-list"
            className="fixed bottom-0 flex h-12 w-screen flex-row gap-6 bg-slate-500"
          >
            <button id="element-list-back">back</button>
            <button id="element-list-back">forward</button>
          </div>
          {/* </div> */}
        </section>
      </main>
    </>
  );
}
