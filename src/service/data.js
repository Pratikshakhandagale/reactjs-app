import ErrorPageMsg from "./Common";



export function Post(url, params) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: params
    }).then(res => res.json())
        .then(json => {
            console.log(json);
            alert(json.message)
        });
}


export function Get(url) {

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(<ErrorPageMsg />);

            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            throw new Error(<ErrorPageMsg />);
            
        });
    
}





