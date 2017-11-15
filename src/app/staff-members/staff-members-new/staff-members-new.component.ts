import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { StaffMemberItem } from '../../api/models';
import { StaffMemberService } from '../../api/services';

import { AlertService } from '../../shared/alerts/alert.service';

@Component({
  selector: 'app-staff-members-new',
  templateUrl: './staff-members-new.component.html',
  styleUrls: ['./staff-members-new.component.scss']
})
export class StaffMembersNewComponent implements OnInit {

  /**
   * Staff member
   *
   * @memberof StaffMembersNewComponent
   */
  public staffMember: StaffMemberItem = {
    firstName: null,
    lastName: null,
    role: null,
    current: false
  };

  /**
   * FormGroup Object for staff details form
   * setup in child component
   *
   * @type {FormGroup}
   * @memberOf ProjectCertificatesComponent
   */
  public staffMemberDetailsForm: FormGroup;

  /**
   * Submit form
   *
   * @param {positions} positions
   * @param {summaries} summaries
   * @memberof StaffMembersNewComponent
   *
   * @method renderDiagram
   */
  public onSubmit() {
    this.staffMemberService.create(this.staffMemberDetailsForm.value)
      .subscribe(value => {
        this.alertService.add({
          type: 'success',
          msg: 'staff member created',
          duration: 5000
        });
        this.router.navigateByUrl(`staff-members/${value._links.staffMember.href.split('/')[2]}`);
      }, err => {
        this.alertService.add({
          type: 'error',
          msg: 'not created',
          duration: 5000
        });
      });
  }

  constructor(
    private formBuilder: FormBuilder,
    private staffMemberService: StaffMemberService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.staffMemberDetailsForm = this.formBuilder.group({});
  }

}
