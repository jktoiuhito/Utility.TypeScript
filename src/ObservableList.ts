"use strict";

import { ArgumentOutOfRangeError } from "./Errors";
import Observable from "./Observable";

/**
 * List which notifies its observers when it changes.
 */
export default class ObservableList<T extends Observable<T>> extends Observable<
   ObservableList<T>
> {
   private readonly _values: T[];

   /**
    * Luo lista jonka muutoksia voi tarkkailla.
    * @param array Taulukko jonka pohjalta lista luodaan.
    */
   constructor(array: T[] | null = null) {
      super();
      if (array) {
         array.forEach((v) => v.onChange(() => this.changed(this)));
      }
      this._values = array ?? [];
   }

   // puhtaat metodit

   /**
    * Listan pituus.
    */
   public get length(): number {
      return this._values.length;
   }

   /**
    * Ota listasta arvo.
    * @param index Arvon indeksi.
    * @throws {IndexOutOfRangeError}
    */
   public readonly getItem = (index: number): T => {
      if (index <= 0 || this._values.length <= index) {
         throw new ArgumentOutOfRangeError();
      }
      return this._values[index];
   };

   // (mahdolliset) mutaattorit

   /*
    * C# on siitä kiva että IEnumerable<T> heittää poikkeuksen jos
    * kokoelmaa muokataan enumeroinnin aikana. JavaScriptissä tällaista
    * turvaa ei ole, ja millä tahansa arrayn metodeista joille syötetään
    * funktio saanee muokattua käsiteltävää kokoelmaa tai sen arvoja.
    * Tämä on ongelma jos kaikista muutoksista pitää seurata changed() kutsu,
    * sillä on mahdotonta tietää etukäteen mikä funktio on mutaattori, mikä ei.
    * Ratkaisuja:
    *  1. Alla olevaa arrayta ei paljasteta funktiolle.
    *      -> Funktio ei voi tehdä muutoksia kokoelmaan muuten kuin
    *         paljastetuilla metodeilla, jotka kutsuvat changed().
    *  2. Kaikkien arrayn arvojen on oltava Observable ja niiden muutoksia
    *     tarkkaillaan.
    *      -> Jos funktio muokkaa yksittäisiä arvoja, niiden muutoksista
    *         saadaan tieto.
    */

   public readonly every = (
      predicate: (value: T, index: number) => boolean
   ): boolean => {
      return this._values.every(predicate);
   };

   /**
    * Palauta UUSI lista jossa on vain suodatetut arvot.
    * @param predicate Suodatukseen käytetty funktio.
    */
   public readonly filter = (
      predicate: (value: T, index: number) => boolean
   ): ObservableList<T> => {
      return new ObservableList<T>(this._values.filter(predicate));
   };

   /**
    * Palauta ensimmäinen arvo joka läpäisee vertailufunktion.
    * @param predicate Vertailufunktio joka arvon on läpäistävä.
    */
   public readonly find = (
      predicate: (value: T, index: number) => boolean
   ): T | undefined => {
      return this._values.find(predicate);
   };

   public readonly findIndex = (
      predicate: (value: T, index: number) => unknown
   ): number => {
      return this._values.findIndex(predicate);
   };

   /**
    * Suorita funktio jokaisella listan arvolla.
    * @param callbackfn Funktio joka suoritetaan jokaisella arvolle.
    */
   public readonly forEach = (
      callbackfn: (value: T, index: number) => void
   ): ObservableList<T> => {
      this._values.forEach(callbackfn);
      return this;
   };

   public readonly map = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callbackfn: (value: T, index: number) => any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   ): any[] => {
      return this._values.map(callbackfn);
   };

   /**
    * Lisää listaan arvo.
    * @param value Lisättävä arvo.
    */
   public readonly push = (value: T): ObservableList<T> => {
      this._values.push(value);
      value.onChange(() => this.changed(this));
      this.changed(this);
      return this;
   };

   public readonly reverse = (): ObservableList<T> => {
      this._values.reverse();
      this.changed(this);
      return this;
   };

   /**
    * Lajittele NYKYINEN lista annetun lajittelufunktion avulla.
    * @param compareFn Lajitteluun käytetty funktio.
    */
   public readonly sort = (
      compareFn: (a: T, b: T) => number
   ): ObservableList<T> => {
      // TODO: entä jos lajittelu ei muutakkaan listaa?

      this._values.sort(compareFn);
      this.changed(this);
      return this;
   };
}
