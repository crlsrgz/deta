import DetailWrapper from './components/DetailWrapper.component';

// import { Perf } from "r3f-perf";
export default function App() {
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <section className="w-full bg-slate-500">
          <h1 className="">Title </h1>{' '}
          <span>
            <img src="vite.svg" alt="" />
          </span>
          <p>
            <a href="/001/index.html">link 001</a>
          </p>
        </section>

        <section className="relative h-full w-full bg-slate-200">
          {/* <DetailWrapper productPath={'./scenes/DAA-003'} /> */}
          <DetailWrapper productPath={'/001'} />
        </section>
      </main>
    </>
  );
}
