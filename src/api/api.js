import * as axios from "axios";

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
    getFilters() { //Фильтры по пользователю
        let data = getFormData([])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.get(baseUrl + `api/save`,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
                data
            })
            .then(response => response.data)
    },
    saveFilters(company) { //Фильтры по пользователю
        let companyData = JSON.stringify(company)
        let data = getFormData([{name: 'company', value: companyData}])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.post(baseUrl + `api/save`, data,

            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            }

            )
            .then(response => response.data)
    },
}

export const authApi = {

    login(username, password) { //Логин
        let data = getFormData([{name: 'username', value: username}, {name: 'password', value: password}])
        return axios.post(baseUrl + `auth/jwt/create`, data)
    },

}
export const subsidyApi = {

    getSubsidyList(company) {

        let okved = JSON.stringify(company.okved)
        let dop_tass = JSON.stringify(company.dop_tass)
        let attrs = JSON.stringify(company.attrs)
        let otr = JSON.stringify(company.otr)
        let data = getFormData([{name: 'okved', value: okved}, {name: 'osn_tass', value: company.osn_tass}, {name: 'dop_tass', value: dop_tass},
            {name: 'attrs', value: attrs}, {name: 'otr', value: otr}, {name: 'region', value: company.region},
            {name: 'form', value: company.form}, {name: 'inn', value: company.inn}, {name: 'ogrn', value: company.ogrn}, {name: 'kbk', value: ''}])

        return axios.post(baseUrl + `api/predict`, data)
            .then(response => response.data)
    },

    getSubsidyData(id) {
        let data = getFormData([{name: 'id', value: id}])
        return axios.post(baseUrl + `api/get_selected_subsidy`, data)
            .then(response => response.data)
    },

}
