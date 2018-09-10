import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ClarityModule } from "@clr/angular";
import { getGame } from "../../app.component.spec";
import { FormatPipe } from "../../format.pipe";
import { PriceLineComponent } from "./price-line.component";

describe("PriceLineComponent", () => {
  let component: PriceLineComponent;
  let fixture: ComponentFixture<PriceLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ClarityModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [PriceLineComponent, FormatPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLineComponent);
    component = fixture.componentInstance;
    component.unit = getGame().materials.food;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
