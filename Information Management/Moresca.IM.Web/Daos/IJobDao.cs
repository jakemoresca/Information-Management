using Moresca.IM.Web.Dtos;
using System;
using System.Collections.Generic;

namespace Moresca.IM.Web.Daos
{
    public interface IJobDao
    {
        JobDto Insert(JobDto jobDto);
        IReadOnlyList<JobDto> FindAll();
        JobDto FindById(Guid jobId);
        void Update(JobDto jobDto);
        void Delete(Guid jobId);
    }
}
