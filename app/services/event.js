import axios from 'axios';

import { API_URL } from '../constants';

//API End Point
export const EVENT = `${API_URL}/event`;
export const CATEGORY = `${API_URL}/category`;

export async function getEvents(params = {}){
    try{
        let res = await axios.get(`${EVENT}`, {params});

        return res.data;
    }catch (e) {
        throw handler(e)
    }
}

export async function getEvent(eventId){
    try{
        let res = await axios.get(`${EVENT}/${eventId}`);

        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function createEvent(data){
    try{
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for ( let key in data )
            form_data.append(key, data[key]);

        let res = await axios.post(EVENT, form_data, options);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function editEvent(eventId, data) {
    try{
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for ( let key in data )
            form_data.append(key, data[key]);

        let res = await axios.put(`${EVENT}/${eventId}`, form_data, options);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function deleteEvent(eventId) {
    try {
        let res = await axios.delete(`${EVENT}/${eventId}`);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function getCategories(params = {}){
    try{
        let res = await axios.get(`${CATEGORY}`, {params});
        return res.data;
    }catch (e) {
        throw handler(e)
    }
}

export async function getEventComments(eventId, page=1, limit=5){
    try{
        let res = await axios.get(`${EVENT}/${eventId}/comments?page=${page}&limit=${limit}`);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function getEventAttendees(eventId, page=1, limit=5){
    try{
        let res = await axios.get(`${EVENT}/${eventId}/attendees?page=${page}&limit=${limit}`);
        return res.data;

    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}

// "data": {"error": {"start_date": "Event start date and time is required"}},
