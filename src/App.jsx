import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";
import { Content } from "./Content";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
