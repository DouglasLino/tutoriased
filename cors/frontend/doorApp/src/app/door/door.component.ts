

import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Door } from './door';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  private readonly baseURL = 'http://localhost:4000/api';
  doors: Door[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDoors();
  }

  getDoors(){
    this.http.get<Door []>(`${this.baseURL}/doors`).subscribe(
      doors => this.doors = doors
    );
  }

  // debe ser number, pero me tira error
  createDoor(width:string, height:string, type: string){
    const payload = {width_in: width, height_in: height, type};
    this.http.post<Door>(`${this.baseURL}/door`,payload).subscribe(
      response => {
        this.doors.push(response);
      }
    )

  }


}
