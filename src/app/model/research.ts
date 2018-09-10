import { Action } from "./action";
import { BugTypes } from "./bugsTypes";
import { FullUnit } from "./full-unit";
import { IUnlocable } from "./iunlocable";
import { Price } from "./price";
import { STRINGS } from "./strings";
import { Researches } from "./units/researches";

export class Research extends Action implements IUnlocable {
  unlocked = false;
  toUnlock = new Array<IUnlocable>();
  maxAutoBuyLevel = 10;
  bugType = BugTypes.ANT;

  constructor(
    id: string,
    public researches: Researches,
    public unlimited = false
  ) {
    super(id, "", "");
    this.name = "";
    this.description = "";
    if (id in STRINGS.researches) {
      this.name = STRINGS.researches[id][0];
      this.description = STRINGS.researches[id][1];
    }
    if (!this.unlimited) {
      this.limit = new Decimal(1);
      this.isLimited = true;
    }
    this.userNum = 1;
    this.researches.researches.push(this);
  }
  genPrice(price: Decimal, science: FullUnit, growRate = 1) {
    this.prices = [new Price(science, price, 1)];
  }
  buy(toBuy = new Decimal(1)): boolean {
    if (super.buy(toBuy)) {
      if (this.toUnlock) {
        this.toUnlock.filter(i => !i.unlocked).forEach(u => u.unlock());
      }
      this.researches.reloadLists();
      return true;
    } else {
      return false;
    }
  }
  unlock() {
    if (
      !this.unlocked &&
      (this.bugType === BugTypes.ANT ||
        this.researches.game.currentWorld.additionalBugs.includes(this.bugType))
    ) {
      this.unlocked = true;
      this.reload();
      return true;
    } else {
      return false;
    }
  }
  reset() {
    super.reset();
    this.unlocked = false;
  }

  //#region Save and Load
  getSave(): any {
    const save = super.getSave();
    if (this.unlocked) save.u = this.unlocked;
    if (this.maxAutoBuyLevel !== 10) save.mabl = this.maxAutoBuyLevel;
    return save;
  }
  restore(data: any): boolean {
    if (super.restore(data)) {
      this.unlocked = !!data.u;
      if ("mabl" in data) this.maxAutoBuyLevel = data.mabl;
      return true;
    } else {
      return false;
    }
  }
  //#endregion
}
