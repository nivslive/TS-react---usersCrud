import Public from "./Public";
import Logged from "./Logged";

const auth = true;
const Routes = auth ? Public : Logged
export default Routes;