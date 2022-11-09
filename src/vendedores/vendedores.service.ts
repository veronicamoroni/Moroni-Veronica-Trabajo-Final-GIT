import { Injectable } from '@nestjs/common';

@Injectable()
export class VendedoresService {
    obtenerVendedores(): string {
        return "Vendedor 2"
    }
}
