const postWaitlist = async (email: string) => {
    console.log(email);
    return await fetch(``, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
    });
    }
    

export default postWaitlist;