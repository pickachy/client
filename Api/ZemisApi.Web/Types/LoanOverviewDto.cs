namespace ZemisApi.Types
{
    public record LoanOverviewDto
    {
        public int ProviderTypeId { get; set; }
        public string ProviderImageExtension { get; set; }
        public string ProviderName { get; set; }
        public string ReferralLink { get; set; }
        public int AmountFrom { get; set; }
        public int AmountTo { get; set; }
        public int TermDays { get; set; }
        public double InitialDayRate { get; set; }
        public int ProcessingTimeMinutes { get; set; }
    }
}