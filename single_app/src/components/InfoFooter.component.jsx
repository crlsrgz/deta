export default function InfoFooter({
  openState,
  switchOpenState,
  title,
  data,
}) {
  return (
    <div
      id="info-footer-container"
      className={`fixed inset-x-0 -bottom-0 z-20 flex h-36 flex-row gap-8 bg-limon-500 p-4 transition-all duration-700 ease-out ${openState ? 'translate-y-0' : 'translate-y-24'}`}
    >
      <div className="info-footer-section w-1/6">
        <div className="info-footer-field">
          {data.name ?? 'missing name from data'}
        </div>
      </div>

      <div className="info-footer-section flex w-2/6 flex-col text-left">
        <div className="info-footer-field">
          {data.name ?? 'missing name from data'}
        </div>
        <div className="info-footer-field">
          {data.name ?? 'missing name from data'}
        </div>
      </div>
      <div className="info-footer-section flex w-2/6 flex-col">
        <div className="info-footer-field">
          {data.name ?? 'missing name from data'}
        </div>
        <div className="info-footer-field">
          {data.name ?? 'missing name from data'}
        </div>
      </div>
      <div className="info-footer-section w-1/6">
        <div className="info-footer-close -translate-y-2">
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
