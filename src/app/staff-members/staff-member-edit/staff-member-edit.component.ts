import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { StaffMemberItem } from '../../api/models';
import { StaffMemberService } from '../../api/services';

import { AlertService } from '../../shared/alerts/alert.service';

@Component({
  selector: 'app-staff-member-edit',
  templateUrl: './staff-member-edit.component.html',
  styleUrls: ['./staff-member-edit.component.scss']
})
export class StaffMemberEditComponent implements OnInit {

  /**
   * Staff member
   *
   * @memberof StaffMemberDetailComponent
   */
  public staffMember: StaffMemberItem;

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
   * @memberof StaffMemberEditComponent
   *
   * @method renderDiagram
   */
  public onSubmit() {
    this.staffMemberService.update(this.staffMember.ID, this.staffMemberDetailsForm.value)
      .subscribe(value => {
        this.alertService.add({
          type: 'success',
          msg: 'staff member updated',
          duration: 5000
        });
        this.router.navigateByUrl(`staff-members/${value.ID}`);
      }, err => {
        this.alertService.add({
          type: 'error',
          msg: 'not updated',
          duration: 5000
        });
      });
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private staffMemberService: StaffMemberService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: { staffMember: StaffMemberItem }) => {
      this.staffMember = data.staffMember;
    });
    this.staffMemberDetailsForm = this.formBuilder.group({});
  }

}
