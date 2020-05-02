import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from './room/room.component';
import {RoomListComponent} from './room-list.component';
import {EquipmentComponent} from './room/equipment/equipment.component';

const routes: Routes = [
    {
        path: 'rooms',
        component: RoomListComponent,
        children: [
            {
                path: ':id',
                component: RoomComponent,
                children: [
                    {
                        path: ':detail',
                        component: EquipmentComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoomListRoutingModule {}