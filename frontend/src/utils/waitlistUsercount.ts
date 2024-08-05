import axios from "axios";

const getWaitlistedUsers = async () => {
    return await axios.get(`https://the-self-development-journey-avafdugdgjfgfrat.eastus-01.azurewebsites.net/api/waitlisted-users/`);


}
// const getWaitlistedUsers = async () => {
//     return await axios.get(`http://127.0.0.1:8000/api/waitlisted-users/`);


// }



export default getWaitlistedUsers;

