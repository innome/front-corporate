import type { NavLinkItem } from './nav-data';
import { ROUTES } from './nav-data';

interface DropdownGridProps {
	items: NavLinkItem[];
	onNavigate: () => void;
}

export const DropdownGrid = ({ items, onNavigate }: DropdownGridProps) => (
	<div className="navbar-dropdown navbar-dropdown--grid">
		{items.map((item) => (
			<a key={item.label} href={item.href} className="navbar-dropdown__grid-item" onClick={onNavigate}>
				<span className="navbar-dropdown__link-title">{item.label}</span>
				{item.description && (
					<span className="navbar-dropdown__link-desc">{item.description}</span>
				)}
			</a>
		))}
		<a href={ROUTES.capacidades} className="navbar-dropdown__view-all navbar-dropdown__view-all--grid" onClick={onNavigate}>
			Ver todas las capacidades →
		</a>
	</div>
);
