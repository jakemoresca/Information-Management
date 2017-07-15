using Moresca.IM.Web.Dtos;
using Moresca.IM.Web.Models;

namespace Moresca.IM.Web.Factories
{
    public interface IJobFactory
    {
        JobDto ToDto(Job job);
        Job ToModel(JobDto jobDto);
    }
}
