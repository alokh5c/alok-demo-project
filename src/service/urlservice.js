import service from '../constant/services.js'
export function GetServiceData(actionCallback) {
    fetch(service.serviceUrl, {
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then(response => {
            if (response.status === 202 || response.status === 200) {
                return response.json()
            }
        })
        .then(json => actionCallback(json));
}