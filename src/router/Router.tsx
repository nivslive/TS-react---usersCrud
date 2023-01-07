import Public from "./Public";
import Logged from "./Logged";

const auth = true;
const Routes = auth ? Logged : Public
export default Routes;