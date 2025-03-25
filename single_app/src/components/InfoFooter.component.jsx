export default function InfoFooter({
  openState,
  switchOpenState,
  title,
  detailData,

  materialData,
}) {
  const materialName = 'slabFloorConcrete';
  const language = 'en';

  // materialData[materialName]
  //   ? console.log(materialData[materialName])
  //   : console.log('not here');
  console.log('material', materialData);
  return (
    <div
      id="info-footer-container"
      className={`fixed inset-x-0 -bottom-0 z-20 flex h-56 flex-row gap-8 bg-limon-500 px-4 py-8 transition-all duration-700 ease-out md:px-16 lg:px-56 ${openState ? 'translate-y-0' : 'translate-y-36'}`}
    >
      <div className="info-footer-section w-1/6">
        <div className="info-footer-field">
          {detailData.name ?? 'missing name from data'}
        </div>
      </div>

      <div className="info-footer-section flex w-2/6 flex-col text-left">
        <div className="info-footer-field-title text-4xl">
          {detailData.name ?? 'missing name from data'}
        </div>
        <div className="info-footer-field">
          {detailData.name ?? 'missing name from data'}
        </div>
      </div>
      <div className="info-footer-section flex w-2/6 flex-col">
        <div className="info-footer-field">
          {materialData[language].name ?? 'missing name from data'}
        </div>
        {/* <div className="info-footer-field">
          {materialData[language].materialColloquial ??
            'missing name from data'}
        </div>
        <div className="info-footer-field">
          {materialData[language].extract ?? 'missing name from data'}
        </div> */}
      </div>
      <div className="info-footer-section w-1/6">
        <div className="info-footer-close z-30 -translate-y-2">
          <button
            onClick={switchOpenState}
            className="w-full text-center text-2xl"
          >
            {title ?? 'Missing title'}
          </button>
        </div>
      </div>
    </div>
  );
}
