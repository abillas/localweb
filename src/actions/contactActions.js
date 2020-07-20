import axios from "axios";
import * as actionTypes from "./actionTypes";

const URL = "https://jsonplaceholder.typicode.com/users/";

export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get(URL);

    dispatch({
      type: actionTypes.GET_CONTACTS,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}${id}`);

    dispatch({
      type: actionTypes.GET_CONTACT,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const getContactPosts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}${id}/posts`);

    dispatch({
      type: actionTypes.GET_CONTACT_POSTS,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const getContactTodos = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}${id}/todos`);

    dispatch({
      type: actionTypes.GET_CONTACT_TODOS,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};
export const getContactAlbums = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}${id}/albums`);

    dispatch({
      type: actionTypes.GET_CONTACT_ALBUMS,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const deleteContact = (id) => (dispatch) => {
  axios
    .delete(`${URL}${id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.DELETE_CONTACT,
        payload: id,
      });
    })
    .catch((err) => {
      alert(err);
    });
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const res = await axios.post(URL, contact);

    dispatch({
      type: actionTypes.ADD_CONTACT,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const updateContact = (contact) => async (dispatch) => {
  try {
    const res = await axios.put(`${URL}${contact.id}`, contact);

    dispatch({
      type: actionTypes.UPDATE_CONTACT,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const logIn = (user) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOG_IN,
      payload: user,
    });
  } catch (error) {
    alert(error);
  }
};
