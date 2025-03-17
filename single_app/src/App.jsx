import { useState } from 'react';
import { CabinetModel } from './components/Cabinet.compontent';
import InfoBar from './components/InfoBar.component';
import InfoFooter from './components/InfoFooter.component';

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([2, 1, 3]);
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <InfoBar />
        <section className="relative h-full w-full bg-agave-900">
          {/* <CabinetModel canvasCameraPosition={cameraPosition} /> */}
        </section>
        <section className="w-full">
          <InfoFooter />
        </section>
      </main>
    </>
  );
}
