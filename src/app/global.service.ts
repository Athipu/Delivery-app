import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';   

@Injectable({providedIn: 'root'})
export class GlobalService {
 itemValue = new BehaviorSubject(this.theItem);

 set theItem(value) {
   this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
   let username = value? value:"";
   localStorage.setItem('userName', username);
 }

 get theItem() {
   return localStorage.getItem('userName');
 }
}