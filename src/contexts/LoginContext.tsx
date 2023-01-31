import api from "../services/api";
import { createContext, useEffect } from "react";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }: any) => {

    useEffect(() => {

        (async function () {
            try {
                const { data } = await api.post('/authentication/login', {
                    email: '',
                    pass: '',
                });

                if (data.length <= 0) return;
            } catch (err) {
                console.info(err)
            }
        })

        return () => { }
    }, [])

    return (
        <LoginContext.Provider value={{}}>
            {children}
        </LoginContext.Provider>
    )



}