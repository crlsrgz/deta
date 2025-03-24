import { useEffect, useState } from 'react';
import { CabinetModel } from './components/Cabinet.compontent';
import InfoBar from './components/InfoBar.component';
import InfoFooter from './components/InfoFooter.component';
import logInfo from './utils/logger';

// Load data
const responseModel = await fetch('/model-data.json');
const modelData = await responseModel.json();

const responsElement = await fetch('/material-data.json');
const materialData = await responsElement.json();

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([2, 1, 3]);
  const [open, setOpen] = useState(true);

  // Selected Element
  const [sharedString, setSharedString] = useState('Initial Value');

  // Callback to update the shared string
  const handleStringUpdate = (newString) => {
    // const cleanUpNewString = newString.split('.')[0];
    const cleanUpNewString = newString.replace(/\d{3}$/, '');
    setSharedString(cleanUpNewString);

    logInfo('parent state updated', sharedString);
  };

  useEffect(() => {
    logInfo('parent state useEffect', sharedString);
    materialData[sharedString]
      ? console.log('is here', materialData[sharedString])
      : 'nothing here';
  }, [sharedString]);

  // console.log(open);
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <InfoBar />
        <section className="relative h-full w-full bg-agave-900">
          <CabinetModel
            canvasCameraPosition={cameraPosition}
            onStringUpdate={handleStringUpdate}
          />
        </section>
        <section className="w-full">
          <InfoFooter
            openState={open}
            switchOpenState={() => {
              setOpen(!open);
            }}
            title="click me"
            detailData={modelData}
            materialData={materialData}
          />
        </section>
      </main>
    </>
  );
}
