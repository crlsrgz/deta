import { useState } from 'react';
import { CabinetModel } from './components/Cabinet.compontent';
import InfoBar from './components/InfoBar.component';
import InfoFooter from './components/InfoFooter.component';

// Load data
const response = await fetch('/model-data.json');
const modelData = await response.json();

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([2, 1, 3]);
  const [open, setOpen] = useState(true);

  console.log(open);
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <InfoBar />
        <section className="relative h-full w-full bg-agave-900">
          <CabinetModel canvasCameraPosition={cameraPosition} />
        </section>
        <section className="w-full">
          <InfoFooter
            openState={open}
            switchOpenState={() => {
              setOpen(!open);
            }}
            title="click me"
            data={modelData}
          />
        </section>
      </main>
    </>
  );
}
