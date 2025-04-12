import { Presentation } from './hero/presentation';
import { DetailsInfo }  from './hero/detailsInfo';
import { CardFlip } from './animations/cardFlip';

import '@styles/home.scss';

export const Home = () => {
    return (
        <section className="container_home">
            <CardFlip
                frontCard={ <Presentation /> }
                backCard={ <DetailsInfo /> }
            />
        </section>
    )
}