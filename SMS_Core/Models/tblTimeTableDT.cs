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


    public partial class tblTimeTableDT
    {
        [Key]
        public int TimeTableDTId { get; set; }
        public Nullable<int> TimeTableId { get; set; }
        public string TimeTableWeekDay { get; set; }
        public Nullable<System.TimeSpan> TimeTableWeekDayFrom { get; set; }
        public Nullable<System.TimeSpan> TimeTableWeekDayTo { get; set; }
        public string TimeTableWeekDaySubject { get; set; }
        public string TimeTableWeekDayEmp { get; set; }
        public string RoomNo { get; set; }
        public string AcadamicYear { get; set; }

        public virtual tblTimeTableHD tblTimeTableHD { get; set; }
    }
}
