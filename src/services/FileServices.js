import axios from "axios";

export default class FileServices {
    sendImage(imagen) {
        return new Promise(function(resolve) {
            let request = "api/TestingFiles";
            let url = "https://apipostfiles.azurewebsites.net/";
            axios.post(url + request, imagen).then(response => {
                resolve(response)
            })
        })
    }
}