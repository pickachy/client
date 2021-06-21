using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.DataAccess.Repositories
{
    public class SeoRepository : Repository<Seo>, ISeoRepository
    {
        public SeoRepository(AppDbContext context) : base(context)
        {
        }

        public Task<Seo> GetByUrl(string url)
        {
            return GetAll()
                .Where(entity => entity.Url.Equals(url))
                .Select(columns => new Seo
                {
                    Title = columns.Title,
                    Description = columns.Description,
                    Keywords = columns.Keywords
                })
                .FirstAsync();
        }
    }
}