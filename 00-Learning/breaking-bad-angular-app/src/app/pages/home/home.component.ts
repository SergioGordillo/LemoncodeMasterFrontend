import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  characters : Character[] | undefined;
  charactersCopy : Character[] | undefined;

  constructor(public http:HttpClient) {
    this.getData();
   }

   async getData(){
    await this.http.get<any>(environment.apiUrl + "/characters")
              .subscribe((res)=> {
                this.characters = res.map(({char_id, name, nickname, img, status, occupation}: Character)=> {
                  return {
                    char_id: char_id,
                    name: name,
                    nickname: nickname,
                    img: img,
                    status: status,
                    occupation: occupation
                  }
                })

                this.charactersCopy = this.characters;
              });
   }

  filter(e: any){
    const search : string = e.target.value;
    console.log({search});

    this.characters = this.charactersCopy?.filter(({name}:Character)=>{
      return name.toLowerCase().includes(search.toLowerCase())
    })
  }

}
