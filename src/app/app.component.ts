import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppQuery } from './services/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public $isRTL = this.state.select(s => s.isRTL);
  
  public constructor(private state: AppQuery) {
    
  }
}
