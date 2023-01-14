export type reducer = "twitch";

export type actionNames = 
    "";

export type actionTypes = `${reducer}/${actionNames}`;

export type action = {
    payload: actionPayloads,
    type: actionTypes
};

export type actionPayloads =
    string;

