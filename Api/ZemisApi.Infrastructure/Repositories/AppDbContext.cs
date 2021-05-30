using Microsoft.EntityFrameworkCore;
using ZemisApi.Infrastructure.Repositories.Entities;

namespace ZemisApi.Infrastructure.Repositories
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        public DbSet<LoanEntity> Loans { get; set; }
    }
}