import { HttpClient } from '@angular/common/http';
import { Component, SecurityContext } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prototype';
  url!: string|null;
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private client: HttpClient) {
    this.url = sanitizer.sanitize(
        SecurityContext.RESOURCE_URL,
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/icon_set.svg'));
    client.get(this.url as string,  {responseType: 'text'}).subscribe(
      data => {
      (document.querySelector("#icon-set") as HTMLElement).innerHTML = data;
    });
  }
}
