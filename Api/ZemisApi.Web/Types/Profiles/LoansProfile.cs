using AutoMapper;
using ZemisApi.Core.Models;
using ZemisApi.Utils;

namespace ZemisApi.Types.Profiles
{
    public class LoansProfile: Profile
    {
        public LoansProfile()
        {
            CreateMap<Loan, LoanDto>()
                .ForMember(member => member.ProviderName, options => options.MapFrom(member => LoanProviderUtils.LoanProviderMetaMap[member.Id].Name))
                .ForMember(member => member.ProviderImageExtension, options => options.MapFrom(member => LoanProviderUtils.LoanProviderMetaMap[member.Id].ImageExtension))
                .ForMember(member => member.ReferralLink, options => options.MapFrom(member => LoanProviderUtils.LoanProviderMetaMap[member.Id].ReferralLink))
                .ForMember(member => member.ExtraInfo, options => options.MapFrom(member => member.ExtraInfo.Replace("|", "<br>")))
                .ForMember(member => member.RepaymentMethodsDescription, options => options.MapFrom(member => member.RepaymentMethodsDescription.Replace("|", ",")))
                .ForMember(member => member.ProviderTypeId, options => options.MapFrom(member => member.Id));
            
            CreateMap<Loan, LoanOverviewDto>()
                .ForMember(member => member.ProviderName, options => options.MapFrom(member => LoanProviderUtils.LoanProviderMetaMap[member.Id].Name))
                .ForMember(member => member.ProviderImageExtension, options => options.MapFrom(member => LoanProviderUtils.LoanProviderMetaMap[member.Id].ImageExtension))
                .ForMember(member => member.ProviderTypeId, options => options.MapFrom(member => member.Id))
                .ForMember(member => member.ReferralLink, options => options.MapFrom(member => LoanProviderUtils.LoanProviderMetaMap[member.Id].ReferralLink));
        }
    }
}