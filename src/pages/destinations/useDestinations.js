import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWishList } from "../../redux/actions";
const useDestinations = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [msg, setMsg] = useState("");

  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const handelCardOnClick = (card) => {
    dispatch(addWishList(card));
    const list = wishList.wishList;
    if (Array.isArray(list)) {
      const flag = list.findIndex((elem) => elem.id == card.id);

      if (flag === -1) {
        setMsg("Card Added to your wish List");
        setSeverity("success");
      } else {
        setMsg("Card already added to your wishlist");
        setSeverity("error");
      }
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return {
    handelCardOnClick,
    dispatch,
    open,
    setOpen,
    severity,
    msg,
    handleClose,
  };
};
export { useDestinations };
