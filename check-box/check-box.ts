import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-check-box',
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './check-box.html',
  styleUrl: './check-box.css'
})
export class CheckBox {
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);
}
