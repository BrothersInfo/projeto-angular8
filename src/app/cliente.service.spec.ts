import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
    
    beforeEach(() => TestBed.configureTestingModule({}));

    it('deverá ser criado', () => {
        const service: ClienteService = TestBed.get(ClienteService);
        expect(service).toBeTruthy();
    });
});