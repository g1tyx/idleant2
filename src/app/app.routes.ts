import { Routes } from "@angular/router";
import { AutoBuyTabComponent } from "./auto-buy-tab/auto-buy-tab.component";
import { GroupTabsComponent } from "./group-tabs/group-tabs.component";
import { HomeComponent } from "./home/home.component";
import { LaboratoryComponent } from "./laboratory/laboratory.component";
import { MasteryComponent } from "./mastery/mastery.component";
import { NavComponent } from "./nav/nav.component";
import { OptionsNavComponent } from "./options-nav/options-nav.component";
import { SaveComponent } from "./options-nav/save/save.component";
import { StatsComponent } from "./options-nav/stats/stats.component";
import { UiOptionsComponent } from "./options-nav/ui-options/ui-options.component";
import { PrestigeGroupComponent } from "./prestige-group/prestige-group.component";
import { PrestigeNavComponent } from "./prestige-nav/prestige-nav.component";
import { PrestigeComponent } from "./prestige/prestige.component";
import { UnitTabsComponent } from "./unit-tabs/unit-tabs.component";
import { UnitComponent } from "./unit-tabs/unit/unit.component";
export const APPROUTES: Routes = [
  {
    path: "",
    redirectTo: "nav/unit/f",
    pathMatch: "full"
  },
  {
    path: "nav",
    component: NavComponent,
    children: [
      { path: "unit", component: UnitComponent },
      { path: "unit/:id", component: UnitTabsComponent },
      { path: "group/:id", component: GroupTabsComponent }
    ]
  },
  {
    path: "pre",
    component: PrestigeNavComponent,
    children: [{ path: ":id", component: PrestigeGroupComponent }]
  },
  {
    path: "lab",
    component: LaboratoryComponent
  },
  {
    path: "travel",
    component: PrestigeComponent
  },
  {
    path: "opt",
    component: OptionsNavComponent,
    children: [
      { path: "save", component: SaveComponent },
      { path: "ui", component: UiOptionsComponent },
      { path: "stats", component: StatsComponent }
    ]
  },
  {
    path: "mast",
    component: MasteryComponent
  },
  {
    path: "auto",
    component: AutoBuyTabComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];
