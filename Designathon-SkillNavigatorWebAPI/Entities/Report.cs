using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Designathon_SkillNavigatorWebAPI.Entities
{
    public class Report
    {
        [Key]
        public int ReportId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Batch")]
        public int BatchId { get; set; }

        [Required]
        public string ReportType { get; set; } // e.g., Individual, Batch, College-Wise

        public DateTime GeneratedDate { get; set; } = DateTime.UtcNow;

        [Column(TypeName = "nvarchar(max)")]
        public string Content { get; set; }

        // Navigation Properties
        public virtual User User { get; set; }
        public virtual Batch Batch { get; set; }
    }
}
