import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productos } from './productos';
import { provideHttpClient } from '@angular/common/http';

describe('Productos', () => {
  let component: Productos;
  let fixture: ComponentFixture<Productos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productos],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(Productos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

