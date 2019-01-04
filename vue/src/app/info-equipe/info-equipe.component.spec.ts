import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEquipeComponent } from './info-equipe.component';

describe('InfoEquipeComponent', () => {
  let component: InfoEquipeComponent;
  let fixture: ComponentFixture<InfoEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
