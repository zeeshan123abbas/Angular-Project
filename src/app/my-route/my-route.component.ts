import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-my-route',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './my-route.component.html',
  styleUrl: './my-route.component.css'
})
export class MyRouteComponent {
public msg:any="";
  public list:any;
  public objbody:any={
    "id": 0,
    "name": "",
    "age": ""
  }
  constructor(private data:HttpClient){
   this.getdata()
  }

  getdata(){
    this.data.get("http://localhost:5175/api/Student").subscribe(res=>{
      console.log(res);
      this.list=res;
    })
  }
  
  onSave(){
  this.data.post("http://localhost:5175/api/Student",this.objbody).subscribe((res:any)=>{
    if(res.result!=true){
      alert("data save")
      this.getdata()
     }else{
      alert(res.message);
     }
  })
}

  onedit(a:any){
    this.objbody=a;
  }

  onUpdate(id:number){
     
    this.data.put("http://localhost:5175/api/Student/"+id,this.objbody).subscribe((res:any)=>{
    if(res.result!=true){
      alert("data edit");
      this.getdata();
    }else{
      alert("error")
    }
  })
  }

  ondelete(id:number){
      alert("are u sure....")
      this.data.delete("http://localhost:5175/api/Student/"+id).subscribe((res:any)=>{
      this.getdata();
  })  
  }
}
