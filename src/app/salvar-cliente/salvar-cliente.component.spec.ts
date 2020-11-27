import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarClienteComponent } from './salvar-cliente.component';

describe('SalvarClienteComponent', () => {
    let component: SalvarClienteComponent;
    let fixture: ComponentFixture<SalvarClienteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SalvarClienteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SalvarClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('deveria criar', () => {
        expect(component).toBeTruthy();
    });
});