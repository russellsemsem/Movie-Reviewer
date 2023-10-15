import axios from 'axios';

/**
 * When conntecting to the backend server, make sure the baseURL (ngrok forwarding address) points to the backend's local host
 * To get the forwarding address, run ngrok http 8080 (port 8080 is where our backend is) on terminal
 * make sure the backend is also running by running the MovieApplication.
 * 
 * Since the Backend(Tomcat) port is 8080 and the React’s port is 3000, there is a cross-domain problem, and requests will be blocked by the CORS policy.
 * However, adding @CrossOrigin(origins = "*") to the backend's controllers fixes this.
 * 
 * (Exp) baseURL:  https://0579-2601-647-6880-d550-9d63-da14-3f-1f5b.ngrok-free.app -> http://localhost:8080
*/
export default axios.create({
    baseURL: 'https://0579-2601-647-6880-d550-9d63-da14-3f-1f5b.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}    

});