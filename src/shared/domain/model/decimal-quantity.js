import Decimal from 'decimal.js';

export const MAX_QUANTITY_DECIMALS = 32;

// Enough significant digits for large stocks with 32 decimals (no rounding in sums or subtractions).
Decimal.set({ precision: 80, rounding: Decimal.ROUND_HALF_UP });

const QUANTITY_PATTERN = new RegExp(`^\\d+([.,]\\d{1,${MAX_QUANTITY_DECIMALS}})?$`);

/**
 * Exact decimal arithmetic for stock quantities (up to 32 decimals).
 *
 * @remarks
 * JavaScript numbers keep about 15 significant digits, so quantities are
 * handled with decimal.js. The API receives a JSON number when it can hold the
 * value exactly and a string otherwise, so no decimal is lost.
 */
export const DecimalQuantity = {

    of(value) {
        if (value instanceof Decimal) return value;
        if (value === null || value === undefined || value === '') return new Decimal(0);
        try {
            return new Decimal(String(value).trim().replace(',', '.'));
        } catch {
            return new Decimal(0);
        }
    },

    isValidText(text) {
        return QUANTITY_PATTERN.test(String(text ?? '').trim());
    },

    toApi(value) {
        const decimal = this.of(value);
        const asNumber = decimal.toNumber();
        return new Decimal(asNumber).equals(decimal) ? asNumber : decimal.toFixed();
    },

    toText(value) {
        return this.of(value).toFixed();
    },

    /**
     * Text for the user: separators of the language (the same ones used for
     * money) and every decimal the quantity has (up to 32).
     *
     * @param {number|string|Decimal} value
     * @param {string} locale 'en' or 'es'
     * @returns {string}
     */
    format(value, locale = 'en') {
        const intlLocale = locale === 'es' ? 'es-PE' : 'en-US';
        const formatter = new Intl.NumberFormat(intlLocale);
        const [integer, fraction] = this.of(value).toFixed().split('.');
        const sign = integer.startsWith('-') ? '-' : '';
        const grouped = formatter.format(BigInt(integer.replace('-', '')));
        // Same separators as the money amounts of the app (es-PE and en-US use ".").
        const separator = formatter.formatToParts(1.5).find((part) => part.type === 'decimal')?.value ?? '.';
        return fraction ? `${sign}${grouped}${separator}${fraction}` : `${sign}${grouped}`;
    },
};