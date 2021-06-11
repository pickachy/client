using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace ZemisApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder
                        .ConfigureAppConfiguration((hostingContext, configuration) =>
                        {
                            configuration.Sources.Clear();

                            if (hostingContext.HostingEnvironment.IsDevelopment())
                            {
                                configuration.AddJsonFile("appsettings.Development.json");
                            }
                            
                            if (hostingContext.HostingEnvironment.IsProduction())
                            {
                                configuration.AddJsonFile("appsettings.json");
                            }
                        })
                        .UseKestrel(options => options.ListenAnyIP(5000))
                        .UseStartup<Startup>();
                });
    }
}