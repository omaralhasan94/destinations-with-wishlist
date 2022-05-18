import style from "./style.module.scss";
import Layout from "../../components/layout";
import mockCards from "./mock-cards.json";
import Card from "../../components/card";
import { useDestinations } from "./useDestinations";
import MuiSnackbars from "../../components/snackbar";
const Destinations = () => {
  const { handelCardOnClick, open, severity, msg, handleClose } =
    useDestinations();
  return (
    <Layout>
      <div className={style.destContainer}>
        {Array.isArray(mockCards) &&
          mockCards.map((card) => {
            return (
              <Card
                name={card?.name}
                image={card?.image}
                description={card?.description}
                id={card?.id}
                onClick={() => {
                  handelCardOnClick(card);
                }}
              />
            );
          })}
        <MuiSnackbars
          severity={severity}
          msg={msg}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </Layout>
  );
};

export default Destinations;
