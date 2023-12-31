import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProductController } from './product/product.controller';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [InvoiceModule],
  controllers: [UserController, AppController, ProductController],
  providers: [AppService ,UserService],
})
export class AppModule {}
