import {
  ADDTOWISHLIST,
  UPDATEWISHLISTSTATUS,
  DELETEWISHLIST,
} from "../action-types";

const initialState = {
  wishList: [],
};

const updateWishlist = (state, payload) => {
  const currentArray = [...state];
  const index = currentArray.findIndex(
    (wishlist) => wishlist.destinationId == payload.id
  );
  if (index !== -1) {
    currentArray[index] = {
      id: payload.id,
      name: payload.name,
      description: payload.description,
    };

    return currentArray;
  }
  return state;
};

export const wishList = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOWISHLIST: {
      const { wishList } = action.payload;
      wishList.checked = false;
      const isFound = state.wishList.some((element) => {
        if (element.id === wishList.id) {
          return true;
        }

        return false;
      });
      if (!isFound) {
        return {
          ...state,
          wishList: [...state.wishList, wishList],
        };
      } else {
        return {
          ...state,
          wishList: [...state.wishList],
        };
      }
    }
    case UPDATEWISHLISTSTATUS: {
      const { wishList } = action.payload;
      wishList.checked = !wishList.checked;
      return { ...state, wishList: updateWishlist(state.wishList, wishList) };
    }
    case DELETEWISHLIST: {
      const { wishList } = action.payload;
      return {
        ...state,
        wishList: [...state.wishList.filter((list) => list.id !== wishList.id)],
      };
    }
    default:
      return state;
  }
};
