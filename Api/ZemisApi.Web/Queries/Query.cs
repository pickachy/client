using System;
using System.Threading.Tasks;
using HotChocolate;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models.Enums;
using ZemisApi.Types;

namespace ZemisApi.Queries
{
    public class Query
    {
        #region WebPage

        public async Task<HomeWebPageAggregation> GetHomeWebPageAggregation([Service]ILoansRepository loansRepository, [Service]ISeoRepository seoRepository)
        {
            var loansTask = loansRepository.GetAll().ToListAsync();
            var seoTask = seoRepository.GetByHomePage();
            await Task.WhenAll(loansTask, seoTask);
            
            return new HomeWebPageAggregation
            {
                Seo = seoTask.Result,
                Loans = loansTask.Result
            };
        }
        
        public async Task<LoanInAdvanceSingleWebPageAggregation> GetLoanInAdvanceSingleWebPageAggregation(int id, [Service]ILoansRepository loansRepository, [Service]ISeoRepository seoRepository)
        {
            if (!Enum.TryParse(id.ToString(), out LoanProviderType loanProviderType))
            {
                throw new Exception("AA");
            }
            
            var loanTask = loansRepository.GetById(loanProviderType);
            var seoTask = seoRepository.GetByHomePage();
            await Task.WhenAll(loanTask, seoTask);

            seoTask.Result.Description = string.Join(seoTask.Result.Description, 
                loanTask.Result.Id, 
                loanTask.Result.AmountFrom, 
                loanTask.Result.AmountTo, 
                loanTask.Result.InitialDayRate);
            
            return new LoanInAdvanceSingleWebPageAggregation
            {
                Seo = seoTask.Result,
                Loan = loanTask.Result
            };
        }

        #endregion
    }
}