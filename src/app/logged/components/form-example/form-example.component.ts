import { Component, OnInit } from '@angular/core';
//reactive form
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  //name =new FormControl('');
  profileForm=new FormGroup({
    firtName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zip:new FormControl('')
    })
  });
  constructor() { }

  ngOnInit() {
  }

  updateName():void{
    //this.name.setValue('nancy');
  }

  updateFormGruping():void{
     this.profileForm.patchValue({
       firtName:'Nancy',
       address:{
         street:"123 drew Street"
       }
     })
  }

  onSubmit():void{
     console.log(this.profileForm.value);
  }
}
