import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fullscreen-view',
  templateUrl: './fullscreen-view.page.html',
  styleUrls: ['./fullscreen-view.page.scss'],
})
export class FullscreenViewPage implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }
  id: any;
  image: any = { url: "" };

  ngOnInit() {
    this.route.queryParams.subscribe((data => {
      this.id = data.id;
      console.log(this.id)
      this.service.getImage(this.id).subscribe((data => {
        this.image = data

        console.log(this.image)
      }));
    }))


  }

}
