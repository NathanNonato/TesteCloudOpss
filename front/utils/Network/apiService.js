const apiUrl = 'http://127.0.0.1:8000';

async function getApi({ path, params }) {
    const response = await fetch(apiUrl + path, {
        params
    });

    if (response.status === 200)
        return { data: response.data, status: response.status };

    return { message: 'Faild on request', response };
}

async function postApi({ path, data }) {
    const response = await fetch(apiUrl + path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200)
        return { data: response.data, status: response.status };

    return { message: 'Faild on request', response };
}

async function delApi({ path, params }) {
    const response = await fetch(apiUrl + path, {
        method: 'DELETE',
        params
    });

    if (response.status === 200)
        return { data: response.data, status: response.status };

    return { message: 'Faild on request', response };
}

export { getApi, postApi, delApi };