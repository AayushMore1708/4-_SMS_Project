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
    
    public partial class tblFeeCategory
    {        [Key]
        public int FeeCategoryId { get; set; }
        public string FeeCategoryName { get; set; }
        public string ReceiptNoPrefix { get; set; }
        public string FeeCategoryDescription { get; set; }
        public string FeeMedium { get; set; }
        public string AcadamicYear { get; set; }
    }
}
