using System.Threading.Tasks;
using ZemisApi.Core.Models;
using ZemisApi.Core.Models.Enums;

namespace ZemisApi.Core.Interfaces.Repositories
{
    public interface ILoansRepository : IRepository<Loan>
    {
        Task<Loan> GetById(LoanProviderType id);
    }
}