'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Obfuscated credentials for security
const _0x = { u: atob('aGlyYXRl'), p: 'a]E9#f7d2$c1b0' };

// SHA-256 hash function
async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Pre-computed SHA-256 hash for password
const EXPECTED_HASH = 'e5a318ae215cbc1f20203edc53906f636abdfb33f1a8a7cd7ca991db0b6fcb41';

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is already logged in (from localStorage)
        const authStatus = localStorage.getItem('hirate_auth');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = async (username: string, password: string): Promise<boolean> => {
        setError(null);

        // Hash the entered password
        const enteredHash = await hashPassword(password);

        // Compare username (case-insensitive) and password hash
        const usernameMatch = username.toLowerCase() === _0x.u;
        const passwordMatch = enteredHash === EXPECTED_HASH;

        if (usernameMatch && passwordMatch) {
            setIsAuthenticated(true);
            localStorage.setItem('hirate_auth', 'true');
            return true;
        } else {
            setError('Invalid username or password');
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('hirate_auth');
    };

    if (isLoading) {
        return null; // Or a loading spinner
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
