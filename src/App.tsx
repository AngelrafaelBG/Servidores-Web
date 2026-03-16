import Hero from './components/Hero';
import WhatIsSection from './components/WhatIsSection';
import PurposeSection from './components/PurposeSection';
import HowToSetupSection from './components/HowToSetupSection';
import ExamplesSection from './components/ExamplesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <WhatIsSection />
      <PurposeSection />
      <HowToSetupSection />
      <ExamplesSection />
      <Footer />
    </div>
  );
}

export default App;
