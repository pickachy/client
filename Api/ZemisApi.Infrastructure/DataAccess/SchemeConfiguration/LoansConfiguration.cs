using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.DataAccess.SchemeConfiguration
{
    public class LoansConfiguration : IEntityTypeConfiguration<Loan>
    {
        public void Configure(EntityTypeBuilder<Loan> builder)
        {
            builder.Property(b => b.TermDays)
                .HasMaxLength(43200);
            
            builder.Property(b => b.ProcessingTimeMinutes)
                .HasMaxLength(10080);
            
            builder.Property(b => b.BorrowerAgeFrom)
                .HasMaxLength(120);
            
            builder.Property(b => b.BorrowerAgeTo)
                .HasMaxLength(120);

            builder.Property(b => b.CommissionDescription)
                .HasMaxLength(1500);
            
            builder.Property(b => b.IssueWorkingHoursDescription)
                .HasMaxLength(200);
            
            builder.Property(b => b.RepaymentMethodsDescription)
                .HasMaxLength(1500);
            
            builder.Property(b => b.WithdrawalMethodsDescription)
                .HasMaxLength(1500);
            
            builder.Property(b => b.BonusesDescription)
                .HasMaxLength(1500);
            
            builder.Property(b => b.ExtraInfo)
                .HasMaxLength(1500);
            
            builder.Property(b => b.ReceiversDescription)
                .HasMaxLength(500);
        }
    }
}