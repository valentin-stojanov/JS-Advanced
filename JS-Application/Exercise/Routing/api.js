async function request(url, options){
    try{
    const response = await fetch (url, options)

    if (response.ok != ok){
        if(response.status == 403){
            sessionStorage.removeItem('userData');
        }
        const error = await response.json();
        throw new Error(error.message);
    }

    if(response.status == 204){
        return response;
    }else {
        return response.json();
    }

    } catch (error){
        alert(err.message);
        throw err;
    }
}

function createOptions(method = 'get', data){
    const options = {
        method,
        headers: {}
    }
}