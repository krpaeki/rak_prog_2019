const basePath = "/api/v1";

export const getItems = () => {
    return fetch(`${basePath}/items`)
    .then(res => {
        if(!res.ok) throw "toodete leidmine ebaonnestus";
        return res.json();
    });
};

export const getItem = ({itemId}) => {
    return fetch(`${basePath}/items/${itemId}`)
    .then(res => {
        if(!res.ok) throw "toote leidmine ebaonnestus";
        return res.json();
    });
};

export const getUser = ({userId, token}) => {
    return fetch(`${basePath}/users/${userId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => {
        if(!res.ok) throw "kasutaja leidmine ebaonnestus";
        return res.json();
    });
};

export const addItemToCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => {
        if(!res.ok) throw "toote lisamine onnestus";
        return true;
    });
};

export const removeItemFromCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => {
        if(!res.ok) throw "toote eemaldamine ebaonnestus";
        return true;
    });
};

export const login = ({email, password}) => {
    return fetch(`${basePath}/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify( {email, password})
    })
    .then(res => {
        if(!res.ok) throw "login ebaonnestus";
        return res.json();
    });
};

export const signup = ({email, password}) => {
    return fetch(`${basePath}/auth/signup`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify( {email, password})
    })
    .then(res => {
        if(!res.ok) throw "signup ebaonnestus";
        return res.json();
    });
}; 