import Public from "./Public";
import Logged from "./Logged";

const auth = true;
const Routes = auth ? Public.concat(Logged) : Public
export default Routes;