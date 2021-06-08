using Microsoft.AspNetCore.Hosting;
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
                        .UseKestrel()
                        .UseUrls("http://localhost:5000")
                        .UseStartup<Startup>();
                });
    }
}