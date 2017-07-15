using Moresca.IM.Web.Dtos;
using System.Data.Entity;

namespace Moresca.IM.Web.Daos
{
    public class IMDbContenxt : DbContext
    {
        public DbSet<JobDto> Jobs { get; set; }

        public static IMDbContenxt Create()
        {
            return new IMDbContenxt();
        }
    }
}