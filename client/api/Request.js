import axios from "axios";
import { AxiosRequestConfig } from "axios";

// Acts purely as a wrapper for Axios
class Request {
	constructor(config) {
		config.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
		config.timeout = 100000;

		config.headers = {
			"Access-Control-Allow-Origin": "*",
		};
		axios(config)
			.then((response) => this.then(response))
			.catch((response) => this.catch(response));
	}

	then(callback) {
		this.then = callback;
		return this;
	}

	catch(callback) {
		this.catch = callback;
		return this;
	}
}

export default Request;