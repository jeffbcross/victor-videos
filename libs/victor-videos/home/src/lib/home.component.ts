import {
  Component,
  ChangeDetectionStrategy,
  SecurityContext,
  ɵɵsetComponentScope,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface VideoMetadata {
  kind: string;
  title: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
}

export interface VideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoMetadata[];
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  videos$ = this.http.get<VideoResponse>('/assets/videos.json');
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  // SHOULD BE A PIPE!
  sanitizeSrc(src: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://i.ytimg.com/vi/${src}/hqdefault.jpg`
    );
  }
}
