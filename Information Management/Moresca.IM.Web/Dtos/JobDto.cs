using System;

namespace Moresca.IM.Web.Dtos
{
    public class JobDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime DateModified { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid CreatedBy { get; set; }
    }
}