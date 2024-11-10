
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export function useGlobal() {
    const global = useContext(GlobalContext);

    return global;
}