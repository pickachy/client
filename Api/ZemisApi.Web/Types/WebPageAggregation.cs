using System.Collections.Generic;
using ZemisApi.Core.Models;

namespace ZemisApi.Types
{
    public class WebPageAggregation
    {
        public Seo Seo { get; init; }
        public IEnumerable<Loan> Loans { get; set; }
    }
}