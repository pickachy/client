using System.Threading.Tasks;
using ZemisApi.Core.Models;

namespace ZemisApi.Core.Interfaces.Repositories
{
    public interface ISeoRepository: IRepository<Seo>
    {
        Task<Seo> GetByUrlAsync(string url);
    }
}