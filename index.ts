export interface ConversionResult {
    value: string;
    fromBase: number;
    toBase: number;
}

export interface ConversionError {
    message: string;
    code: number;
}