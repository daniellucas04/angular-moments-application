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

  //search

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
}
