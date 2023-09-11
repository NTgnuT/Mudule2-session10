import { ACT_REGISTER } from "../constrains/actionType";

const initialState = JSON.parse(localStorage.getItem("listUser")) || [];

export const listUser = (state = initialState, action) => {
  switch (action.type) {
    case ACT_REGISTER:
      // clone mảng mới
      const newUser = [...state];
      // push vào mảng mới
      newUser.push(action.payload);
      // lưu lên local
      localStorage.setItem("listUser", JSON.stringify(newUser));
      // return mảng mới
      return newUser;

    default:
      return state;
  }
};
