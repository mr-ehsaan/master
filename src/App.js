import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.less";
import "./assets/styleSheets/App.less";
import Header from "./common/Header";
import Footer from "./common/Footer";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const { Content } = Layout;

  return (
    <BrowserRouter>
      <Layout theme="light">
        <Header />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/signup" element={<SignUpPage />} />
            </Routes>
            {/* <Routes>
            </Routes> */}
          </div>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
