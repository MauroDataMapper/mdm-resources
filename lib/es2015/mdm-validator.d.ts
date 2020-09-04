export declare class MdmValidator {
    static index(obj: any, i: any): any;
    static getProperty(obj: any, str: string): any;
    static capitalize(str: string): string;
    static validateEmail(email: any): boolean;
    static isDate(date: any): boolean;
    static isEmpty(str: string): boolean;
    static validateMultiplicities(min: any, max: any): "Invalid Min Multiplicity" | "Invalid Max Multiplicity" | "Min Multiplicity should have a value" | "Max Multiplicity should have a value" | "Min Multiplicity should be Equal or Less than Max Multiplicity" | "Min and Max Multiplicities can not both be 0" | "Min and Max Multiplicities can not both be unbound";
    static guid(): string;
}
