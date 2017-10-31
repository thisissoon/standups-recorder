import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StaffMemberItem } from '../api/models';

@Component({
  selector: 'app-staff-member-details-form',
  templateUrl: './staff-member-details-form.component.html',
  styleUrls: ['./staff-member-details-form.component.scss']
})
export class StaffMemberDetailsFormComponent implements OnInit {

  /**
   * Staff member to edit
   *
   * @memberof FooterNavComponent
   */
  @Input() staffMember: StaffMemberItem;

  /**
   * Staff member to edit
   *
   * @memberof FooterNavComponent
   */
  @Input() form: FormGroup;

  /**
   * FormGroup Object for form to parent
   *
   * @type {FormGroup}
   * @memberOf ProjectAddressDetailsFormComponent
   */
  @Output() formChange = new EventEmitter<any>();

  /**
   * FormGroup Object for form from parent
   *
   * @type {FormGroup}
   * @memberOf ProjectAddressDetailsFormComponent
   */
  // public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Setup form and push to parent
    this.form = this.formBuilder.group({
      firstName: [this.staffMember.firstName, [<any>Validators.required]],
      lastName: [this.staffMember.lastName, [<any>Validators.required]],
      role: [this.staffMember.role, [<any>Validators.required]],
      current: [this.staffMember.current]
    });
    this.formChange.next(this.form);

    // on value change push form to parent component
    this.form
      .valueChanges
      .subscribe(() => {
        this.formChange.emit(this.form);
      });
  }

}
