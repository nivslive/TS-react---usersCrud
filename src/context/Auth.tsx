import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function ObserveAuth() {
    const auth: any = useContext(AuthContext);
    if(!auth.auth && !auth.expulsed) {
        //window.location.pathname = '/login'
        auth.setExpulsed(true)
        console.log(auth)
    }
    return auth
}
export default ObserveAuth;