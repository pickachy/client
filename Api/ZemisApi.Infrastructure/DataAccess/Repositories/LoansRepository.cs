using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models;
using ZemisApi.Core.Models.Enums;

namespace ZemisApi.Infrastructure.DataAccess.Repositories
{
    public class LoansRepository: Repository<Loan>, ILoansRepository
    {
        public LoansRepository(AppDbContext context) : base(context)
        {
        }

        public Task<Loan> GetById(LoanProviderType id)
        {
            return GetAll().FirstAsync(entity => entity.Id == id);
        }
    }
}