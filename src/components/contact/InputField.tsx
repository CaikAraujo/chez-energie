import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    isTextArea?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ label, isTextArea, className, ...props }) => {
    const baseClasses = "peer w-full border-b-2 border-slate-200 bg-transparent py-3 text-slate-900 placeholder-transparent focus:border-brand-primary focus:outline-none transition-colors";

    return (
        <div className="relative mt-2">
            {isTextArea ? (
                <textarea
                    {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                    className={`${baseClasses} resize-none min-h-[120px]`}
                    placeholder={label}
                />
            ) : (
                <input
                    {...props}
                    className={baseClasses}
                    placeholder={label}
                />
            )}
            <label className="absolute left-0 -top-3.5 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary font-medium tracking-wide">
                {label}
            </label>
        </div>
    );
};
