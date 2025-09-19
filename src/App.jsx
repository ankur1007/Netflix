import { Provider } from "react-redux";
import Body from "./Components/Body.jsx";
import appStore from "./Utilis/appstore.jsx";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
