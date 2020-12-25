

const axios = require('axios');
let instance = null;
export const BASE_URL = 'https://apibeta.namkeenbites.com/';
export const IMAGE_URL = BASE_URL + 'nbimages/';

class API {

    constructor() {

    }

    static getInstance() {
        if (!instance) {
            instance = new API();
        }
        return instance;
    }


    build(mode, apiConfig) {

    }
   
    searchProduct(param, { SuccessCallback }) {
        axios.get(BASE_URL + 'nbapi/advanceSearch?q=' + param)
            .then(res => {
                console.log("XDXXXXX", JSON.stringify(res.data))
                SuccessCallback(res.data)
            })
            .catch(err => {
                console.log("XDXXXXX", JSON.stringify(err))
            });
    }
    
    profile(param, { SuccessCallback }) {
        axios.post(BASE_URL + 'nbapi/profile', param)
            .then(res => {
                console.log("XDXXXXX", JSON.stringify(res.data))
                SuccessCallback(res.data)
            })
            .catch(err => {
                console.log("XDXXXXX", JSON.stringify(err))
            });
    }
    getFeedback({ SuccessCallback }) {
        axios.get(BASE_URL + 'nbapi/getFeed')
            .then(res => {
                console.log("XDXXXXX", JSON.stringify(res.data))
                SuccessCallback(res.data)
            })
            .catch(err => {
                console.log("XDXXXXX", JSON.stringify(err))
            });
    }
    contactUs(param, { SuccessCallback }) {
        axios.post(BASE_URL + 'nbapi/contactUs', param)
            .then(res => {
                console.log("XDXXXXX", JSON.stringify(res.data))
                SuccessCallback(res.data)
            })
            .catch(err => {
                console.log("XDXXXXX", JSON.stringify(err))
            });
    }
}

export default API;


