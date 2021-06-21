namespace ZemisApi.Types
{
    public record SeoDto
    {
        public string Title { get; set; }
        public string Keywords { get; set; }
        public string Description { get; set; }
    }
}