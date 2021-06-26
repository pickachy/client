using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using HotChocolate;
using Microsoft.EntityFrameworkCore;
using ZemisApi.Core.Interfaces.Repositories;
using ZemisApi.Core.Models.Enums;
using ZemisApi.Types;

namespace ZemisApi.Queries
{
    public class Query
    {
        private readonly IMapper _mapper;
        
        public Query(IMapper mapper)
        {
            _mapper = mapper;
        }
        
        #region WebPage

        public async Task<HomeWebPageAggregation> GetHomeWebPageAggregation([Service]ILoansRepository loansRepository, [Service]ISeoRepository seoRepository)
        {
            var loansTask = loansRepository.GetAll().ToListAsync();
            var seoTask = seoRepository.GetByUrl("/");
            await Task.WhenAll(loansTask, seoTask);
            
            return new HomeWebPageAggregation
            {
                Seo = _mapper.Map<SeoDto>(seoTask.Result),
                Loans = _mapper.Map<IEnumerable<LoanDto>>(loansTask.Result)
            };
        }
        
        public async Task<LoanInAdvanceSingleWebPageAggregation> GetLoanInAdvanceSingleWebPageAggregation(int id, [Service]ILoansRepository loansRepository, [Service]ISeoRepository seoRepository)
        {
            if (!Enum.TryParse(id.ToString(), out LoanProviderType loanProviderType))
            {
                throw new Exception("Invalid Provider");
            }
            
            var loanTask = loansRepository.GetById(loanProviderType);
            var seoTask = seoRepository.GetByUrl("loans/mfo/$");
            await Task.WhenAll(loanTask, seoTask);

            var seoDto = _mapper.Map<SeoDto>(seoTask.Result);
            var loanDto = _mapper.Map<LoanDto>(loanTask.Result);
            
            seoDto.Title = string.Format(seoDto.Title, 
                loanDto.AmountTo, 
                loanDto.ProviderName, 
                loanDto.InitialDayRate);
            
            seoDto.Description = string.Format(seoDto.Description, 
                loanDto.ProviderName,
                loanDto.InitialDayRate);
            
            return new LoanInAdvanceSingleWebPageAggregation
            {
                Seo = seoDto,
                Loan = loanDto
            };
        }

        #endregion
    }
}