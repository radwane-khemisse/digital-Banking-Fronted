import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  standalone: true,
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  customers: any;
  errorMessage! : string;
  constructor(private customerService : CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (error) => {
        this.errorMessage=error.message;
      }
    });

  }

}
