import { BACKENDROUTE } from "./backendRoute";

const postWaitlist = async (email: string) => {
    console.log(email);
    console.log(BACKENDROUTE);
    return await fetch(`${BACKENDROUTE}/api/waitlist/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });
    }
    

export default postWaitlist;

// const postWaitlist = async (email: string) => {
//     console.log(email);
//     return await fetch(`http://127.0.0.1:8000/api/waitlist/`, {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//     });
//     }
    

// export default postWaitlist;