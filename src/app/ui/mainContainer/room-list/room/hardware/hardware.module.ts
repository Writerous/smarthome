import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { PipesModule } from '@pipes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HardwareComponent } from './hardware.component';
import { EquipmentFormModule } from './equipment-form/equipment-form.module';
import { EquipmentModule } from './equipment/equipment.module';

@NgModule({
	declarations: [HardwareComponent],
	imports: [
		CommonModule,
		MatExpansionModule,
		MatListModule,
		PipesModule,
		MatToolbarModule,
		EquipmentFormModule,
		EquipmentModule,
	],
})
export class HardwareModule {}
