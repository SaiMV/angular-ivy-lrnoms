import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-label',
  templateUrl: './ang-gui-label.component.html',
  styleUrls: ['./ang-gui-label.component.css'],
})
export class AngGuiLabelComponent implements OnInit {
  @Input() text = '';
  @Input() hover: boolean = false;
  @Input() subHeader: boolean = false;
  @Input() mainHeader: boolean = false;
  @Input() texColor: string = 'rgb(7, 168, 248)';
  @Input() refreshLink: boolean = false;
  @Input() previousButtonLink: boolean = false;
  @Input() nextButtonLink: boolean = false;
  @Input() addButtonLink: boolean = false;
  @Input() deleteButtonLink: boolean = false;
  @Input() openPageButtonLink: boolean = false;
  @Input() folderButtonLink: boolean = false;
  @Input() galaryButtonLink: boolean = false;
  @Input() homeButtonLink: boolean = false;
  @Input() downloadButtonLink: boolean = false;
  @Input() uploadButtonLink: boolean = false;
  @Input() pagesButtonLink: boolean = false;
  @Input() listLink: boolean = false;
  @Input() disabled: boolean = false;
  @Input() likeLink: boolean = false;
  constructor() {}

  ngOnInit() {}

  getClassName() {
    let classNames = 'link-text ';

    classNames += this.disableItem();
    classNames += this.hoverClass();
    classNames += this.subHeaderClass();
    classNames += this.mainHeaderClass();
    classNames += this.refreshLinkClass();
    classNames += this.previousButtonLinkClass();
    classNames += this.nextButtonLinkClass();
    classNames += this.addButtonLinkClass();
    classNames += this.deleteButtonLinkClass();
    classNames += this.openPageButtonLinkClass();
    classNames += this.folderButtonLinkClass();
    classNames += this.galaryButtonLinkClass();
    classNames += this.homeButtonLinkClass();
    classNames += this.downloadButtonLinkClass();
    classNames += this.uploadButtonLinkClass();
    classNames += this.pagesButtonLinkClass();
    classNames += this.listLinkClass();
    classNames += this.likeLinkClass();

    return classNames;
  }

  disableItem() {
    return this.disabled ? ' disabled ' : '';
  }

  hoverClass() {
    return this.hover ? ' hover-underline ' : '';
  }

  subHeaderClass() {
    return this.subHeader ? 'sub-header ' : '';
  }

  mainHeaderClass() {
    return this.mainHeader ? 'main-header ' : '';
  }

  refreshLinkClass() {
    return this.refreshLink ? ' refresh-link ' : '';
  }

  previousButtonLinkClass() {
    return this.previousButtonLink ? ' previous-button-link ' : '';
  }

  nextButtonLinkClass() {
    return this.nextButtonLink ? ' next-button-link ' : '';
  }

  addButtonLinkClass() {
    return this.addButtonLink ? ' add-button-link ' : '';
  }

  deleteButtonLinkClass() {
    return this.deleteButtonLink ? ' icon-link delete-button-link ' : '';
  }

  openPageButtonLinkClass() {
    return this.openPageButtonLink ? ' icon-link open-page-button-link ' : '';
  }

  folderButtonLinkClass() {
    return this.folderButtonLink ? ' icon-link folder-button-link' : '';
  }

  galaryButtonLinkClass() {
    return this.galaryButtonLink ? ' icon-link galary-button-link ' : '';
  }

  homeButtonLinkClass() {
    return this.homeButtonLink ? ' icon-link home-button-link ' : '';
  }

  downloadButtonLinkClass() {
    return this.downloadButtonLink ? ' icon-link download-button-link ' : '';
  }

  uploadButtonLinkClass() {
    return this.uploadButtonLink ? ' icon-link upload-button-link ' : '';
  }

  pagesButtonLinkClass() {
    return this.pagesButtonLink ? ' icon-link pages-button-link ' : '';
  }

  listLinkClass() {
    return this.listLink ? ' icon-link ordered-list-icon ' : '';
  }
  likeLinkClass() {
    return this.likeLink ? ' icon-link like-icon ' : '';
  }
}
