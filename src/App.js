import React from "react";
import { Layout, Grid } from "antd";
import "antd/dist/antd.less";
import "./assets/styleSheets/App.less";
import Header from "./common/Header.jsx";
import Footer from "./common/Footer.jsx";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import "antd/dist/antd.less";
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
            className="site-layout"
            style={{
              padding: lg ? "0 100px" : md ? "0 30px" : "0 0",
              marginTop: 64,
            }}
          >
            <div className="site-layout-background">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Content>
        </ErrorBoundary>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
