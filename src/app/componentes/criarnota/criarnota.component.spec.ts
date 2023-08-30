import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarnotaComponent } from './criarnota.component';

describe('CriarnotaComponent', () => {
  let component: CriarnotaComponent;
  let fixture: ComponentFixture<CriarnotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarnotaComponent]
    });
    fixture = TestBed.createComponent(CriarnotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
