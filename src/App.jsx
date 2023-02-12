import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/globalStyle";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
