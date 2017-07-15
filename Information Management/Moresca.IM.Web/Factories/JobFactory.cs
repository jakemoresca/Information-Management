using Moresca.IM.Web.Dtos;
using Moresca.IM.Web.Models;

namespace Moresca.IM.Web.Factories
{
    public class JobFactory : IJobFactory
    {
        public JobDto ToDto(Job job)
        {
            return new JobDto
            {
                Id = job.Id,
                Name = job.Name,
                DateCreated = job.DateCreated,
                DateModified = job.DateModified,
                CreatedBy = job.CreatedBy
            };
        }

        public Job ToModel(JobDto jobDto)
        {
            return new Job(jobDto.Id, jobDto.Name, jobDto.DateModified, jobDto.DateCreated, jobDto.CreatedBy);
        }
    }
}