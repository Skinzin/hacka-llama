import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuth() {
    const auth = useContext(AuthContext);

    return auth;
}