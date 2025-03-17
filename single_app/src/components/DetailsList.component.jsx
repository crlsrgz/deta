function DetailsList() {
  // console.log(theData);
  return (
    <>
      <main className="bg-agave-800 flex w-full flex-col">
        <div className="menu-container">
          <section className="text-10xl relative h-full w-full p-6 text-lime-100">
            <a href="/001/index.html">one</a>
          </section>
          <section className="text-limon-300 text-10xl relative h-full w-full p-6">
            <a href="/002/index.html">two</a>
          </section>
          <section className="text-limon-400 text-10xl relative h-full w-full p-6">
            <a href="/003/index.html">three</a>
          </section>
          <section className="text-limon-500 text-10xl relative h-full w-full p-6">
            <a href="/001/index.html">four</a>
          </section>
          <section className="text-limon-600 text-10xl relative h-full w-full p-6">
            <a href="/001/index.html">five</a>
          </section>
          <section className="text-limon-700 text-10xl relative h-full w-full p-6">
            <a href="/001/index.html">six</a>
          </section>
          <section className="text-limon-800 text-10xl relative h-full w-full p-6">
            <p>
              <a href="/001/index.html" className="">
                seven
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default DetailsList;
