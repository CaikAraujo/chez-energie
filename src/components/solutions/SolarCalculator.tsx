import React, { useState, useEffect } from 'react';
import { SWISS_CITIES } from '../../data/swissCities';
import { useSolarCalculations } from '../../hooks/useSolarCalculations';
import { BlackoutSimulation } from './solar-calculator/BlackoutSimulation';
import { CalculatorControls } from './solar-calculator/CalculatorControls';
import { CalculatorResults } from './solar-calculator/CalculatorResults';

const SolarCalculator: React.FC = () => {
    // Inputs
    const [monthlyBill, setMonthlyBill] = useState(250); // CHF
    const [roofArea, setRoofArea] = useState(40); // m2
    const [hasBattery, setHasBattery] = useState(false);

    // Advanced Features State
    const [address, setAddress] = useState('');
    const [locationName, setLocationName] = useState('Suíça (Média)');
    const [irradiance, setIrradiance] = useState(1100); // kWh/kWp/year
    const [isBlackoutMode, setIsBlackoutMode] = useState(false);
    const [batteryLevel, setBatteryLevel] = useState(100);

    // Effects for Blackout Mode Simulation
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isBlackoutMode) {
            // Drain battery simulation
            interval = setInterval(() => {
                setBatteryLevel(prev => Math.max(0, prev - 1));
            }, 2000);
        } else {
            setBatteryLevel(100);
        }
        return () => clearInterval(interval);
    }, [isBlackoutMode]);

    // Geolocation Simulation
    const handleAddressSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!address) return;

        // Fallback if not selected from list but typed manually
        const city = SWISS_CITIES.find(c => c.name.toLowerCase() === address.toLowerCase());
        if (city) {
            selectCity(city);
        } else {
            // Generic fallback
            const cityName = address.split(',')[0].trim();
            setLocationName(cityName);
            const simulatedIrradiance = 1000 + (cityName.length * 50) % 400;
            setIrradiance(simulatedIrradiance);
        }
    };

    const selectCity = (city: typeof SWISS_CITIES[0]) => {
        setAddress(city.name);
        setLocationName(city.name);
        setIrradiance(city.irradiance);
    };

    const handleBlackoutSimulate = () => {
        setIsBlackoutMode(true);
        if (!hasBattery) setHasBattery(true);
    };

    // Use custom hook for calculations
    const calculations = useSolarCalculations(monthlyBill, roofArea, hasBattery, irradiance);

    // Dynamic Styles
    const containerClass = isBlackoutMode
        ? "bg-black text-red-50 border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
        : "bg-slate-950 text-slate-50 border-slate-800";

    return (
        <div className={`py-12 md:py-24 border-y transition-all duration-700 ${containerClass}`}>
            <div className="max-w-7xl mx-auto px-6">
                {isBlackoutMode ? (
                    <BlackoutSimulation
                        batteryLevel={batteryLevel}
                        onRestore={() => setIsBlackoutMode(false)}
                    />
                ) : (
                    <div className="grid lg:grid-cols-3 gap-12 animate-in fade-in duration-700">
                        <CalculatorControls
                            address={address}
                            onAddressChange={setAddress}
                            onAddressSearch={handleAddressSearch}
                            onCitySelect={selectCity}
                            monthlyBill={monthlyBill}
                            onMonthlyBillChange={setMonthlyBill}
                            roofArea={roofArea}
                            onRoofAreaChange={setRoofArea}
                            hasBattery={hasBattery}
                            onBatteryToggle={() => setHasBattery(!hasBattery)}
                            onBlackoutSimulate={handleBlackoutSimulate}
                        />
                        <CalculatorResults calculations={calculations} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SolarCalculator;
