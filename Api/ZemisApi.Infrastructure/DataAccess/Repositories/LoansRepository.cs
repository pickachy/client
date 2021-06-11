using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.DataAccess.Repositories
{
    public class LoansRepository: Repository<Loan>, ILoansRepository
    {
        public LoansRepository(AppDbContext context) : base(context)
        {
        }
    }
}