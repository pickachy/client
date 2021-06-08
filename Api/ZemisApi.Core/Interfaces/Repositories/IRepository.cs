using System.Linq;
using System.Threading.Tasks;

namespace ZemisApi.Core.Interfaces.Repositories
{
    public interface IRepository<TModel> where TModel : class, new()
    {
        IQueryable<TModel> GetAll();
        Task<TModel> AddAsync(TModel model);
        Task<TModel> UpdateAsync(TModel model);
    } 
}