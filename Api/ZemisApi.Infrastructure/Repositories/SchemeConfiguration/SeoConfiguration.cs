using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ZemisApi.Core.Models;

namespace ZemisApi.Infrastructure.Repositories.SchemeConfiguration
{
    public class SeoConfiguration : IEntityTypeConfiguration<Seo>
    {
        public void Configure(EntityTypeBuilder<Seo> builder)
        {
            builder.HasKey(b => b.Url);
            
            builder.Property(b => b.Url)
                .HasMaxLength(150);
            
            builder.Property(b => b.Title)
                .HasMaxLength(80);
            
            builder.Property(b => b.Description)
                .HasMaxLength(180);
            
            builder.Property(b => b.Keywords)
                .HasMaxLength(180);
        }
    }
}