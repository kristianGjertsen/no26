import type React from 'react';
import Header from './components/pageSections/Header';
import Footer from './components/pageSections/Footer';
import HomePage from './pages/homePage/HomePage';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactPage from './pages/contact/ContactPage';
import Box from './components/elements/Box';
import StyleControls from './components/elements/StyleControls';

const routes: Record<string, React.FC> = {
  '/': HomePage,
  '/om-oss': AboutUs,
  '/kontakt': ContactPage
};

const NotFound: React.FC = () => (
  <Box className="text-center space-y-3">
    <p className="label-caps text-muted">Side ikke funnet</p>
    <h1 className="text-3xl font-display">Beklager, vi finner ikke siden</h1>
    <p className="text-muted max-w-xl mx-auto">
      Siden kan være flyttet eller skrevet feil. Gå tilbake til forsiden for å fortsette.
    </p>
    <div className="flex justify-center">
      <a className="text-accent font-semibold" href="/">Til forsiden</a>
    </div>
  </Box>
);

function App() {
  const CurrentPage = routes[window.location.pathname] ?? NotFound;

  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <Header />
      <StyleControls />
      <main className="flex-1 px-7 sm:px-10 lg:px-14 pt-24 pb-16 flex flex-col gap-10">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
