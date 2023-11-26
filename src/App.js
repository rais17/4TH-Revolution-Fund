import React, { Suspense } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Shimmer from "./Components/Shimmer";

// Lazy loading components
const Home = React.lazy(() => import("./Pages/Home"));
const Insight = React.lazy(() => import("./Pages/Insight"));
const Future = React.lazy(() => import("./Pages/Future"));
const History = React.lazy(() => import("./Pages/History"));
const Revolution = React.lazy(() => import("./Pages/Revolution"));

function App() {
  return (
    <div className="box-border relative min-h-screen overflow-x-hidden">
      <Header />
      <Suspense fallback={<Shimmer />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/future" element={<Future />} />
          <Route path="/history" element={<History />} />
          <Route path="/revolution" element={<Revolution />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
