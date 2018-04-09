import * as API from "../util/item_util";


export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";


const receiveItems = (payload) => ({
  type: RECEIVE_ITEMS,
  payload
});

const receiveItem = (payload) =>({
  type: RECEIVE_ITEM,
  payload
});

const removeItem = (itemId) =>({
  type: REMOVE_ITEM,
  itemId
});

const receiveItemErrors = (errors) =>({
    type: RECEIVE_ITEM_ERRORS,
    errors
});


export const fetchItems = () => dispatch => {
  return API.fetchItems().then(
    items => dispatch(receiveItems(items)),
    error => dispatch(receiveItemErrors(error.responseJSON))
  );
};


export const fetchItem = (id) => dispatch => {
  return API.fetchItem(id).then(
    item => dispatch(receiveItem(item)),
    error => dispatch(receiveItemErrors(error.responseJSON))
  );
};

export const createItem = (item) => dispatch => {
  return API.createItem(item).then(
    createdItem => dispatch(receiveItem(createdItem)),
    error => dispatch(receiveItemErrors(error.responseJSON))
  );
};

export const updateItem = (item) => dispatch => {
  return API.updateItem(item).then(
    updatedItem => dispatch(receiveItem(updatedItem)),
    error => dispatch(receiveItemErrors(error.responseJSON))
  );
};
export const deleteItem = (itemId) => dispatch => {
  return API.deleteItem(itemId).then(
    item => dispatch(removeItem(itemId)),
    error => dispatch(receiveItemErrors(error.responseJSON))
  );
};
