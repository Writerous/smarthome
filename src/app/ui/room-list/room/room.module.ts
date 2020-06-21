import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '@pipes';
import { HardwareModule } from './hardware/hardware.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { HardwareFormModule } from './hardware-form/hardware-form.module';
import { RoomFormModule } from './room-form/room-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [RoomComponent],
	imports: [
		CommonModule,
		HardwareModule,
		HardwareFormModule,
		RoomFormModule,
		MatToolbarModule,
		MatRippleModule,
		MatCardModule,
		PipesModule,
		MatExpansionModule,
		RouterModule.forChild([]),
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
	],
	exports: [RouterModule],
})
export class RoomModule {}
