import { CommonModule } from '@angular/common';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent implements OnInit {
  title="ToDoListApplication"
  imageulr="https://th.bing.com/th/id/OIP.iwQVPx55GYfMrifarWM2VgHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7"
  inputvalue:string=''
  items:Array<string>=[];
  flag:boolean=false
  indx!:number
  //  @ViewChild('table',{static:false}) table!:ElementRef
   @ViewChild('input',{static:false}) input!:ElementRef
   @ViewChild('addbtn',{static:true}) btn!:ElementRef
    
   ngOnInit(): void {
      this.items=JSON.parse(localStorage.getItem('items')||"");
      
      
    }
  
    // add item
      AddItem(value:string):Array<string> {
  
      this.inputvalue=this.GetItem(value)
    
      if(this.flag==false&&this.inputvalue!=""){
      this.items.push(this.inputvalue)
      localStorage.setItem("items",JSON.stringify(this.items))
      // this.ClearInput()
      }
      else if(this.flag==true&&this.inputvalue!=""){
        
        console.log(this.indx)
        this.items[this.indx]=this.inputvalue
        localStorage.setItem("items",JSON.stringify(this.items))
       
        this.btn.nativeElement.value="Add"
        this.flag=false
      }
      return this.items
    }
  
  // get value in input box
  GetItem(value:string):string{
    console.log(value)
  
    return value
  }
  
  //clear input box value
  // ClearInput(){
  // this.input.nativeElement.value=""
  // }
  
  Edit(index:number):number{
  console.log(index)
  this.input.nativeElement.value=this.items[index];
  this.inputvalue=this.items[index]
  this.btn.nativeElement.value="Edit"
  this.flag=true;
  this.indx=index
  return this.indx
  }
  
  
  //remove item
  Delete(index:number){
    this.items.splice(index,1)
    localStorage.setItem("items",JSON.stringify(this.items))
  }
}
