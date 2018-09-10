import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MainService } from "./main.service";

// import { ClarityIcons } from "@clr/icons";
import { ClarityIcons } from "@clr/icons";

import {
  ClrShapeBug,
  ClrShapeClock,
  ClrShapeLightbulb,
  ClrShapeTools,
  ClrShapeWorld
} from "@clr/icons/shapes/essential-shapes";

import { animate, style, transition, trigger } from "@angular/animations";
import { ClrShapeStore } from "@clr/icons/shapes/commerce-shapes";
import {
  ClrShapeAngle,
  ClrShapeAngleDouble,
  ClrShapeCog,
  ClrShapeExclamationTriangle,
  ClrShapeInfoStandard
} from "@clr/icons/shapes/core-shapes";
import { ClrShapePause } from "@clr/icons/shapes/media-shapes";
import { ClrShapeStar } from "@clr/icons/shapes/social-shapes";
import {
  ClrShapeDashboard,
  ClrShapeFloppy,
  ClrShapeInstall,
  ClrShapeUninstall
} from "@clr/icons/shapes/technology-shapes";
import { ClrShapePaintRoller } from "@clr/icons/shapes/text-edit-shapes";
import { OptionsService } from "./options.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(":leave", [animate(500, style({ opacity: 0 }))])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  show = false;
  constructor(public ms: MainService, public os: OptionsService) {
    ClarityIcons.add({
      bug: ClrShapeBug,
      lightbulb: ClrShapeLightbulb,
      world: ClrShapeWorld,
      clock: ClrShapeClock,
      cog: ClrShapeCog,
      store: ClrShapeStore,
      "exclamation-triangle": ClrShapeExclamationTriangle,
      "angle-double": ClrShapeAngleDouble,
      angle: ClrShapeAngle,
      pause: ClrShapePause,
      infoStandard: ClrShapeInfoStandard,
      floppy: ClrShapeFloppy,
      "paint-roller": ClrShapePaintRoller,
      install: ClrShapeInstall,
      uninstall: ClrShapeUninstall,
      tools: ClrShapeTools,
      star: ClrShapeStar,
      dashboard: ClrShapeDashboard
    });
  }
  ngOnInit(): void {
    //
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.ms.start();
    }, 1);
  }
}
