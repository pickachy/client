using System.Collections.Generic;
using ZemisApi.Core.Models;

namespace ZemisApi.Types
{
    public record HomeWebPageAggregation: BaseWebPageAggregation
    {
        public IEnumerable<Loan> Loans { get; init; }
    }
}