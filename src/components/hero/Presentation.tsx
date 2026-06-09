import InfoData from '@database/info';
import '@styles/hero/presentation.scss';

export const Presentation = () => {
	return (
		<section className='container_logo'>
			<article className='container_presentation'>
				<p className='name_company'>{InfoData.brandName}</p>
				<p className='name_slogan'>Chasing balance</p>
			</article>
		</section>
	);
};
