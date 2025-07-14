import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-alternar-boton',
  templateUrl: './alternar-boton.html',
  styleUrl: './alternar-boton.css',
  imports: [MatButtonToggleModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlternarBoton {
hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
