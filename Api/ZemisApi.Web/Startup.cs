using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Extensions;
using ZemisApi.Infrastructure.DataAccess;
using ZemisApi.Infrastructure.DataAccess.Repositories;
using ZemisApi.Queries;

namespace ZemisApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSerilog();

            services.AddDbContext<AppDbContext>(options => options
                .UseMySql(Configuration.GetConnectionString("MySql"), new MySqlServerVersion(Configuration.GetSection("MySql:Version").Value)), ServiceLifetime.Transient);

            services
                .AddGraphQLServer()
                .AddQueryType<Query>();

            services.AddCors();
            
            // services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            #region Repositories

            services.AddTransient<ILoansRepository, LoansRepository>();
            services.AddTransient<ISeoRepository, SeoRepository>();

            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            using var context = serviceScope.ServiceProvider.GetService<AppDbContext>();
            context.Database.EnsureCreated();

            app.UseCors(options => options
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
            );
            
            app
                .UseRouting()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapGraphQL("/api/v1/graphql");
                });
        }
    }
}