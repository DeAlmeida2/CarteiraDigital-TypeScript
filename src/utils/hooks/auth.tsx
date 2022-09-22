import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn: (email: string, passaword: string) => void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

type Props = {
    children?: React.ReactNode
  };

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

        return !!isLogged;
    });

    const signIn = (email: string, passaword: string) => {
        if(email === 'andre_f_al@hotmail.com' && passaword === '123'){
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        }else{
            alert('Senha ou usuário inválido!');
        }
    }
    const signOut = () => {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

    function useAuth(): IAuthContext {
        const context = useContext(AuthContext);

        return context;
    }

    export { AuthProvider, useAuth }
