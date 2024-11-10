import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../utils/axios";
import { jwtDecode } from "jwt-decode";
import * as SecureStore from "expo-secure-store";


interface AuthContextData {
    isAuth: boolean;
    user: User | null;
    isLoading: boolean;
    signIn: (email: string, password: string) => void;
    signUp: (name: string, password: string, email: string, cpf: string, fixedIncome: string, phoneNumber: string) => void;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            const { data , status, headers } = await api.post("/v1/login", {
                email,
                password
            });

            if(status !== 200) {
                throw {
                    status,
                    message: data.message
                }
            }

            const getToken = headers['authorization'];
            await SecureStore.setItemAsync("token", getToken);

            setUser(data);
            setIsAuth(true);
            api.defaults.headers['Authorization'] = `Bearer ${getToken}`;
        } catch(err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    async function signUp(name: string, password: string, email: string, cpf: string, fixedIncome: string, phoneNumber: string) {
        try {
            setIsLoading(true);
            const { data, status, headers } = await api.post("/v1/register-user", {
                name,
                password,
                email,
                cpf,
                fixedIncome,
                phoneNumber
            });

            if(status !== 201) {
                throw {
                    status,
                    message: data.message
                }
            }

            const getToken = headers['authorization'];
            await SecureStore.setItemAsync("token", getToken);
            api.defaults.headers['Authorization'] = `Bearer ${getToken}`;

            setUser(data);
            setIsAuth(true);
        } catch(err) {
            console.error(`[ERROR] ->`, err);
        } finally {
            setIsLoading(false);
        }
    }

    const signOut = () => {
        setUser(null);
        setIsAuth(false);
        SecureStore.deleteItemAsync("token");
        api.defaults.headers['Authorization'] = "";
    }

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const token = await SecureStore.getItemAsync("token");

                if(token) {
                    api.defaults.headers['Authorization'] = `Bearer ${token}`;
                    if(token) {
                        const decode = jwtDecode(token);
                        const expiration = decode.exp! * 1000;;

                        if(expiration < Date.now()) {
                            return signOut();
                        }

                        // setUser(data);
                        setIsAuth(true);
                    }
                    // setUser(data);
                }
            } catch(err) {
                console.error(err);
                signOut();
            } finally {
                setIsLoading(false);
            }
        })
    }, [isAuth]);

    return (
        <AuthContext.Provider value={{
            isAuth, signIn, user, signUp, signOut, isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}