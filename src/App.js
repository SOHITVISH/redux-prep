import User from "./cmp/User";
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux";
import Storage from "./Redux/Storage";

const App = () => {
  const design = (
    <>

      <Provider store={Storage}>
        <User />
      </Provider>
    </>
  )
  return design;
}
export default App;