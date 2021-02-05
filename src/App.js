import "./App.scss";
import { AuthProvider } from "./context/CovidProvider";
import SideMenu from "./components/SideMenu/SideMenu";
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <SideMenu />
      </AuthProvider>
    </div>
  );
}

export default App;
