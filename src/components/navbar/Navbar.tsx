import { useCallback, useEffect, useRef, useState } from 'react';
import { Logo } from '@assets/logo';
import { Brush } from '@assets/icons/brush';
import { useBodyTheme } from '@hooks/useBodyTheme';
import { MegaMenuSoluciones } from './MegaMenuSoluciones';
import { DropdownGrid } from './DropdownGrid';
import { DropdownSimple } from './DropdownSimple';
import InfoData from '@database/info';
import { capacidadesItems, casosItems, companiaItems, productosItems, ROUTES } from './nav-data';
import '@styles/navbar/navbar.scss';

type NavMenuId = 'soluciones' | 'capacidades' | 'productos' | 'casos' | 'compania' | null;

const MENU_CLOSE_DELAY_MS = 150;

const getIconColor = (theme: string): string => {
	if (theme === 'white') return '#161616';
	return '#ffffff';
};

export const Navbar = () => {
	const { currentTheme, toggleTheme } = useBodyTheme('white');
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState<NavMenuId>(null);
	const [mobileExpanded, setMobileExpanded] = useState<NavMenuId>(null);
	const closeMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const clearCloseMenuTimeout = useCallback(() => {
		if (closeMenuTimeoutRef.current) {
			clearTimeout(closeMenuTimeoutRef.current);
			closeMenuTimeoutRef.current = null;
		}
	}, []);

	const closeMenus = useCallback(() => {
		clearCloseMenuTimeout();
		setActiveMenu(null);
		setMobileExpanded(null);
		setIsMobileOpen(false);
	}, [clearCloseMenuTimeout]);

	const handleNavigate = useCallback(() => {
		closeMenus();
	}, [closeMenus]);

	const handleItemEnter = useCallback((menuId: NavMenuId) => {
		clearCloseMenuTimeout();
		setActiveMenu(menuId);
	}, [clearCloseMenuTimeout]);

	const handleItemLeave = useCallback(() => {
		clearCloseMenuTimeout();
		closeMenuTimeoutRef.current = setTimeout(() => {
			setActiveMenu(null);
		}, MENU_CLOSE_DELAY_MS);
	}, [clearCloseMenuTimeout]);

	useEffect(() => {
		return () => clearCloseMenuTimeout();
	}, [clearCloseMenuTimeout]);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 24);
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!isMobileOpen) return;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') closeMenus();
		};
		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isMobileOpen, closeMenus]);

	const handleMenuToggle = (menuId: NavMenuId) => {
		setActiveMenu((current) => (current === menuId ? null : menuId));
	};

	const handleMobileSectionToggle = (menuId: NavMenuId) => {
		setMobileExpanded((current) => (current === menuId ? null : menuId));
	};

	const handleMobileToggle = () => {
		setIsMobileOpen((open) => !open);
		if (isMobileOpen) {
			setMobileExpanded(null);
		}
	};

	return (
		<header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
			<div className="navbar__inner">
				<a href={ROUTES.home} className="navbar__logo" aria-label={`${InfoData.brandName} — inicio`} onClick={handleNavigate}>
					<Logo className="navbar__logo-svg" />
					<span className="navbar__logo-text">{InfoData.brandName}</span>
				</a>

				<nav className="navbar__desktop" aria-label="Navegación principal">
					<div
						className="navbar__item"
						onMouseEnter={() => handleItemEnter('soluciones')}
						onMouseLeave={handleItemLeave}
					>
						<button
							type="button"
							className={`navbar__trigger ${activeMenu === 'soluciones' ? 'is-active' : ''}`}
							aria-expanded={activeMenu === 'soluciones'}
							onClick={() => handleMenuToggle('soluciones')}
						>
							Soluciones
						</button>
						{activeMenu === 'soluciones' && <MegaMenuSoluciones onNavigate={handleNavigate} />}
					</div>

					<div
						className="navbar__item"
						onMouseEnter={() => handleItemEnter('capacidades')}
						onMouseLeave={handleItemLeave}
					>
						<button
							type="button"
							className={`navbar__trigger ${activeMenu === 'capacidades' ? 'is-active' : ''}`}
							aria-expanded={activeMenu === 'capacidades'}
							onClick={() => handleMenuToggle('capacidades')}
						>
							Capacidades
						</button>
						{activeMenu === 'capacidades' && (
							<DropdownGrid items={capacidadesItems} onNavigate={handleNavigate} />
						)}
					</div>

					<div
						className="navbar__item"
						onMouseEnter={() => handleItemEnter('productos')}
						onMouseLeave={handleItemLeave}
					>
						<button
							type="button"
							className={`navbar__trigger ${activeMenu === 'productos' ? 'is-active' : ''}`}
							aria-expanded={activeMenu === 'productos'}
							onClick={() => handleMenuToggle('productos')}
						>
							Productos
						</button>
						{activeMenu === 'productos' && (
							<DropdownSimple items={productosItems} onNavigate={handleNavigate} />
						)}
					</div>

					<div
						className="navbar__item"
						onMouseEnter={() => handleItemEnter('casos')}
						onMouseLeave={handleItemLeave}
					>
						<button
							type="button"
							className={`navbar__trigger ${activeMenu === 'casos' ? 'is-active' : ''}`}
							aria-expanded={activeMenu === 'casos'}
							onClick={() => handleMenuToggle('casos')}
						>
							Casos de éxito
						</button>
						{activeMenu === 'casos' && (
							<DropdownSimple items={casosItems} onNavigate={handleNavigate} />
						)}
					</div>

					<div
						className="navbar__item"
						onMouseEnter={() => handleItemEnter('compania')}
						onMouseLeave={handleItemLeave}
					>
						<button
							type="button"
							className={`navbar__trigger ${activeMenu === 'compania' ? 'is-active' : ''}`}
							aria-expanded={activeMenu === 'compania'}
							onClick={() => handleMenuToggle('compania')}
						>
							Compañía
						</button>
						{activeMenu === 'compania' && (
							<DropdownSimple items={companiaItems} onNavigate={handleNavigate} />
						)}
					</div>

					<a href={ROUTES.contacto} className="navbar__cta" onClick={handleNavigate}>
						Contáctanos
					</a>
				</nav>

				<div className="navbar__actions">
					<button
						type="button"
						onClick={toggleTheme}
						className={`navbar__theme-btn theme-${currentTheme}`}
						aria-label="Cambiar tema"
					>
						<Brush colorPrimary={getIconColor(currentTheme)} className="navbar__theme-icon" />
					</button>

					<button
						type="button"
						className={`navbar__hamburger ${isMobileOpen ? 'is-open' : ''}`}
						aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
						aria-expanded={isMobileOpen}
						onClick={handleMobileToggle}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>

			<div className={`navbar__mobile ${isMobileOpen ? 'is-open' : ''}`} aria-hidden={!isMobileOpen}>
				<nav className="navbar__mobile-nav" aria-label="Navegación móvil">
					{(
						[
							{ id: 'soluciones' as const, label: 'Soluciones', content: <MegaMenuSoluciones onNavigate={handleNavigate} /> },
							{ id: 'capacidades' as const, label: 'Capacidades', content: <DropdownGrid items={capacidadesItems} onNavigate={handleNavigate} /> },
							{ id: 'productos' as const, label: 'Productos', content: <DropdownSimple items={productosItems} onNavigate={handleNavigate} /> },
							{ id: 'casos' as const, label: 'Casos de éxito', content: <DropdownSimple items={casosItems} onNavigate={handleNavigate} /> },
							{ id: 'compania' as const, label: 'Compañía', content: <DropdownSimple items={companiaItems} onNavigate={handleNavigate} /> },
						]
					).map((section) => (
						<div key={section.id} className="navbar__mobile-section">
							<button
								type="button"
								className={`navbar__mobile-trigger ${mobileExpanded === section.id ? 'is-expanded' : ''}`}
								aria-expanded={mobileExpanded === section.id}
								onClick={() => handleMobileSectionToggle(section.id)}
							>
								{section.label}
							</button>
							{mobileExpanded === section.id && (
								<div className="navbar__mobile-panel">{section.content}</div>
							)}
						</div>
					))}
					<a href={ROUTES.contacto} className="navbar__mobile-cta" onClick={handleNavigate}>
						Contáctanos
					</a>
				</nav>
			</div>
		</header>
	);
};
