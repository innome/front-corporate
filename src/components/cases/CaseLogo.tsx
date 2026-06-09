import { useState } from 'react';

interface CaseLogoProps {
	src: string;
	alt: string;
	client: string;
}

function getClientInitials(client: string): string {
	const words = client.trim().split(/\s+/).filter(Boolean);

	if (words.length >= 2) {
		return words
			.slice(0, 2)
			.map((word) => word[0])
			.join('')
			.toUpperCase();
	}

	return client.slice(0, 2).toUpperCase();
}

export const CaseLogo = ({ src, alt, client }: CaseLogoProps) => {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return (
			<div className="cases-section__logo cases-section__logo--fallback" aria-hidden="true">
				{getClientInitials(client)}
			</div>
		);
	}

	return (
		<div className="cases-section__logo">
			<img src={src} alt={alt} loading="lazy" onError={() => setHasError(true)} />
		</div>
	);
};
