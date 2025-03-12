import DetailsList from './components/DetailsList.component';
import NavBarDesktop from './components/NavBarDesktop.component';

export default function App() {
  return (
    <>
      <main className="flex h-screen w-full flex-col overflow-x-hidden">
        <section className="w-full">
          <NavBarDesktop />
        </section>

        <section id="main-content" className="relative w-full bg-agave-800">
          <DetailsList />
        </section>
        <section className="w-full bg-limon-500 h-12">footer Info</section>
      </main>
    </>
  );
}
