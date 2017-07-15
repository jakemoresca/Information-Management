using Moresca.IM.Web.Models;
using System;

namespace Moresca.IM.Web.Services
{
    public interface IJobService
    {
        Job Create(Job job);
        void Update(Job job);
        void Delete(Guid jobId);
    }
}
