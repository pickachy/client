using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ZemisApi.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class LoansController : ControllerBase
    {
        private readonly ILogger<LoansController> _logger;
        public LoansController(ILogger<LoansController> logger)
        {
            _logger = logger;
        }
    }
}