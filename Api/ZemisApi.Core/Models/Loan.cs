using System.ComponentModel.DataAnnotations;
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
        [MaxLength(1500)]
        public string CommissionDescription { get; set; }
        [MaxLength(200)]
        public string IssueWorkingHoursDescription { get; set; }
        [MaxLength(1500)]
        public string RepaymentMethodsDescription { get; set; }
        [MaxLength(1500)]
        public string WithdrawalMethodsDescription { get; set; }
        [MaxLength(1500)]
        public string BonusesDescription { get; set; }
        [MaxLength(1500)]
        public string ExtraInfo { get; set; }
    }
}