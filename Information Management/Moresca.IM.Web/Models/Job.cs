using System;

namespace Moresca.IM.Web.Models
{
    public class Job
    {
        public Job(Guid id, string name, DateTime dateModified, DateTime dateCreated, Guid createdBy)
        {
            Id = id;
            Name = name;
            DateModified = dateModified;
            DateCreated = dateCreated;
            CreatedBy = createdBy;
        }

        public Guid Id { get; }
        public string Name { get; }
        public DateTime DateModified { get; }
        public DateTime DateCreated { get; }
        public Guid CreatedBy { get; }
    }
}