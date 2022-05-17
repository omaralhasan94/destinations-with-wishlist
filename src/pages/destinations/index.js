import style from './style.module.scss';
import Layout from '../../components/layout';
import mockCards from './mock-cards.json'
import Card from '../../components/card'
const Destinations = () => {
    return (
        <Layout >
            <div className={style.destContainer}>
                {Array.isArray(mockCards) && mockCards.map(
                    (card) => {
                        return (
                            <Card name={card?.name} image={card?.image} description={card?.description} id={card?.id} key={card?.id} />
                        )
                    }
                )}
            </div>
        </Layout >
    )
}

export default Destinations;