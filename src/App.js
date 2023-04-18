import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./organism";
import { Home, Episodes, Locations } from "./pages";
import { BigCard} from "./atoms";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Container >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<BigCard />} />

          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<BigCard />} />

          <Route path="/location" element={<Locations />} />
          <Route path="/location/:id" element={<BigCard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
