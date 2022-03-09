import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersPageComponent } from '../users-page/users-page.component';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {
@Input() pluto?: User;
  constructor() { }

  ngOnInit(): void {
  }

}
