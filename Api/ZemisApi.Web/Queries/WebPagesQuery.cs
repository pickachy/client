using ZemisApi.Types;

namespace ZemisApi.Queries
{
    public class WebPagesQuery
    {
        public WebPageAggregation GetWebPageAggregation() => new WebPageAggregation
        {
            Seo = new Seo
            {
                Description = "test",
                Keywords = "keywords",
                Title = "tiltl"
            }
        };
    }
}