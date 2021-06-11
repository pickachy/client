using ZemisApi.Core.Models.Enums;

namespace ZemisApi.Core.Models
{
    public class Loan
    {
        public LoanProviderType Id { get; set; }
        public int AmountFrom { get; set; }
        public int AmountTo { get; set; }
        public int TermDays { get; set; }
        public double DayRate { get; set; }
        public double InitialDayRate { get; set; }
        public int ProcessingTimeMinutes { get; set; }
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