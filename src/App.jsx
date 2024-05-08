import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </Provider>
  );
}

export default App;
