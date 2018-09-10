import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from "@angular/core";
import { MainService } from "../main.service";
import { BaseUnit } from "../model/baseUnit";
import { FullUnit } from "../model/full-unit";
import { Malus } from "../model/malus";
import { UnitGroup } from "../model/unit-group";
declare let preventScroll;

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class.content-container]": "true"
  }
})
export class NavComponent implements OnInit, AfterViewInit {
  sub: any;

  constructor(public ms: MainService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (typeof preventScroll === typeof Function) preventScroll();
  }
  ngOnInit() {
    this.sub = this.ms.updateEmitter.subscribe(m => this.cd.markForCheck());
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getListId(index, list: UnitGroup) {
    return list.name;
  }
  getUnitId(index, base: BaseUnit) {
    return base.id;
  }
  isMalus(unit: FullUnit): boolean {
    return unit instanceof Malus;
  }
}
