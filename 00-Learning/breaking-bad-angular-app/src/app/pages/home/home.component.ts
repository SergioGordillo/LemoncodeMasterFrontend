import { Component} from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  character : Character | undefined;

  constructor(public http:HttpClient) {
    this.getData();
   }

   async getData(){
    await this.http.get<any>(environment.apiUrl + "/characters")
              .subscribe((res)=> {
                console.table(res);
              });
   }

  filter(e: any){
    const search : string = e.target.value;
    console.log({search});
    //TODO: Do the filter
  }

}
