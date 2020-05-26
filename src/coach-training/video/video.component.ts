import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    loadedKey : string;
    constructor(private activateRoute: ActivatedRoute,) { }

    ngOnInit(): void {
        this.activateRoute.queryParams.subscribe(queryParams => {
            this.loadedKey = queryParams.aKey;
            console.log(this.loadedKey);
        })

    }

}
