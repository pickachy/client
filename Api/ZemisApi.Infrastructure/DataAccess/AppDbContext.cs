using System.Reflection;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.DataAccess
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}

        public DbSet<Loan> Loan { get; set; }
        public DbSet<Seo> Seo { get; set; }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}