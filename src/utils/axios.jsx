import axios from "axios"


//centralized api instance which can be easily called from various components wihout even manually setting up and confuguring apis in every component
const axiosinstance = axios.create({
    //base url for the api
    baseURL: "https://fakestoreapi.com/"
});


//what are interceptors -->read below?
//they are basically reside between two end points of the api and modified the request and response as instructed 

// Add a request interceptor
axiosinstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log("request----->", config)
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

// Add a response interceptor
axiosinstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx (response code from 200-299 is treated as success code) cause this function to trigger and modification will be possible before reaching to .then .catch
        // Do something with response data

        console.log("response----->", response)
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

export default axiosinstance ;







//----------->must read<-------------------------------

/*
    📌 Definition: Axios
Axios is a promise-based HTTP client for making requests from:

Browsers (e.g., in React or vanilla JS)

Node.js (server-side apps)

It simplifies working with APIs and supports all common HTTP methods (GET, POST, PUT, DELETE, etc.).

✨ Key Features of Axios:
Makes HTTP requests (with support for async/await)

Automatically transforms JSON data

Supports request/response interceptors

Allows setting default headers, base URLs, and timeouts

Handles request cancellation

Works in both browser and Node.js environments




🛡️ Definition: Interceptors in Axios
Interceptors are functions provided by Axios that let you intercept and modify requests or responses before they are handled by .then() or .catch().

There are two types:

✅ Request Interceptors
Run before the request is sent.

Often used to:

Attach auth tokens

Log outgoing requests

Set headers dynamically


✅ Response Interceptors
Run after a response is received.

Often used to:

Handle errors globally

Log or transform response data

Redirect on specific status codes (e.g., 401 Unauthorized)



🔁 Why Interceptors Matter
🧼 Clean, reusable code (add headers/tokens once)

📦 Centralized error handling

🔒 Secure and consistent request flow

🔁 Add advanced logic like retries or token refresh

 */