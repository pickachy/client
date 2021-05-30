using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using Serilog.Extensions.Logging;

namespace ZemisApi.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddSerilog(this IServiceCollection services, Action<IServiceProvider, LoggerConfiguration> options)
        {
            return services.AddSingleton<ILoggerFactory>(x =>
            {
                var configuration = new LoggerConfiguration();

                options.Invoke(x, configuration);

                var logger = configuration.CreateLogger();

                return new SerilogLoggerFactory(logger);
            });
        }

        public static IServiceCollection AddSerilog(this IServiceCollection services)
        {
            return services.AddSerilog((provider, config) =>
            {
                var configurationSection = provider.GetRequiredService<IConfiguration>().GetSection("Serilog");

                if (!configurationSection.Exists())
                {
                    throw new ArgumentException("Section serilog not found in configuration");
                }

                config.ReadFrom.Configuration(configurationSection);
            });
        }
    }
}