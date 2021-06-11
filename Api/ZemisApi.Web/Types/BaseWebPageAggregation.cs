using ZemisApi.Core.Models;

namespace ZemisApi.Types
{
    public record BaseWebPageAggregation
    {
        public Seo Seo { get; init; }
    }
}