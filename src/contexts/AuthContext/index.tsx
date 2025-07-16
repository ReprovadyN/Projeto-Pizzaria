import { createContext, useEffect, useState, type PropsWithChildren } from "react";

type Profile = {
    name: string; 
    email: string;
    password: string;
}

type AuthContextType = {
    token?: string;
    signIn: (info: { email: string, password: string }) => void
    profile?: Profile;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [token, setToken] = useState<string | undefined>()
    const [profile, setProfile] = useState<Profile | undefined>()

    const signIn: AuthContextType['signIn'] = async (body) => {
        const request = await fetch('http://localhost:8000/auth/login', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }

        });

        if (!request.ok){
            throw new Error('Usuário ou senha inválidos')
        }
        const { token } = await request.json();

        localStorage.setItem('token', token);
        setToken(token)
    }

    const getProfile = async () => {
        if (!token) {
            setProfile(undefined)
            return
        }

        const profileRequest = await fetch('http://localhost:8000/auth/profile', {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        setProfile(await profileRequest.json())
    }

    useEffect(() => {
        getProfile()
    }, [token])

    return (
        <AuthContext.Provider value={{
            token,
            signIn,
            profile
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider