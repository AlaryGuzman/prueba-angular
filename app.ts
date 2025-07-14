import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Autocomplete } from "./autocomplete/autocomplete";
import { Badge } from './badge/badge';
import { Buttom } from "./buttom/buttom";
import { AlternarBoton } from './alternar-boton/alternar-boton';
import { Tarjeta } from './tarjeta/tarjeta';
import { CheckBox } from './check-box/check-box';
import { BottomSheet, BottomSheetOverview } from './bottom-sheet/bottom-sheet';
import { Chips } from './chips/chips';
import { Datepicker } from './datepicker/datepicker';
import { Dialog } from './dialog/dialog';
import { Divider } from './divider/divider';
import { ExpansionPanel } from './expansion-panel/expansion-panel';
import { FormField } from './form-field/form-field';
import { GridList } from './grid-list/grid-list';
import { Icon } from './icon/icon';
import { Input } from './input/input';
import { List } from './list/list';
import { MatInputEmailComponent } from './components/mat-input-email/mat-input-email';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './bottom/bottom';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [Autocomplete, Badge, Buttom, AlternarBoton, Tarjeta, CheckBox, Chips, Datepicker, Dialog, Divider, ExpansionPanel, FormField, GridList, Icon, Input, List, MatInputEmailComponent, BottomSheetOverviewExample,BottomSheetOverviewExampleSheet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App {
  protected title = 'projectmaterial';
}
