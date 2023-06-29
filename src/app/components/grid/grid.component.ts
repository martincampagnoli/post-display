import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as reducers from '../../store/reducers';
import * as actions from '../../store/actions';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Post } from 'src/app/models/Post';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class GridComponent implements OnInit {
  data$: Observable<Array<Post>>;
  loading: boolean = false;

  constructor(private store: Store<reducers.AppState>) {
    this.store
      .select(reducers.isLoading)
      .pipe(takeUntilDestroyed())
      .subscribe((loading) => {
        this.loading = loading as boolean;
      });
    this.data$ = this.store.select(reducers.getData);
    this.store.dispatch(new actions.GetData());
  }

  ngOnInit() {}
}
