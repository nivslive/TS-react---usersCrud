import Public from "./Public";
import Logged from "./Logged";

const auth = localStorage.getItem('user_token') !== null ? true : false;
const Routes = auth ? Public.concat(Logged) : Public
export default Routes;