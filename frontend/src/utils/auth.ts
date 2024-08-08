import { BACKENDROUTE } from "./backendRoute";

export const Register = async (email: string, password: string) => {
    return await fetch(`${BACKENDROUTE}/api/register/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    }

export const Login = async (email: string, password: string) => {
    return await fetch(`${BACKENDROUTE}/api/login/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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