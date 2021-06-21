using AutoMapper;
using ZemisApi.Core.Models;

namespace ZemisApi.Types.Profiles
{
    public class SeoProfile: Profile
    {
        public SeoProfile()
        {
            CreateMap<Seo, SeoDto>();
        }
    }
}