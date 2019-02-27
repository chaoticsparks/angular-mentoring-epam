import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {LoaderService} from '../loader.service';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnChanges {

  public isLoading: Observable<boolean>;

  constructor(private loader: LoaderService) {
    this.isLoading = loader.isLoading;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'ch');
  }

}
