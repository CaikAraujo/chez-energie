import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    isLoading,
    className = '',
    ...props
}) => {
    const baseStyles = "relative overflow-hidden px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl";

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-brand-secondary shadow-lg shadow-brand-primary/20",
        secondary: "bg-brand-secondary text-white hover:bg-brand-primary",
        outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? 'Processando...' : children}
            </span>
        </button>
    );
};
