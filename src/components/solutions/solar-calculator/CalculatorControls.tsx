import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Search, Power, Battery } from 'lucide-react';
import { SWISS_CITIES } from '../../../data/swissCities';

interface CalculatorControlsProps {
    address: string;
    onAddressChange: (value: string) => void;
    onAddressSearch: (e: React.FormEvent) => void;
    onCitySelect: (city: typeof SWISS_CITIES[0]) => void;
    monthlyBill: number;
    onMonthlyBillChange: (value: number) => void;
    roofArea: number;
    onRoofAreaChange: (value: number) => void;
    hasBattery: boolean;
    onBatteryToggle: () => void;
    onBlackoutSimulate: () => void;
}

export const CalculatorControls: React.FC<CalculatorControlsProps> = ({
    address,
    onAddressChange,
    onAddressSearch,
    onCitySelect,
    monthlyBill,
    onMonthlyBillChange,
    roofArea,
    onRoofAreaChange,
    hasBattery,
    onBatteryToggle,
    onBlackoutSimulate,
}) => {
    const [suggestions, setSuggestions] = useState<typeof SWISS_CITIES>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const autocompleteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onAddressChange(value);

        if (value.length > 0) {
            const filtered = SWISS_CITIES.filter(city =>
                city.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const selectCity = (city: typeof SWISS_CITIES[0]) => {
        onCitySelect(city);
        setShowSuggestions(false);
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    {/* Visible Blackout Toggle */}
                    <button
                        onClick={onBlackoutSimulate}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/20 transition-all ml-auto"
                    >
                        <Power className="w-3 h-3" />
                        Simular Blackout
                    </button>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                    Calcule o seu <span className="text-emerald-400">Retorno Solar</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Descubra quanto pode economizar em 25 anos otimizando a sua área de telhado.
                </p>
            </div>

            {/* Controls Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-8 shadow-xl">
                {/* Location Input */}
                <div className="space-y-2 relative" ref={autocompleteRef}>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Localização</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Introduza a sua localidade..."
                            value={address}
                            onChange={handleInputChange}
                            onFocus={() => address.length > 0 && setShowSuggestions(true)}
                            className="w-full pl-10 pr-4 py-3.5 bg-slate-950 border border-slate-700/50 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm"
                        />
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                        <button type="submit" onClick={onAddressSearch} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-800 text-slate-400 rounded-lg hover:text-white transition-colors">
                            <Search className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    {/* Suggestions Dropdown */}
                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden max-h-48 overflow-y-auto">
                            {suggestions.map((city, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => selectCity(city)}
                                    className="px-4 py-3 hover:bg-slate-900 cursor-pointer text-slate-400 hover:text-emerald-400 flex items-center justify-between transition-colors text-sm border-b border-slate-900 last:border-0"
                                >
                                    <span>{city.name}</span>
                                    <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded-full">{city.irradiance} kWh</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Monthly Bill Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Conta Mensal</label>
                        <div className="text-xl font-bold text-white tabular-nums">{monthlyBill} <span className="text-xs text-slate-500 font-normal">CHF</span></div>
                    </div>
                    <input
                        type="range"
                        min="50" max="1000" step="10"
                        value={monthlyBill}
                        onChange={(e) => onMonthlyBillChange(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 hover:accent-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 touch-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600 font-medium uppercase tracking-wider">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                </div>

                {/* Roof Area Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Área de Telhado</label>
                        <div className="text-xl font-bold text-white tabular-nums">{roofArea} <span className="text-xs text-slate-500 font-normal">m²</span></div>
                    </div>
                    <input
                        type="range"
                        min="20" max="200" step="5"
                        value={roofArea}
                        onChange={(e) => onRoofAreaChange(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 hover:accent-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 touch-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600 font-medium uppercase tracking-wider">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                </div>

                {/* Battery Toggle */}
                <div
                    onClick={onBatteryToggle}
                    className={`group relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${hasBattery ? 'bg-indigo-950/30 border-indigo-500/50' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
                >
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl transition-colors ${hasBattery ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                                <Battery className="w-5 h-5" />
                            </div>
                            <div>
                                <div className={`font-bold text-sm transition-colors ${hasBattery ? 'text-white' : 'text-slate-300'}`}>Incluir Bateria</div>
                                <div className="text-xs text-slate-500">Armazenamento inteligente</div>
                            </div>
                        </div>
                        <div className={`w-11 h-6 rounded-full transition-colors relative ${hasBattery ? 'bg-indigo-500' : 'bg-slate-800'}`}>
                            <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${hasBattery ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
