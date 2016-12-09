// Type definitions for Humanize Plus v1.8.2
// Project: https://github.com/HubSpot/humanize
// Definitions by: Cody Mullins https://github.com/codymullins

export as namespace Humanize;

/**
 * Formats a number to a human-readable string. Localize by overriding the precision, thousand and decimal arguments.
 * 
 * @export
 * @param {number} a
 * @param {number} precision
 * @returns {string}
 */
export function formatNumber(a: number, precision: number): string;

/**
 * Converts an integer to a string containing commas every three digits.
 * 
 * @export
 * @param {number} a
 * @returns {string}
 */
export function intComma(a: number): string;

/**
 * Converts an integer into its most compact representation. Decimal precision is ignored for all integers, n, such that abs(n) < 1000.
 * 
 * @export
 * @param {number} a
 * @param {number} precision
 * @returns {string}
 */
export function compactInteger(a: number, precision: number): string;

/**
 * Bounds a value from above. Modified values have customizable ending strings ('+' by default)
 * 
 * @export
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
export function boundedNumber(a: number, b:number): string;

/**
 * Converts an integer to its ordinal as a string.
 * 
 * @export
 * @param {number} a
 * @returns {string}
 */
export function ordinal(a: number): string;

/**
 * Interprets numbers as occurences. Also accepts an optional array/map of overrides.
 * 
 * @export
 * @param {number} a
 * @returns {string}
 */
export function times(a:number): string;


/**
 * Interprets numbers as occurences. Also accepts an optional array/map of overrides.
 * 
 * @export
 * @param {number} a
 * @param {{}} overrides
 * @returns {string}
 */
export function times(a:number, overrides: {}): string;

/**
 * Matches a pace (value and interval) with a logical time frame. Very useful for slow paces.
 * 
 * @export
 * @param {number} value
 * @param {number} interval
 * @returns {string}
 */
export function pace(value:number, interval:number): string;

/**
 * Matches a pace (value and interval) with a logical time frame. Very useful for slow paces.
 * 
 * @export
 * @param {number} value
 * @param {number} interval
 * @param {string} type
 * @returns {string}
 */
export function pace(value:number, interval:number, type: string): string;

/**
 * Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).
 * 
 * @export
 * @param {number} kilobytes
 * @returns {string}
 */
export function fileSize(kilobytes: number): string;

/**
 * Returns the plural version of a given word if the value is not 1. The default suffix is 's'.
 * 
 * @export
 * @param {number} a
 * @param {string} word
 * @returns {string}
 */
export function pluralize(a:number, word: string): string;

/**
 * Returns the plural version of a given word if the value is not 1. The default suffix is 's'.
 * 
 * @export
 * @param {number} a
 * @param {string} word
 * @param {string} pluralWord
 * @returns {string}
 */
export function pluralize(a:number, word: string, pluralWord: string): string;

/**
 * Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…").
 * 
 * @export
 * @param {string} a
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(a: string): string;

/**
 * Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…").
 * 
 * @export
 * @param {string} a
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(a: string, maxLength: number): string;

/**
 * Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…").
 * 
 * @export
 * @param {string} a
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(a: string, maxLength: number, ellipsis: string): string;

/**
 * Truncates a string after a certain number of words.
 * 
 * @export
 * @param {string} a
 * @param {number} maxWords
 * @returns {string}
 */
export function truncateWords(a: string, maxWords: number): string;

/**
 * Capitalizes the first letter in a string, optionally downcasing the tail.
 * 
 * @export
 * @param {string} a
 * @returns {string}
 */
export function capitalize(a: string): string;

/**
 * Capitalizes the first letter in a string, optionally downcasing the tail.
 * 
 * @export
 * @param {string} a
 * @param {boolean} downcaseTail
 * @returns {string}
 */
export function capitalize(a: string, downcaseTail: boolean): string;

/**
 * Captializes the first letter of every word in a string.
 * 
 * @export
 * @param {string} a
 * @returns {string}
 */
export function capitalizeAll(a: string): string;

/**
 * Intelligently capitalizes eligible words in a string and normalizes internal whitespace.
 * 
 * @export
 * @param {string} a
 * @returns {string}
 */
export function titleCase(a: string): string;

/**
 * Converts a list of items to a human readable string with an optional limit.
 * 
 * @export
 * @param {string[]} items
 * @returns {string}
 */
export function oxford(items: string[]): string;

/**
 * Converts a list of items to a human readable string with an optional limit.
 * 
 * @export
 * @param {string[]} items
 * @param {number} limit
 * @returns {string}
 */
export function oxford(items: string[], limit: number): string;

/**
 * Converts a list of items to a human readable string with an optional limit.
 * 
 * @export
 * @param {string[]} items
 * @param {number} limit
 * @param {string} otherText
 * @returns {string}
 */
export function oxford(items: string[], limit: number, otherText: string): string;

/**
 * Describes how many times an item appears in a list
 * 
 * @export
 * @param {string[]} items
 * @param {string} description
 * @returns {string}
 */
export function frequency(items: string[], description: string): string; 

/**
 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === "0.61").
 * 
 * @export
 * @param {number} a
 * @param {number} precision
 * @returns {string}
 */
export function toFixed(a:number, precision:number): string;

/**
 * Ensures precision value is a positive integer.
 * 
 * @export
 * @param {number} a
 * @returns {string}
 */
export function normalizePrecision(a:number): string;