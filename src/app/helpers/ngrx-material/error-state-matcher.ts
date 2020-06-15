import { FormControlState } from 'ngrx-forms';
import { Directive, Host, Input, Optional } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatChipList } from '@angular/material/chips';
import { MatInput } from '@angular/material/input';

@Directive({
	selector: '[ngrxFormControlState]',
})
export class CustomErrorStateMatcherDirective {
	@Input() set ngrxFormControlState(state: FormControlState<any>) {
		const errorsAreShown = state.isInvalid && (state.isTouched || state.isSubmitted);

		if (this.input) {
			this.input.errorState = errorsAreShown;
			this.input.stateChanges.next();
		}

		if (this.select) {
			this.select.errorState = errorsAreShown;
			this.select.stateChanges.next();
		}

		if (this.chipList) {
			this.chipList.errorState = errorsAreShown;
			this.chipList.stateChanges.next();
		}
	}

	constructor(
		@Host() @Optional() private input: MatInput,
		@Host() @Optional() private select: MatSelect,
		@Host() @Optional() private chipList: MatChipList,
	) {}
}