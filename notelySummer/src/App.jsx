// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import NotFound from "./Pages/NotFound";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* 404 Not Found Route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
