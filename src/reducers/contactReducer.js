import * as actionTypes from "../actions/actionTypes";

const initState = {
  contacts: [],
  contact: {},
  contactPosts: [],
  contactTodos: [],
  contactAlbums: [],
  user: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case actionTypes.GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case actionTypes.GET_CONTACT_POSTS:
      return {
        ...state,
        contactPosts: action.payload,
      };
    case actionTypes.GET_CONTACT_TODOS:
      return {
        ...state,
        contactTodos: action.payload,
      };
    case actionTypes.GET_CONTACT_ALBUMS:
      return {
        ...state,
        contactAlbums: action.payload,
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };
    case actionTypes.LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    default: {
      return state;
    }
  }
}
