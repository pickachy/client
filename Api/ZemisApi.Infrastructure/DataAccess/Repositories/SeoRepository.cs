using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.DataAccess.Repositories
{
    public class SeoRepository: Repository<Seo>, ISeoRepository
    {
        public SeoRepository(AppDbContext context) : base(context)
        {
        }
    }
}