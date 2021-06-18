using System.Collections.Generic;
using ZemisApi.Core.Models.Enums;

namespace ZemisApi.Utils
{
    public static class LoanProviderUtils
    {
        public static Dictionary<LoanProviderType, LoanProviderMeta> LoanProviderMetaMap { get; } =
            new()
            {
                {LoanProviderType.CREDIT7, new LoanProviderMeta {Name = "Credit7", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sbonvr9i0z"} },
                {LoanProviderType.CREDIT_PLUS, new LoanProviderMeta{ Name = "CreditPlus", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/shuaw7b4k7"}},
                {LoanProviderType.MY_CREDIT, new LoanProviderMeta{ Name = "My Credit", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sy82tlgtdu"}},
                {LoanProviderType.SHVIDKO_GROSHI, new LoanProviderMeta{ Name = "Швидко грошi", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/s644yee1xc"}},
                {LoanProviderType.DINERO, new LoanProviderMeta{ Name = "Dinero", ImageExtension = "svg", ReferralLink = ""}},
                {LoanProviderType.E_GROSHI, new LoanProviderMeta{ Name = "E-Groshi", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sq0xvyu2gf"}},
                {LoanProviderType.TENGO, new LoanProviderMeta{ Name = "Tengo", ImageExtension = "svg", ReferralLink = ""}},
                {LoanProviderType.CCLOAN, new LoanProviderMeta{ Name = "Ccloan", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sh3z8t5ykn"}},
                {LoanProviderType.CASH_BERRY, new LoanProviderMeta{ Name = "Cash Berry", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/ssipu8cc5o"}},
                {LoanProviderType.ALEX_CREDIT, new LoanProviderMeta{ Name = "Alex Credit", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sj0lcxzz9v"}},
                {LoanProviderType.MONEYVEO, new LoanProviderMeta{ Name = "Moneyveo", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/srmji44729"}},
                {LoanProviderType.MILOAN, new LoanProviderMeta{ Name = "Miloan", ImageExtension = "svg", ReferralLink = ""}},
                {LoanProviderType.BISTRO_ZAYM, new LoanProviderMeta{ Name = "Быстро Займ", ImageExtension = "png", ReferralLink = "https://cmtrckr.net/go/sxdql0ezf9"}},
                {LoanProviderType.VASHA_GOTIVOCHKA, new LoanProviderMeta{ Name = "Ваша готiвочка", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sbdkh1ebb5"}},
                {LoanProviderType.FORZA_CREDIT, new LoanProviderMeta{ Name = "Forza Credit", ImageExtension = "png", ReferralLink = "https://cmtrckr.net/go/sfl51vj0r7"}},
                {LoanProviderType.SOS_CREDIT, new LoanProviderMeta{ Name = "Sos Credit", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/s7j4gf9msx"}},
                {LoanProviderType.CREDIT_KASSA, new LoanProviderMeta{ Name = "Credit Kassa", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/s0od86z9k3"}},
                {LoanProviderType.ZECREDIT, new LoanProviderMeta{ Name = "Zecredit", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/siy6fn04o2"}},
                {LoanProviderType.KACHAY_GROSHI, new LoanProviderMeta{ Name = "Качай грошi", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/s5jouxgda1"}},
                {LoanProviderType.MONEY4YOU, new LoanProviderMeta{ Name = "Money4You", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sdb8gbw4tx"}},
                {LoanProviderType.LOANY, new LoanProviderMeta{ Name = "Loany", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sz019sm7gn"}},
                {LoanProviderType.KF_UA, new LoanProviderMeta{ Name = "KF.UA", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/s6dgvirkf1"}},
                {LoanProviderType.CREDIT_BOX, new LoanProviderMeta{ Name = "Credit Box", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sruyzxurwp"}},
                {LoanProviderType.POZICHKA, new LoanProviderMeta{ Name = "Pozichka", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/s8unqembku"}},
                {LoanProviderType.MONEY_BOOM, new LoanProviderMeta{ Name = "Money Boom", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/shuaw7b4k7"}},
                {LoanProviderType.NEOCREDIT, new LoanProviderMeta{ Name = "Neocredit", ImageExtension = "png", ReferralLink = "https://cmtrckr.net/go/sc64561c7a"}},
                {LoanProviderType.BANANA_CREDIT, new LoanProviderMeta{ Name = "Banana Credit", ImageExtension = "png", ReferralLink = "https://cmtrckr.net/go/s25x23hgas"}},
                {LoanProviderType.EVRO_GROSHI, new LoanProviderMeta{ Name = "Євро гроші", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/scaxzwahqw"}},
                {LoanProviderType.MONETKA, new LoanProviderMeta{ Name = "Monetka", ImageExtension = "svg", ReferralLink = "https://cmtrckr.net/go/sc50bxq2h7"}},
            };
        
    }

    public class LoanProviderMeta
    {
        public string Name { get; set; }
        public string ImageExtension { get; set; }
        public string ReferralLink { get; set; }
    }
}