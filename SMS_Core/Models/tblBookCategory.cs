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
    using System.ComponentModel.DataAnnotations;

    public partial class tblBookCategory
    {
        [Key]
        public int BookCategoryId { get; set; }
        public string CategoryName { get; set; }
        public string SectionCode { get; set; }
        public string AcadamicYear { get; set; }
    }
}
