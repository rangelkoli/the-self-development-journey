const postWaitlist = async (email: string) => {
    console.log(email);
    return await fetch(`https://the-self-development-journey-avafdugdgjfgfrat.eastus-01.azurewebsites.net/api/waitlist/`, {
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