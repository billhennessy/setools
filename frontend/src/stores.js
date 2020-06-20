import { writable, derived } from 'svelte/store';

export const margin = writable(0.1);
export const expectedLift = writable(0.1);
export const spendBefore = writable(10000000);
export const spendAfter = writable(0);
export const churnBefore = writable(0);
export const churnAfter = writable(0);
export const programCost = writable(0);
export const fundRate = writable(.02);
// export const profitBefore = derived([spendBefore, margin], ([$spendBefore, $margin]) => $spendBefore * $margin);
// export const profitAfter = derived([spendAfter, margin], ([$spendAfter, $margin]) => $spendAfter * $margin);