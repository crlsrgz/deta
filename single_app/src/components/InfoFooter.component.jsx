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
      className={`fixed inset-x-0 -bottom-0 z-20 flex h-56 flex-row gap-8 bg-limon-500 px-4 py-8 transition-all duration-700 ease-out md:px-16 lg:px-40 xl:px-56 ${openState ? 'translate-y-0' : 'translate-y-48'}`}
    >
      <figure className="info-footer-section w-1/12" tabIndex={21}>
        <div className="h-24 w-24 border-4 border-solid border-agave-700"></div>
      </figure>

      <ul
        className="info-footer-section flex w-6/12 flex-col text-left"
        tabIndex={31}
      >
        <li
          className="font-anybody info-footer-field-title text-4xl"
          tabindex="-1"
        >
          {detailData.name ?? 'missing name from data'}
        </li>
        <li className="info-footer-field" tabindex="-1">
          {detailData.description ?? 'missing name from data'}
        </li>
      </ul>
      <ul
        className="info-footer-section font-jakartaRegular flex w-4/12 flex-col"
        tabIndex={41}
        role={'listbox'}
      >
        <li className="info-footer-field" tabindex="-1">
          <span>
            Element: {materialData[language].name ?? 'missing name from data'}
          </span>
        </li>
        <li className="info-footer-field" tabindex="-1">
          <span>
            Material:{' '}
            {materialData[language].materialColloquial ??
              'missing name from data'}
          </span>
        </li>
        <li className="info-footer-field" tabindex="-1">
          <span>
            Decription:{' '}
            {materialData[language].extract ?? 'missing name from data'}
          </span>
        </li>
      </ul>
      <div className="info-footer-section w-1/12">
        <div className="info-footer-close z-30 -translate-y-8">
          <button
            tabIndex={51}
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
