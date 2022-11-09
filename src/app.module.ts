import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { VendedoresController } from './vendedores/vendedores.controller';
import { VendedoresService } from './vendedores/vendedores.service';

@Module({
  imports: [],
  controllers: [AppController, ProductoController, VendedoresController],
  providers: [AppService, ProductoService, VendedoresService],
})
export class AppModule {}
