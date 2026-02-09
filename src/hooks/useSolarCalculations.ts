import { useMemo } from 'react';

// Constants & Assumptions
const ENERGY_INFLATION = 0.05; // 5% per year
const SYSTEM_POWER_PER_M2 = 0.2; // kWp per m2
const ELECTRICITY_PRICE = 0.35; // CHF per kWh (average)
const PANEL_COST_PER_KWP = 1500; // CHF (approx installed)
const BATTERY_COST = 8000; // CHF (approx for standard home battery)
const SELF_CONSUMPTION_NO_BATTERY = 0.3; // 30%
const SELF_CONSUMPTION_WITH_BATTERY = 0.7; // 70%

export interface SolarCalculations {
    systemSizeKWp: number;
    annualProductionKWh: number;
    initialCost: number;
    totalSavings25y: number;
    paybackYear: number;
    totalCO2SavedTons: number;
    treesPlanted: number;
    data: Array<{
        year: number;
        'Sem Solar': number;
        'Com Solar': number;
    }>;
}

export const useSolarCalculations = (
    monthlyBill: number,
    roofArea: number,
    hasBattery: boolean,
    irradiance: number
): SolarCalculations => {
    return useMemo(() => {
        const systemSizeKWp = roofArea * SYSTEM_POWER_PER_M2;
        const annualProductionKWh = systemSizeKWp * irradiance;

        // Initial Investment
        let initialCost = systemSizeKWp * PANEL_COST_PER_KWP;
        if (hasBattery) {
            initialCost += BATTERY_COST;
        }

        // Annual Savings
        const selfConsumptionRate = hasBattery ? SELF_CONSUMPTION_WITH_BATTERY : SELF_CONSUMPTION_NO_BATTERY;
        const selfConsumedKWh = annualProductionKWh * selfConsumptionRate;
        const exportedKWh = annualProductionKWh - selfConsumedKWh;

        // Financial Projections
        let cumulativeSavings = 0;
        let cumulativeBillNoSolar = 0;
        let dataPoints = [];
        let paybackYear = null;

        let currentBillAnnual = monthlyBill * 12;
        let currentEnergyPrice = ELECTRICITY_PRICE;

        for (let year = 1; year <= 25; year++) {
            cumulativeBillNoSolar += currentBillAnnual;

            const valueOfDirectConsumption = selfConsumedKWh * currentEnergyPrice;
            const valueOfExport = exportedKWh * 0.15;
            const annualSaving = valueOfDirectConsumption + valueOfExport;

            cumulativeSavings += annualSaving;

            const costNoSolar = cumulativeBillNoSolar;
            const costWithSolar = initialCost + (cumulativeBillNoSolar - cumulativeSavings);

            dataPoints.push({
                year: year,
                'Sem Solar': Math.round(costNoSolar),
                'Com Solar': Math.round(costWithSolar),
            });

            if (paybackYear === null && costWithSolar < costNoSolar) {
                paybackYear = year;
            }

            currentBillAnnual *= (1 + ENERGY_INFLATION);
            currentEnergyPrice *= (1 + ENERGY_INFLATION);
        }

        // Environmental Impact (Refined Formulas)
        // kWh * 0.0004 trees/year
        const treesPlanted = Math.round(annualProductionKWh * 0.0004);
        // kWh * 0.0007 tons CO2
        const totalCO2SavedTons = (annualProductionKWh * 0.0007);

        return {
            systemSizeKWp,
            annualProductionKWh,
            initialCost,
            totalSavings25y: cumulativeSavings,
            paybackYear: paybackYear || 25,
            totalCO2SavedTons,
            treesPlanted,
            data: dataPoints,
        };
    }, [monthlyBill, roofArea, hasBattery, irradiance]);
};
