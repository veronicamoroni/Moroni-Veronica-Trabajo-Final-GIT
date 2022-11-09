import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
  
    getProducto(): string {
        return 'Perfuminas';
    }

    postProducto(): string {
        return 'Perfumina limon';
    }
}
