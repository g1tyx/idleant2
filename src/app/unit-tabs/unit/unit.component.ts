import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from "@angular/core";
import { MainService } from "../../main.service";
import { Action } from "../../model/action";
import { FullUnit } from "../../model/full-unit";
import { Helper } from "../../model/helper";
import { Malus } from "../../model/malus";
import { Production } from "../../model/production";
import { ProductionSorter, TotalProductionSorter } from "../../model/utility";

@Component({
  selector: "app-unit",
  templateUrl: "./unit.component.html",
  styleUrls: ["./unit.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  unit: FullUnit;

  paramsSub: any;
  sub: any;
  malus: Malus;
  helper: Helper;
  prodSorter = new ProductionSorter();
  totalProdSorter = new TotalProductionSorter();

  activeProduct = new Array<Production>();
  activeProducer = new Array<Production>();

  autoBuyModal = false;
  madeChart = false;

  constructor(public ms: MainService, private cd: ChangeDetectorRef) {
    this.ms.lastTab = 0;
  }

  ngOnInit() {
    // this.paramsSub = this.route.params.subscribe(this.getUnit.bind(this));
    this.sub = this.ms.updateEmitter.subscribe(() => this.cd.markForCheck());
  }
  ngOnDestroy() {
    // this.paramsSub.unsubscribe();
    this.sub.unsubscribe();
  }
  ngOnChanges() {
    this.getUnit();
  }
  getUnit() {
    if (this.unit instanceof FullUnit) {
      this.unit.isNew = false;
      this.malus = this.unit instanceof Malus ? this.unit : null;
      this.helper = this.unit instanceof Helper ? this.unit : null;

      this.activeProduct = this.unit.produces.filter(p => p.product.unlocked);
      this.activeProducer = this.unit.producedBy.filter(
        p => p.producer.unlocked
      );
      if (this.unit.buyAction) this.unit.buyAction.reloadUserPrices();
      if (this.unit.teamAction && this.ms.game.researches.team2.done) {
        this.unit.teamAction.reloadUserPrices();
      }
      if (this.unit.twinAction && this.ms.game.researches.twin.done) {
        this.unit.twinAction.reloadUserPrices();
      }
    }
    this.madeChart = this.ms.game.materials.list.includes(this.unit);
    this.cd.markForCheck();
  }
  getActId(action: Action) {
    return action.id + this.unit.id;
  }
  openAutoBuyModal() {
    this.autoBuyModal = true;
  }
}
