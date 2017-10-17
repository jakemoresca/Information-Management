using Moresca.IM.Web.Dtos;
using System.Data.Entity;

namespace Moresca.IM.Web.Daos
{
    public class IMDbContext : DbContext
    {
        
        public DbSet<JobDto> Jobs { get; set; }

        public static IMDbContext Create()
        {
            return new IMDbContext();
        }
    }
}