//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SMS_Core.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblStudentEnquiry
    {        [Key]
        public int StudentEnquiryId { get; set; }
        public string StudentName { get; set; }
        public string StudentParentName { get; set; }
        public string StudentParentContact { get; set; }
        public string StudentParentAddress { get; set; }
        public string StudentParentLocality { get; set; }
        public string StudentParentCity { get; set; }
        public string StudentParentState { get; set; }
        public string StudentParentCountry { get; set; }
        public string StudentCourseName { get; set; }
        public string StudentBatchName { get; set; }
        public string StudentYear { get; set; }
        public string StudentEnqRemarks { get; set; }
        public Nullable<System.DateTime> LastModifiedDate { get; set; }
        public string LastModifiedBy { get; set; }
        public Nullable<System.DateTime> EnquiryDate { get; set; }
        public string AcadamicYear { get; set; }
    }
}
