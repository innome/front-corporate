import type { NavLinkItem } from './nav-data';

interface DropdownSimpleProps {
	items: NavLinkItem[];
	onNavigate: () => void;
	isPlaceholder?: boolean;
}

export const DropdownSimple = ({ items, onNavigate, isPlaceholder = false }: DropdownSimpleProps) => (
	<div className={`navbar-dropdown navbar-dropdown--simple ${isPlaceholder ? 'is-placeholder' : ''}`}>
		{items.map((item) => (
			<a key={item.label} href={item.href} className="navbar-dropdown__simple-item" onClick={onNavigate}>
				<span className="navbar-dropdown__link-title">{item.label}</span>
				{item.description && (
					<span className="navbar-dropdown__link-desc">{item.description}</span>
				)}
			</a>
		))}
	</div>
);
