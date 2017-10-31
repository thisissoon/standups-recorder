import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { StaffMemberItem } from '../api/models';
import { StaffMemberService } from '../api/services';

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
   * @memberof HistoryComponent
   *
   * @method renderDiagram
   */
  public onSubmit() {
    this.staffMemberService.update(this.staffMember.ID, this.staffMemberDetailsForm.value)
      .subscribe(value => {
        this.router.navigateByUrl(`team/${value.ID}`);
      });
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private staffMemberService: StaffMemberService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: { staffMember: StaffMemberItem }) => {
      this.staffMember = data.staffMember;
    });
    this.staffMemberDetailsForm = this.formBuilder.group({});
  }

}
