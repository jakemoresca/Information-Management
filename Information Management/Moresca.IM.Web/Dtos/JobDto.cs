using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Moresca.IM.Web.Dtos
{
    [Table("Jobs")]
    public class JobDto
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid CreatedBy { get; set; }
    }
}