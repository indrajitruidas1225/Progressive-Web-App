import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information=null;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
 
  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
      console.log(result)
    });
}
openWebsite() {
  window.open(this.information.Website, '_blank');
}
}

