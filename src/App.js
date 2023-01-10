import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Periods from "./components/Periods";
import TimePeriod from "./components/TimePeriod";
import RootLayout from "./components/RootLayout";
import About from "./components/About";

import "./index.css";

// https://wiki.openopus.org/wiki/Using_the_Open_Opus_API
// Jhon Martin Art

const App = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Periods />} />
        <Route
          path="Medieval"
          element={<TimePeriod path={"Medieval"} time_period="Medieval" />}
        />
        <Route
          path="Renaissance"
          element={
            <TimePeriod path={"Renaissance"} time_period="Renaissance" />
          }
        />
        <Route
          path="Baroque"
          element={<TimePeriod path={"Baroque"} time_period="Baroque" />}
        />
        <Route
          path="Classical"
          element={<TimePeriod path={"Classical"} time_period="Classical" />}
        />
        <Route
          path="Early Romantic"
          element={
            <TimePeriod
              path={"Early Romantic"}
              time_period="Early TimePeriod"
            />
          }
        />
        <Route
          path="Romantic"
          element={<TimePeriod path={"Romantic"} time_period="TimePeriod" />}
        />
        <Route
          path="Late Romantic"
          element={
            <TimePeriod path={"Late Romantic"} time_period="Late TimePeriod" />
          }
        />
        <Route
          path="20th Century"
          element={
            <TimePeriod path={"20th Century"} time_period="20th Century" />
          }
        />
        <Route
          path="Post-War"
          element={<TimePeriod path={"Post-War"} time_period="Post-War" />}
        />
        <Route
          path="21st Century"
          element={
            <TimePeriod path={"21st Century"} time_period="21st Century" />
          }
        />
        <Route path="About" element={<About />} />
      </Route>
    </Routes>
    // </Router>
  );
};

export default App;
