using System;
using Moresca.IM.Web.Models;
using System.Data.Entity;
using Moresca.IM.Web.Daos;

namespace Moresca.IM.Web.Services
{
    public class JobService : IJobService
    {
        private readonly IJobDao _jobDao;

        public JobService(IJobDao jobDao)
        {
            _jobDao = jobDao;
        }

        public Job Create(Job job)
        {
            return new Job(Guid.Empty, "", DateTime.UtcNow, DateTime.UtcNow, Guid.Empty);
        }

        public void Delete(Guid jobId)
        {

        }

        public void Update(Job job)
        {

        }
    }
}