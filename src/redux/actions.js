import {
  ADDTOWISHLIST,
  UPDATEWISHLISTSTATUS,
  DELETEWISHLIST,
} from "./action-types";

export const addWishList = (wishList) => {
  return {
    type: ADDTOWISHLIST,
    payload: {
      wishList,
    },
  };
};

export const updatedWishListStatus = (wishList) => {
  return {
    type: UPDATEWISHLISTSTATUS,
    payload: {
      wishList,
    },
  };
};

export const deleteWishList = (wishList) => {
  return {
    type: DELETEWISHLIST,
    payload: {
      wishList,
    },
  };
};
