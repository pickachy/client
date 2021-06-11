using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.DataAccess.Repositories
{
    public class SeoRepository: Repository<Seo>, ISeoRepository
    {
        public SeoRepository(AppDbContext context) : base(context)
        {
        }

        public Task<Seo> GetByUrlAsync(string url)
        {
            return GetAll().FirstAsync(x => x.Url.Equals(url));
        }
    }
}