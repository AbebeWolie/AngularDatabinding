import { UserDetail } from './../UsserDetail';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  name:string = '';
  designation:string = '';
  country:string = '';
  city:string = '';
  userdetail:UserDetail[]=[]

  form:FormGroup

  constructor() { }

  ngOnInit(){
    this.form = new FormGroup({
      "user":new FormGroup({
        "name":new FormControl(null,Validators.required),
        "design":new FormControl(null,Validators.required)
      }),

      "address":new FormGroup({
        "country":new FormControl(null,Validators.required),
        "city":new FormControl(null,Validators.required)
      })
    })
  }

  onSubmit(){
    console.log(this.form)
    this.userdetail.push(new UserDetail(this.name,this.designation,this.country,this.city))
    this.form.reset()
  }

}
