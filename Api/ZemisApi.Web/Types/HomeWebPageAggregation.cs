using System.Collections.Generic;

namespace ZemisApi.Types
{
    public record HomeWebPageAggregation: BaseWebPageAggregation
    {
        public IEnumerable<LoanDto> Loans { get; init; }
    }
}