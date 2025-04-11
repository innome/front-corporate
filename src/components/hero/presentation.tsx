import { Logo } from '@assets/logo';
import '@styles/hero/presentation.scss';

export const Presentation = () => {

    return (
        <section className={`container_logo`}>
            <picture>
                <Logo
                    colorBase="#cccccc"
                    colorPrimary="#2e2e2e"
                    className="logo"
                />
            </picture>
            <article className="container_presentation">
                <p className="name_company">Nival</p>
                <p className="name_slogan">Chasing balance</p>
            </article>
        </section>
    );
};
