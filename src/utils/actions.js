import { redirect } from "react-router-dom";
import axios from "axios";

const personalSiteAPIbaseURL = "http://localhost:3000";

// headers to go with each request
const headers = {"Content-Type": "application/json"};

export async function contactAction({request}) {
    if(request.method === "POST") {
        const contactMessage = await request.json();
        return await sendContact(contactMessage);
    } else {
        return null;
    }
}

// method to check reCAPTCHA validity
async function verifyReCAPTCHA(captchaToken) {
    try {
        const result = await axios.get(`${personalSiteAPIbaseURL}/verify`, captchaToken, {
            headers: headers,
            withCredentials: true,
        });
        if(result.status === 200) {
            return "valid";
        } else {
            return "invalid";
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

// method to send contact form
async function sendContact(contactData) {
    try {
        let result = await axios.post(`${personalSiteAPIbaseURL}/contact`, contactData, {
            headers: headers,
            withCredentials: true,
        });
        if(result.status === 200) {
            return {status: "sent", contactID: result.data};
        } else {
            return {status: "error"};
        }
    // something happend locally resulting in failure to send contact
    } catch (error) {
        return {status: "local-error"};
    }
}