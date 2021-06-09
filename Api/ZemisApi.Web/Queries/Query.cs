using System.Threading.Tasks;
using HotChocolate;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Types;

namespace ZemisApi.Queries
{
    public class Query
    {
        #region WebPage

        public async Task<WebPageAggregation> GetWebPageAggregation(string url, [Service]ILoansRepository loansRepository, [Service]ISeoRepository seoRepository)
        {
            var loansTask = loansRepository.GetAll().ToListAsync();
            var seoTask = seoRepository.GetByUrlAsync(url);
            await Task.WhenAll(loansTask, seoTask);
            
            return new WebPageAggregation
            {
                Seo = seoTask.Result,
                Loans = loansTask.Result
            };
        }

        #endregion
    }
}