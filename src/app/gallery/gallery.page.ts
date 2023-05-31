import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getDataFromService()
  }
  content: any;
  values = 30;
  info: any[] = [];
  getDataFromService() {
    this.service.getData().subscribe((data: any) => {
      this.info = data
      this.content = this.info.splice(0, 30)

      console.log(this.info);
    },
    );
  }
  addvalues() {
    this.content = [...this.content, ...this.info.splice(this.values, this.values + 30)]
    this.values = this.values + 30;
  }
}
