import React from "react";
import { Layout, Grid } from "antd";
import "antd/dist/antd.less";
import "./assets/styleSheets/App.less";
import Header from "./common/Header.jsx";
import Footer from "./common/Footer.jsx";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import "./assets/styleSheets/index.less";
import ErrorBoundary from "./common/ErrorBoundary.jsx";
const { useBreakpoint } = Grid;

function App() {
  const { Content } = Layout;
  const breakpoints = useBreakpoint();
  const { md, lg } = breakpoints;

  return (
    <BrowserRouter>
      <Layout theme="light">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          <Content
            className={`layoutContent ${
              lg
                ? "contentPaddingLg"
                : md
                ? "contentPaddingMd"
                : "contentPaddingSm"
            }`}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Content>
        </ErrorBoundary>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
