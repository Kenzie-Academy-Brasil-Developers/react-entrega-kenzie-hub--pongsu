import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <Toaster 
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            padding: '15px',
            background: 'var(--grey2)',
            color: 'var(--grey0)',
          },}}
      />
    </>
  );
};

export default App;
