/**
 *
 * @param {Object} props
 * @ {boolean} props.openState checks if element info window is open
 * @ {function} props.switchOpenState invert open sate with a setter function
 * @ {string} props.title temporary string placeholder to open info field
 * @ {Object} props.deailData Scene Info
 * @ {Object} props.materialData Elments and material info
 * @returns
 */
export default function InfoFooter({
  openState,
  switchOpenState,
  title,
  detailData,

  materialData,
}) {
  const language = 'en';

  // materialData[materialName]
  //   ? console.log(materialData[materialName])
  //   : console.log('not here');
  // console.log('material', materialData);

  return (
    <div
      id="info-footer-container"
      aria-expanded={openState}
      className={`fixed inset-x-0 -bottom-0 z-20 flex h-56 flex-row gap-8 bg-limon-500 px-4 py-8 transition-all duration-700 ease-out md:px-16 lg:px-56 ${openState ? 'translate-y-0' : 'translate-y-36'}`}
    >
      <div className="info-footer-section w-1/6" tabIndex={5}>
        <div className="info-footer-field">
          {detailData.name ?? 'missing name from data'}
        </div>
      </div>

      <ul
        className="info-footer-section flex w-2/6 flex-col text-left"
        tabIndex={15}
      >
        <li className="info-footer-field-title text-4xl" tabIndex={-1}>
          {detailData.name ?? 'missing name from data'}
        </li>
        <li className="info-footer-field" tabIndex={-1}>
          {detailData.name ?? 'missing name from data'}
        </li>
      </ul>
      <ul className="info-footer-section flex w-2/6 flex-col" tabIndex={20}>
        <li className="info-footer-field">
          <span>
            Element: {materialData[language].name ?? 'missing name from data'}
          </span>
        </li>
        <li className="info-footer-field">
          <span>Material:</span>
          <span>
            {materialData[language].materialColloquial ??
              'missing name from data'}
          </span>
        </li>
        <li className="info-footer-field">
          <span>Decription:</span>
          <span>
            {materialData[language].extract ?? 'missing name from data'}
          </span>
        </li>
      </ul>
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
