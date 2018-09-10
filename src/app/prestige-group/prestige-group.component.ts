import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../main.service";
import { Prestige } from "../model/prestige/prestige";
import { PrestigeGroup } from "../model/prestige/prestige-group";
declare let preventScroll;

@Component({
  selector: "app-prestige-group",
  templateUrl: "./prestige-group.component.html",
  styleUrls: ["./prestige-group.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class.content-area]": "true"
  }
})
export class PrestigeGroupComponent
  implements OnInit, OnDestroy, AfterViewInit {
  paramsSub: any;
  prestigeGroup: PrestigeGroup;

  constructor(public ms: MainService, private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    if (typeof preventScroll === typeof Function) preventScroll();
  }
  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(this.getGroup.bind(this));
  }
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  getGroup(params: any) {
    let id = params.id;
    if (id === undefined) id = "fol";
    const grp = this.ms.game.allPrestige.prestigeGroups.find(g => g.id === id);
    this.prestigeGroup = !!grp
      ? grp
      : this.ms.game.allPrestige.prestigeGroups[0];
  }

  getPretId(index: number, prestige: Prestige) {
    return index + prestige.id;
  }
}
