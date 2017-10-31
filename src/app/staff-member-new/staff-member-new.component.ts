import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { StaffMemberItem } from '../api/models';
import { StaffMemberService } from '../api/services';

@Component({
  selector: 'app-staff-member-new',
  templateUrl: './staff-member-new.component.html',
  styleUrls: ['./staff-member-new.component.scss']
})
export class StaffMemberNewComponent implements OnInit {

  /**
   * Staff member
   *
   * @memberof StaffMemberDetailComponent
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
   * @memberof HistoryComponent
   *
   * @method renderDiagram
   */
  public onSubmit() {
    this.staffMemberService.create(this.staffMemberDetailsForm.value)
      .subscribe(value => {
        console.log(value._links.staffMember.href.split('/')[2]);
        this.router.navigateByUrl(`team/${value._links.staffMember.href.split('/')[2]}`);
      });
  }

  constructor(
    private formBuilder: FormBuilder,
    private staffMemberService: StaffMemberService,
    private router: Router
  ) { }

  ngOnInit() {
    this.staffMemberDetailsForm = this.formBuilder.group({});
  }

}
