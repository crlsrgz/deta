export default function InfoFooter({openState, switchOpenState, title, data}) {
  return (
      <div
        id="info-footer-container"
        className={`fixed inset-x-0 h-36 -bottom-0 flex flex-row gap-8 bg-limon-500 z-20 transition-all duration-700 ease-out ${openState ? 'translate-y-0' : 'translate-y-24'}`}
      >
        <div className='infoFooterSection'>
          <div className='infoFooterField'>
            {data.name?? "missing name from data"}
          </div>
        </div>

        <div  className='infoFooterSection flex flex-col'>
          <div className='infoFooterField'>
            {data.name?? "missing name from data"}
          </div>
          <div className='infoFooterField'>
            {data.name?? "missing name from data"}
          </div>
        </div>
        <div  className='infoFooterSection flex flex-col'>
          <div className='infoFooterField'>
            {data.name?? "missing name from data"}
          </div>
          <div className='infoFooterField'>
            {data.name?? "missing name from data"}
          </div>
        </div>
        <div className='infoFooterSection'>
          <div className='infoFooterField'>
            <button onClick={switchOpenState} className="text-2xl w-full  text-center">
              {title??"Missing title"}
            </button>
          </div>
        </div>
      </div>
  );
}
