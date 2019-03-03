import { Component,NgModule, HostListener, Inject } from '@angular/core';

import { MyserviceService } from './myservice.service';
import {  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' to angular ';
  // checkngif=true; 
   isvalid:boolean= true;
  data:string='';
  data1:string='sahil';
//
//  constructor(@Inject(MyserviceService)myserviceService){
// //     console.log(myserviceService);
// //     console.log("hi this is component");
// //   }
 @HostListener('click',['$event'])
 onhostclick(event:Event){
    alert("haanji ");
 }


//  Students:any[]=[
//    {
//   'name':'sahil'
//    },
//    {
//     'name':'papu'
//      },
//      {
//       'name':'shinda'
//        },
//        {
//         'name':'yo'
//          }];
 students:any[];
 constructor(){
   this.students=[{
     studentId:1,
     name:'sahil',
     gender:'male',
     age:23,
     course:'msc'
   },
   {
    studentId:2,
    name:'nav',
    gender:'male',
    age:23,
    course:'msc'
  },
  {
    studentId:3,
    name:'sah',
    gender:'male',
    age:23,
    course:'msc'
  },
  {
    studentId:4,
    name:'yo',
    gender:'male',
    age:23,
    course:'msc'
  }
  ]
 }

getMoreStudent():void{

  this.students=[{
    studentId:1,
    name:'sahil',
    gender:'male',
    age:23,
    course:'msc'
  },
  {
   studentId:2,
   name:'nav',
   gender:'male',
   age:23,
   course:'msc'
 },
 {
   studentId:3,
   name:'sah',
   gender:'male',
   age:23,
   course:'msc'
 },
 {
   studentId:4,
   name:'yo',
   gender:'male',
   age:23,
   course:'msc'
 },
 {
 studentId:5,
 name:'soni',
 gender:'female',
 age:23,
 course:'msc'
}
 ];
}


trackById(index:number,students:any):string{

return students.studentId;

}

 changeValue(Valid: any){
   this.isvalid=Valid;
 }

 onclick(){
   console.log("u click me");
 }
 alter(){
   
   alert("hi fufu");
 }
}
