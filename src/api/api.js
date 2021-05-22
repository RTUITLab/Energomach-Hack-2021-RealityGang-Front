import * as axios from "axios";
import {fillInn} from '../redux/filter-reducer'

let baseUrl = process.env.REACT_APP_PRODUCTION_URL

if(baseUrl === undefined) {
    // window.alert('Не удалось получить доступ к переменной окружения REACT_APP_PRODUCTION_URL')
}

const getFormData = (mass, auth) => { //Если нужен Bearer token, то auth = true
    let formdata = new FormData();

    mass.map(m => {
        return formdata.append(m.name, m.value);
    })

    return formdata;
}

const getHeaders = () => {
    const accessToken = 'Bearer  ' + localStorage.getItem('accessToken')
    let myHeaders = new Headers();
    myHeaders.append("Authorization", accessToken);
    return myHeaders
}

export const filterApi = {
    fillInn(inn) { //Заполнение полей по инн
        let data = getFormData([{name: 'inn', value: inn}])
        return axios.post(baseUrl + `api/autofill_inn`, data)
            .then(response => response.data)
    },
    fillOgrn(ogrn) { //Заполнение полей по огрн
        let data = getFormData([{name: 'ogrn', value: ogrn}])
        return axios.post(baseUrl + `api/autofill_ogrn`, data)
            .then(response => response.data)
    },
}

export const authApi = {

    login(username, password) { //Логин
        let data = getFormData([{name: 'username', value: username}, {name: 'password', value: password}])
        return axios.post(baseUrl + `auth/jwt/create`, data)
    },

}
