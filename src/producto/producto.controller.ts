import { Controller, Get, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Get()
    getProducto(): string {
    return this.productoService.getProducto();
    }

    @Post()
    postProducto(): string {
        return this.productoService.postProducto();
    }
}
