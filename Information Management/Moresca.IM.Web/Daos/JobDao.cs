using System;
using System.Collections.Generic;
using Moresca.IM.Web.Dtos;
using System.Linq;

namespace Moresca.IM.Web.Daos
{
    public class JobDao : IJobDao
    {
        private IMDbContenxt _database;

        public JobDao()
        {
            _database = new IMDbContenxt();
        }

        public void Delete(Guid jobId)
        {

        }

        public IReadOnlyList<JobDto> FindAll() => _database.Jobs.ToList();
        public JobDto FindById(Guid jobId) => _database.Jobs.Find(jobId);

        public JobDto Insert(JobDto jobDto)
        {
            jobDto =_database.Jobs.Add(jobDto);
            _database.SaveChanges();
            return jobDto;
        }

        public void Update(JobDto jobDto)
        {
            _database.Entry<JobDto>(jobDto);
            _database.SaveChanges();
        }
    }
}