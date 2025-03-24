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
  // Selected Element
  /**
   * @type {[number[], function]:void}
   */
  // eslint-disable-next-line no-unused-vars
  const [cameraPosition, setCameraPosition] = useState([2, 1, 3]);

  // Selected Element
  /**
   * @type {[boolean, function]:void}
   */
  const [open, setOpen] = useState(true);

  // Selected Element
  /**
   * @type {[string, function]:void}
   */
  const [sharedString, setSharedString] = useState('Initial Value');

  /**
   * Handle the data reveived from the parent component, callback to update the shared string
   * in the child handleStringUpdate calls onStringUpdate and passes the string to the parent
   * the argument received by the parent is newString
   * @param {string} newString
   */
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
