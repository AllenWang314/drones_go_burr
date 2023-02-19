import axios from "axios";
import type { AxiosRequestConfig } from "axios";

// Acts purely as a wrapper for Axios
class Request {
	constructor(config: AxiosRequestConfig) {
		config.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
		config.timeout = 100000;

		config.headers = {
			"Access-Control-Allow-Origin": "*",
		};
		axios(config)
			.then((response) => this.then(response))
			.catch((response) => this.catch(response));
	}

	then(callback: any): Request {
		this.then = callback;
		return this;
	}

	catch(callback: any): Request {
		this.catch = callback;
		return this;
	}
}

export default Request;