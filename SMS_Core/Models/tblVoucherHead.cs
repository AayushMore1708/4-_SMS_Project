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

    public partial class tblVoucherHead
    {
        [Key]
        public int VoucherHeadId { get; set; }
        public string VoucherHead { get; set; }
        public string VoucherMaster { get; set; }
        public string AccountGroup { get; set; }
        public string AcadamicYear { get; set; }
    }
}