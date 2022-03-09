import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() pluto?: User;

  constructor() { }

  ngOnInit(): void {
  }

  onClickId(id:number){
    window.location.href = "/user/" + id;
  }
}

