import { Cliente } from './cliente';

describe('Cliente', () => {
    it('cria uma instancia', () => {
        expect( new Cliente()).toBeTruthy();
    });
});