import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/globalStyle";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

Modal.setAppElement('#root');

const App = () => {  
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer
        toastStyle={{ backgroundColor: "var(--grey2)" }}
        position="top-right"
        autoClose={3700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
