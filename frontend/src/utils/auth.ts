import { BACKENDROUTE } from "./backendRoute";
import { getCookie , setCookie} from 'react-use-cookie';

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

    console.log("email" + email);
    console.log("password" + password);
    const res = await fetch(`${BACKENDROUTE}/api/login/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include", // This line is important as it allows the server to set cookies
        body: JSON.stringify({ email, password }),
    });

    console.log(res);


    if (res.ok) {
        console.log("res.ok");
        res.json().then((data) => {
        console.log(data);
        setCookie("jwt", data.jwt);

        });


    }
    return res;

    }

export const GetCurrentUser = async () => {

    
    console.log(getCookie("jwt"));
    return await fetch(`${BACKENDROUTE}/api/user/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "getSetCookie": "true",
            "AUTHORIZATION": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZXhwIjoxNzI0NDIzMTE0LCJpYXQiOjE3MjMxMjcxMTR9.fckYIp8yxOY8v_KKqyxqwW8uR60Vr5aGDefsgj3xAKw"
        },
        credentials: "include",
    });
    }
    // Accessing cookies

export const Logout = async () => {
    return await fetch(`${BACKENDROUTE}/api/logout/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    });
    }