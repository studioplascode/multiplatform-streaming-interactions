export type reducer = 
    "twitch" |
    "config";

export type actionNames = 
    "setId";

export type actionTypes = `${reducer}/${actionNames}`;

export type action = {
    payload: actionPayloads,
    type: actionTypes
};

export type actionPayloads =
    string;

