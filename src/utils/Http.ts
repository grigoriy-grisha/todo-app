class Http {
    constructor() {
    }

    get(url: string) {
        return fetch(url).then(res => res.json())
    }

    post(url: string, body = {}) {
        const MyHeaders = new Headers();
        MyHeaders.append("Content-Type", "application/json");

        return fetch(url, {
            method: 'POST',
            headers: MyHeaders,
            body: JSON.stringify(body),
            redirect: 'follow'
        }).then(res => res.json())
    }

    delete(url: string, body = {}) {
        return fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            redirect: 'follow'
        }).then(res => res.json())
    }

    put(url: string) {
        return fetch(url, {
            method: 'PUT',
            redirect: 'follow'
        }).then(res => res.json())
    }
}

export const http = new Http()
