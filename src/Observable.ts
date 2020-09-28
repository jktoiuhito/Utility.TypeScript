"use strict";

/**
 * Olio jonka muutoksia voi tarkkailla.
 */
export default abstract class Observable<T> {
    private readonly listeners: Handler<T>[] = [];

    /**
     * Ilmoita muutoksista tarkkailijoille.
     * @param value Muuttunut arvo.
     */
    protected readonly changed = (value: T): void =>
        this.listeners.forEach((l) => l(value));

    /**
     * Rekisteröi funktio jota kutsutaan kun olio muuttuu.
     * @param handler Funktio jota kutsutaan kun olio muuttuu.
     */
    public readonly onChange = (handler: (values: T) => void): void => {
        this.listeners.push(handler);
        return;
    };
}

export type Handler<T> = (values: T) => void;
