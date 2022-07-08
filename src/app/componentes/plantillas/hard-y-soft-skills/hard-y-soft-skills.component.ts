import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hard-y-soft-skills',
  templateUrl: './hard-y-soft-skills.component.html',
  styleUrls: ['./hard-y-soft-skills.component.css']
})
export class HardYSoftSkillsComponent implements OnInit {
  progressList: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.progressList=data.aptitude;
    });
  }
}