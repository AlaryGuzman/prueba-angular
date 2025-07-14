import { Component, inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'bottom-sheet',
  imports: [MatButtonModule, MatBottomSheetModule, MatNavList],
  templateUrl: './bottom-sheets.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheetOverview {

private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverview>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
@Component({
  selector: 'bottom-sheet-overview',
  imports: [MatListModule],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheet {
  private bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheet);

  }
}

