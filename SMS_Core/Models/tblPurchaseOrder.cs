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
    
    public partial class tblPurchaseOrder
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tblPurchaseOrder()
        {
            this.tblPurchaseOrderDTs = new HashSet<tblPurchaseOrderDT>();
        }
            [Key]
        public int PurcahseOrderId { get; set; }
        public Nullable<int> VendorID { get; set; }
        public string VendorName { get; set; }
        public string PurchaseOrderNo { get; set; }
        public Nullable<System.DateTime> PurchaseOrderDate { get; set; }
        public Nullable<System.DateTime> POItemRequredDate { get; set; }
        public string LastModifiedUser { get; set; }
        public Nullable<System.DateTime> LastModifiedDateTime { get; set; }
        public Nullable<decimal> GrandTotal { get; set; }
        public string Remarks { get; set; }
        public string VendorContactName { get; set; }
        public string VendorContact { get; set; }
        public Nullable<int> PurchaseOrderReceiptId { get; set; }
        public string AcadamicYear { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblPurchaseOrderDT> tblPurchaseOrderDTs { get; set; }
    }
}
