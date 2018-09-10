import { EventEmitter, Injectable } from "@angular/core";
declare let numberformat;

@Injectable({
  providedIn: "root"
})
export class OptionsService {
  usaFormat = true;
  numFormat = "scientific";
  autosaveNotification = true;
  dark = false;
  header = 6;
  materialPosition = 1;
  showI = true;

  formatter: any;
  formatEmitter: EventEmitter<number> = new EventEmitter<number>();
  headerEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    try {
      const n = 1.1;
      const separator = n.toLocaleString().substring(1, 2);
      if (separator === ",") this.usaFormat = false;
    } catch (ex) {}

    this.generateFormatter();
  }
  generateFormatter() {
    this.formatter = new numberformat.Formatter({
      format: this.numFormat,
      flavor: "short"
    });
    if (!!this.formatEmitter) this.formatEmitter.emit(1);
  }

  //#regin Save and Load
  getSave(): any {
    return {
      u: this.usaFormat,
      n: this.numFormat,
      s: this.autosaveNotification,
      d: this.dark,
      h: this.header,
      m: this.materialPosition,
      i: this.showI
    };
  }
  restore(data: any) {
    if ("u" in data) this.usaFormat = data.u;
    if ("n" in data) this.numFormat = data.n;
    if ("s" in data) this.autosaveNotification = data.s;
    if ("d" in data) this.dark = data.d;
    if ("h" in data) this.header = data.h;
    if ("m" in data) this.materialPosition = data.m;
    if ("i" in data) this.showI = data.i;
    this.generateFormatter();
  }
  //#endregion
}
