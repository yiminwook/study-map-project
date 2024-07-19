import AppRouter from "@/AppRouter";
import { Provider } from "jotai";

function App() {
  return (
    <Provider>
      <AppRouter />
    </Provider>
  );
}

export default App;
