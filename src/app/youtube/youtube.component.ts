import {Component, OnInit, SecurityContext} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

  }

  getLink() {
    console.log('https://www.youtube.com/embed/' + this.activatedRoute.snapshot.paramMap.get('id'));
    return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, 'https://www.youtube.com/embed/' +
      this.activatedRoute.snapshot.paramMap.get('id'));
  }

}

