import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, ProductFilterPipe, FormsModule] // Buraya ekleyin
 // Buraya ekleyin
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService){ }
  title = "Ürün Listesi"
  filterText=""
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus ZenBook",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://www.hpstore.com.tr/hp-250-laptop-g9-intel-core-i5-1235u-8gb-ram-512gb-ssd-156-inc-fhd-windows-11-home-gumus-grisi-9m3g4at-15080-19-O.jpg"}
  ]
    
  
addToCart(product: Product) {
  this.alertifyService.success(product.name+ " added")
}


}
