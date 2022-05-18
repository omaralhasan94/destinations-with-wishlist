import style from "./style.module.scss";
import Layout from "../../components/layout";
import WishlistTable from "../../components/wishlist-table";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishList = useSelector((state) => state.wishList);
  return (
    <Layout>
      <div className={style.wishlistContainer}>
        <WishlistTable data={wishList.wishList} />
      </div>
    </Layout>
  );
};

export default Wishlist;
