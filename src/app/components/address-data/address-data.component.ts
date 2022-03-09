import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: ['./address-data.component.scss']
})
export class AddressDataComponent implements OnInit {
@Input() address?:Address
  constructor() { }

  ngOnInit(): void {
  }

}
