import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacoesListComponent } from './doacoes-list.component';

describe('DoacoesListComponent', () => {
  let component: DoacoesListComponent;
  let fixture: ComponentFixture<DoacoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoacoesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
