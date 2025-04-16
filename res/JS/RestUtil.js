class RestUtil {
    constructor() {
    }

    static get(endpoint, authToken, responseOk, responseKo){
        return fetch(endpoint,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
        )
        .then(response => {
            if(response.status == 200){
                return response.text();
            }
            else{
                responseKo(response.body);
            }
        })
        .then(data =>{
            try {
                // console.log(restutilKo.params)
                data = JSON.parse(data);
                responseOk(data);
                return data
            } catch (e) {
                console.log(`Errore nella richiesta GET [${endpoint}]: ${e.message}`);
            }
        })
    }

    static post(endpoint, authToken, body, responseOk, responseKo){
        return fetch(endpoint,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                },
                body: JSON.stringify(body)
            }
        )
        .then(response => {
            if(response.status == 200){
                return response.text();
            }
            else{
                responseKo(response.body);
            }
        })
        .then(data =>{
            try {
                // console.log(restutilKo.params)
                data = JSON.parse(data);
                responseOk(data);
                return data
            } catch (e) {
                console.log(`Errore nella richiesta POST [${endpoint}]: ${e.message}`);
            }
        })
    }

    static post_login(endpoint, username, password, responseOk, responseKo){
        return fetch(endpoint,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Basic " + btoa(username + ":" + password)
                }
            }
        )
        .then(response => {
            if(response.status == 200){

                sessionStorage.setItem("token", response.headers.get("Authorization"));
                return response.text();
            }
            else{
                responseKo(response.body);
            }
        })
        .then(data =>{
            try {
                //TODO: Gestire eventuali informazioni da salvare in session
                data = JSON.parse(data);
                responseOk(data);
                return data
            } catch (e) {
                console.log(`Errore nella richiesta POST_LOGIN [${endpoint}]: ${e.message}`);
            }
        })
    }
}
let restUtil = new RestUtil()