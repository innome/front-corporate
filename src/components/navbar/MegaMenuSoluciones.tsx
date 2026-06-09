import { useState } from 'react';
import { solucionesTabs, ROUTES } from './nav-data';

interface MegaMenuSolucionesProps {
	onNavigate: () => void;
}

export const MegaMenuSoluciones = ({ onNavigate }: MegaMenuSolucionesProps) => {
	const [activeTabId, setActiveTabId] = useState(solucionesTabs[0].id);
	const activeTab = solucionesTabs.find((tab) => tab.id === activeTabId) ?? solucionesTabs[0];

	return (
		<div className="navbar-dropdown navbar-dropdown--mega">
			<div className="navbar-dropdown__tabs" role="tablist" aria-label="Categorías de soluciones">
				{solucionesTabs.map((tab) => (
					<button
						key={tab.id}
						type="button"
						role="tab"
						id={`tab-${tab.id}`}
						aria-selected={activeTabId === tab.id}
						aria-controls={`panel-${tab.id}`}
						className={`navbar-dropdown__tab ${activeTabId === tab.id ? 'is-active' : ''}`}
						onMouseEnter={() => setActiveTabId(tab.id)}
						onFocus={() => setActiveTabId(tab.id)}
						onClick={() => setActiveTabId(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div
				className="navbar-dropdown__panel"
				role="tabpanel"
				id={`panel-${activeTab.id}`}
				aria-labelledby={`tab-${activeTab.id}`}
			>
				{activeTab.items.map((item) => (
					<a key={item.label} href={item.href} className="navbar-dropdown__link" onClick={onNavigate}>
						<span className="navbar-dropdown__link-title">{item.label}</span>
						{item.description && (
							<span className="navbar-dropdown__link-desc">{item.description}</span>
						)}
					</a>
				))}
			</div>
			<a href={ROUTES.soluciones} className="navbar-dropdown__view-all" onClick={onNavigate}>
				Ver todas las soluciones →
			</a>
		</div>
	);
};
