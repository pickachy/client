using ZemisApi.Types;

namespace ZemisApi.Queries
{
    public class Query
    {
        #region WebPage

        public WebPageAggregation GetWebPageAggregation() => new WebPageAggregation
        {
            Seo = new Seo
            {
                Description = "test",
                Keywords = "keywords",
                Title = "tiltl"
            }
        };

        #endregion
    }
}