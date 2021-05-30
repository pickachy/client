using System.ComponentModel.DataAnnotations;
using ZemisApi.Infrastructure.Repositories.Entities.Enums;

namespace ZemisApi.Infrastructure.Repositories.Entities
{
    public class LoanEntity
    {
        public LoanProviderType Id { get; set; }
        public int AmountFrom { get; set; }
        public int AmountTo { get; set; }
        [MaxLength(43200)]
        public int TermDays { get; set; }
        public double DayRate { get; set; }
        public double InitialDayRate { get; set; }
        [MaxLength(10080)]
        public int ProcessingTimeMinutes { get; set; }
        public bool IsOnlineProcessing { get; set; }
        [MaxLength(120)]
        public int BorrowerAgeFrom { get; set; }
        [MaxLength(120)]
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