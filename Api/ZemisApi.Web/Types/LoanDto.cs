namespace ZemisApi.Types
{
    public record LoanDto: LoanOverviewDto
    {
        public double DayRate { get; set; }
        public bool IsOnlineProcessing { get; set; }
        public int BorrowerAgeFrom { get; set; }
        public int BorrowerAgeTo { get; set; }
        public string CommissionDescription { get; set; }
        public string IssueWorkingHoursDescription { get; set; }
        public string RepaymentMethodsDescription { get; set; }
        public string WithdrawalMethodsDescription { get; set; }
        public string BonusesDescription { get; set; }
        public string ExtraInfo { get; set; }
        public string ReceiversDescription { get; set; }
    }
}