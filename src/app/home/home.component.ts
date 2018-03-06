import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  posts = [];

  constructor(private  http: HttpClient) {
    this.http.get('https://www.googleapis.com/youtube/v3/search' +
      '?order=date&part=snippet&' +
      'channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY')
      .subscribe(
        (data: any) => this.posts = data
      );
  }


  ngOnInit() {
  }

}
