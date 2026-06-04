import { useEffect, useState } from 'react';

export type PortfolioTheme = 'light-orange' | 'dark' | 'white' | 'gray';

const themes: { id: PortfolioTheme; label: string; swatch: string }[] = [
    { id: 'light-orange', label: 'Claro', swatch: '#d73700' },
    { id: 'dark', label: 'Preto', swatch: '#202020' },
    { id: 'white', label: 'Branco', swatch: '#ffffff' },
    { id: 'gray', label: 'Cinza', swatch: '#d6d8dd' },
];

const storageKey = 'portfolio-theme';

const getInitialTheme = (): PortfolioTheme => {
    if (typeof window === 'undefined') return 'light-orange';

    const savedTheme = window.localStorage.getItem(storageKey) as PortfolioTheme | null;
    if (savedTheme && themes.some((theme) => theme.id === savedTheme)) {
        return savedTheme;
    }

    return 'light-orange';
};

const ThemeSwitcher = ({ compact = false }: { compact?: boolean }) => {
    const [theme, setTheme] = useState<PortfolioTheme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem(storageKey, theme);
    }, [theme]);

    return (
        <div
            className={`grid gap-1 border border-[var(--cv-ink)]/25 bg-[var(--cv-surface)] p-1 ${
                compact ? 'grid-cols-4' : 'grid-cols-2'
            }`}
            aria-label="Selecionar tema"
        >
            {themes.map((item) => {
                const isActive = item.id === theme;

                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => setTheme(item.id)}
                        className={`flex min-h-9 items-center justify-center gap-2 border px-2 text-[0.68rem] font-bold uppercase leading-none transition-colors ${
                            isActive
                                ? 'border-[var(--cv-accent)] bg-[var(--cv-accent)] text-[var(--cv-inverse)]'
                                : 'border-transparent text-[var(--cv-muted)] hover:border-[var(--cv-line)] hover:text-[var(--cv-ink)]'
                        }`}
                        aria-pressed={isActive}
                        title={`Usar tema ${item.label}`}
                    >
                        <span
                            className="h-3 w-3 border border-current"
                            style={{ backgroundColor: item.swatch }}
                            aria-hidden="true"
                        />
                        {!compact && <span>{item.label}</span>}
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeSwitcher;
