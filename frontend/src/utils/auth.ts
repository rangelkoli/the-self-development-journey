import { BACKENDROUTE } from "./backendRoute";

export const Register = async (email: string, password: string, name: string) => {
    return await fetch(`${BACKENDROUTE}/api/register/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",

        },
        body: JSON.stringify({ email, password, name }),
    });
    }

export const Login = async (email: string, password: string) => {
    return await fetch(`${BACKENDROUTE}/api/login/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include",
        
        body: JSON.stringify({ email, password }),
    });
    }

export const GetCurrentUser = async () => {
    return await fetch(`${BACKENDROUTE}api/user/`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include",
    });
    }

export const Logout = async () => {
    return await fetch(`${BACKENDROUTE}api/logout/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    });
    }