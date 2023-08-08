import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { MomentProps } from 'src/app/Moment';
import { enviroment } from 'src/enviroments/enviroment';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allMoments: MomentProps[] = []
  moments: MomentProps[] = []
  baseApiURL = enviroment.baseApiUrl
  
  faSearch = faSearch
  searchTerm:string = ""

  constructor(private momentService: MomentService){}

  ngOnInit(): void{
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allMoments = data
      this.moments = data
    })
  }
  
  search(event: Event): void{
    const target = event.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter(moment => moment.title.toLocaleLowerCase().includes(value))
  }
}
