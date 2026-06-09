export async function copyToClipboard(text: string): Promise<boolean> {
	if (typeof window === 'undefined') return false;

	if (navigator.clipboard?.writeText) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			// Continúa con el fallback
		}
	}

	try {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'fixed';
		textarea.style.top = '-9999px';
		document.body.appendChild(textarea);
		textarea.select();
		const didCopy = document.execCommand('copy');
		document.body.removeChild(textarea);
		return didCopy;
	} catch {
		return false;
	}
}
