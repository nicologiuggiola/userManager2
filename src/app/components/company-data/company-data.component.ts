import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss']
})
export class CompanyDataComponent implements OnInit {
@Input() company?: Company;
  constructor() { }

  ngOnInit(): void {
  }

}
