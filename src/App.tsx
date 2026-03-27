/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoGrid from "./components/VideoGrid";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-neon-blue/30 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <VideoGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
