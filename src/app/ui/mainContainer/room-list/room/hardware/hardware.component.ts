import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardware } from '@models/hardware';
import { Equipment } from '@models/equipment';
import { EquipmentFormFacade } from '@store/equipment-form';
import { RoomListFacade } from '@store/room-list';
import { Room } from '@models/room';

@Component({
	selector: 'app-hardware',
	templateUrl: './hardware.component.html',
	styleUrls: ['./hardware.component.scss'],
})
export class HardwareComponent implements OnInit {
	public hardware$: Observable<Hardware | undefined>;
	public room$: Observable<Room | undefined>;

	constructor(
		public readonly equipmentFormFacade: EquipmentFormFacade,
		public readonly roomListFacade: RoomListFacade,
	) {}

	ngOnInit(): void {
		this.hardware$ = this.roomListFacade.hardware$;
		this.room$ = this.roomListFacade.room$;
	}

	onOpen(equipment: Equipment): void {
		this.equipmentFormFacade.loadEquipmentForm(equipment);
	}

	getEquipments(hardware: Hardware): (Equipment | undefined)[] {
		return Hardware.getEquipments(hardware);
	}
}
