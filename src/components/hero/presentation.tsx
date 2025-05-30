
import { Logo } from '@assets/logo';
import '@styles/hero/presentation.scss';

export const Presentation = () => {
	return (
		<section className='container_logo'>
			<picture>
				<Logo className="logo" />
			</picture>
			<article className={`container_presentation`}>
				<p className="name_company">Nival</p>
				<p className="name_slogan">Chasing balance</p>
			</article>
		</section>
	);
};
