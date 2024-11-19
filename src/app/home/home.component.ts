import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food'; 
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from "../Components/star-rating/star-rating.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
foods:Foods[]=[];
  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    this.foods=this.fs.getAll();

    
  }
}


