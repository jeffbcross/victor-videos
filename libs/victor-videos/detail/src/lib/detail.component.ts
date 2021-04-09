import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  publishedDate = moment(
    new Date(`${Math.round(Math.random() * 12)}/1/2020`)
  ).fromNow();
  videoId = this.route.paramMap.pipe(map((params) => params.get('id')));
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  sanitizeSrc(src: string | null): SafeResourceUrl | null {
    if (!src) return src;
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${src}`
    );
  }
}
