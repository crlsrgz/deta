import { useState } from 'react';
import { CabinetModel } from './components/Cabinet.compontent';
import InfoBar from './components/InfoBar.component';

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([2, 1, 3]);
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <InfoBar />
        <section className="relative h-full w-full bg-agave-900">
          <CabinetModel canvasCameraPosition={cameraPosition} />
        </section>
        <section className="w-full bg-limon-500 h-12">footer Info</section>
      </main>
    </>
  );
}
