import React, { useState } from "react";
import style from "./style.module.scss";
import Modal from "../modal";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { updatedWishListStatus, deleteWishList } from "../../redux/actions";
import { useWishListTable } from "./use-wish-list-table";

const WishlistTable = ({ data }) => {
  const { open, selectedItem, handleOpen, handleClose, dispatch } =
    useWishListTable();
  return (
    <>
      <div className={style.wishlistTableContainer}>
        <div className={style.tableName}>Destination Wishlist</div>
        <div className={style.table}>
          <div className={[style.tHead, style.rowColor].join(" ")}>
            <div className={style.tTitle}>Name </div>
            <div className={style.tTitle}>Details</div>
            <div className={style.tTitle}>Checked</div>
            <div className={style.tTitle}>Remove</div>
          </div>
          {Array.isArray(data) &&
            data.map((row, index) => {
              const rowStyle =
                index % 2 ? [style.tRow] : [style.tRow, style.rowColor];
              return (
                <div className={rowStyle.join(" ")} key={row.id}>
                  <div className={style.tItem}>{row.name}</div>
                  <div className={style.tItem}>
                    <div
                      className={style.details}
                      onClick={() => {
                        handleOpen(row);
                      }}
                    >
                      {row.description}
                    </div>
                  </div>
                  <div className={style.tItem}>
                    <div className={style.cursorPointer}>
                      {row.checked ? (
                        <CheckIcon
                          style={{ color: "green" }}
                          onClick={() => {
                            dispatch(updatedWishListStatus(row));
                          }}
                        />
                      ) : (
                        <CloseIcon
                          style={{ color: "red" }}
                          onClick={() => {
                            dispatch(updatedWishListStatus(row));
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className={style.tItem}>
                    <div className={style.cursorPointer}>
                      <DeleteIcon
                        style={{ color: "red" }}
                        onClick={() => {
                          dispatch(deleteWishList(row));
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Modal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          title={selectedItem.name}
          desc={selectedItem.description}
        />
      </div>
    </>
  );
};
export default WishlistTable;
