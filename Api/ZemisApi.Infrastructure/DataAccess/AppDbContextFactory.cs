using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ZemisApi.Infrastructure.DataAccess
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            foreach (var arg in args)
            {
                Console.WriteLine(arg);
            }
            var configuration = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.Development.json", false)
                .Build();
        
            var connectionString = configuration.GetConnectionString("MySql");
            var version = configuration.GetSection("MySql:Version").Value;
            
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            optionsBuilder.UseMySql(connectionString, new MySqlServerVersion(new MySqlServerVersion(version)));

            return new AppDbContext(optionsBuilder.Options);
        }
    }
}