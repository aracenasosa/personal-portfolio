import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Validates and normalizes the maxProjectsOnHome value.
 * Returns 4 as default for invalid, null, or undefined values.
 * Rounds down decimal values to integers.
 * 
 * @param value - The maxProjectsOnHome value to validate
 * @returns A valid integer >= 1, or 4 as default
 */
export function getValidMaxProjects(value: number | undefined | null): number {
    // Si no está definido, usar default
    if (value === undefined || value === null) {
        return 4;
    }
    
    // Si no es un número válido, usar default
    if (typeof value !== 'number' || isNaN(value)) {
        console.warn(`Invalid maxProjectsOnHome value: ${value}. Using default: 4`);
        return 4;
    }
    
    // Si es menor que 1, usar default
    if (value < 1) {
        console.warn(`maxProjectsOnHome must be >= 1. Received: ${value}. Using default: 4`);
        return 4;
    }
    
    // Redondear a entero si es necesario
    if (!Number.isInteger(value)) {
        console.warn(`maxProjectsOnHome should be integer. Received: ${value}. Rounding down.`);
        return Math.floor(value);
    }
    
    return value;
}
