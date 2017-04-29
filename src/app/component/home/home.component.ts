import { Component, OnInit } from '@angular/core';
import { WarService } from '../../service/wargamming.service';
import Tank from '../../tank';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tanks: Tank[];
  filter: Tank = new Tank();

  constructor(private warService: WarService) {}

  ngOnInit() {
  	this.warService.getTanks().subscribe(
  		(tanks: Tank[]) => {
  			let array = [];
  			for ( let k in tanks) {
  				array.push(tanks[k]);
  			}
  			this.tanks = array;
  	});
  }

}