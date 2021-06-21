namespace ZemisApi.Types
{
    public record LoanInAdvanceSingleWebPageAggregation : BaseWebPageAggregation
    {
        public LoanDto Loan { get; init; }
    }
}