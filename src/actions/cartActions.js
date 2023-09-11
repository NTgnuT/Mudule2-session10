import {
  ACT_ADD_CART,
  ACT_DELETE,
  ACT_DOWN,
  ACT_UP,
} from "../constrains/actionType";

export const act_add = (product) => {
  return {
    type: ACT_ADD_CART,
    payload: product,
  };
};

export const act_up = (id) => {
  return {
    type: ACT_UP,
    payload: id,
  };
};

export const act_down = (id) => {
  return {
    type: ACT_DOWN,
    payload: id,
  };
};

export const act_delete = (product) => {
  return {
    type: ACT_DELETE,
    payload: product,
  };
};
