import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ang-gui-video-player',
  templateUrl: './ang-gui-video-player.component.html',
  styleUrls: ['./ang-gui-video-player.component.css'],
})
export class AngGuiVideoPlayerComponent implements OnInit {
  @Input() url: string = '';
  @Input() height: string = '';
  @Input() type = 'YouTube';
  bypassedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private cd: ChangeDetectorRef) {
    this.bypassedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.url.toString()
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.cd.detach();
    }, 5000);
  }

  getUrl() {
    if (this.type == 'YouTube') {
      return (this.bypassedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + this.url.toString()
      ));
    } else {
      return (this.bypassedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.url.toString()
      ));
    }
  }
}
