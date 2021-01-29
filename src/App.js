import Home from "./components/HomePage/Home";
import "./App.scss";
import { AuthProvider } from "./context/CovidProvider";
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Home />
      </AuthProvider>
    </div>
  );
}

export default App;
