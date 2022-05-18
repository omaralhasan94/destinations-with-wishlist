import React, { useState } from "react";
import { useDispatch } from "react-redux";

const useWishListTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    name: "name",
    description: "description",
  });
  const handleOpen = (row) => {
    setOpen(true);
    setSelectedItem(row);
  };
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  return {
    open,
    setOpen,
    selectedItem,
    setSelectedItem,
    handleOpen,
    handleClose,
    dispatch,
  };
};
export { useWishListTable };
