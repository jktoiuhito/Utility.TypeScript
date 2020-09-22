"use strict";

/**
 * Virhe joka heitetään kun funktiota jota ei ole toteutettu kutsutaan.
 */
export class NotImplementedError extends Error {
    /**
     * Luo virhe joka heitetään kun funktiota jota ei ole toteutettu
     * kutsutaan.
     * @param functionName Kutsutun funktion nimi.
     */
    constructor(functionName: string) {
        super(`The method '${functionName}' is not yet implemented`);
    }
}

/**
 * Virhe joka heitetään kun funktion argumentti on virheellinen.
 */
export class ArgumentError extends Error {
    /**
     * Luo virhe joka heitetään kun funktion argumentti on virheellinen.
     * @param reason Virheellisyyden syy.
     * @param paramName Virheellisen parametrin nimi.
     */
    constructor(reason: string, paramName: string) {
        super(reason + `\nParameter '${paramName}'`);
    }
}

/**
 * Virhe joka heitetään kun kokoelma joka ei saa olla tyhjä on tyhjä.
 */
export class EmptyCollectionError extends TypeError {
    /**
     * Luo virhe joka heitetään kun kokoelma joka ei saa olla tyhjä on tyhjä.
     * @param name Kokoelman parametrin/muuttujan nimi.
     */
    constructor(name: string) {
        super(`'${name}' cannot be empty`);
    }
}

/**
 * Virhe joka heitetään kun string koostuu pelkästä whitespacesta.
 */
export class WhitespaceStringError extends TypeError {
    /**
     * Luo virhe joka heitetään kun string koostuu pelkästä whitespacesta.
     * @param name Stringin parametrin/muuttujan nimi.
     */
    constructor(name: string) {
        super(`'${name}' cannot only consist of whitespace`);
    }
}

export class IndexOutOfRangeError extends Error {
    constructor() {
        super("Index must be non-negative and less than the size of the array");
    }
}

/**
 * Virhe joka heitetään kun (sisäänrakennettu) funktio palauttaa null tai
 * undefined vaikka sen ei pitäisi tehdä sitä.
 */
export class NullUndefinedReturnValueError extends TypeError {
    /**
     * Luo virhe joka heitetään kun (sisäänrakennettu) funktio palauttaa null
     * tai undefined vaikka sen ei pitäisi tehdä sitä.
     * @param functionName Null tai undefined palauttaneen funktion nimi.
     */
    constructor(functionName: string) {
        super(`Function '${functionName}' returned null or undefined`);
    }
}
