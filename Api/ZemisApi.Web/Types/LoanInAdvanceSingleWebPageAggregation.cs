using ZemisApi.Core.Models;

namespace ZemisApi.Types
{
    public record LoanInAdvanceSingleWebPageAggregation : BaseWebPageAggregation
    {
        public Loan Loan { get; init; }
    }
}