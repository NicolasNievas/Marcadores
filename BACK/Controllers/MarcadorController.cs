using marcadores_TP.Models;
using marcadores_TP.Service;
//using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace marcadores_TP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcadorController : ControllerBase
    {
        [HttpGet]
        [Route("/GetMarcadores")]
        public async Task<ActionResult<List<Marcador>>> GetMarcador()
        {
            try
            {
                var markers = await MarcadorService.GetMarkers();
                return markers;
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Se produjo un error al obtener los marcadores: {ex.Message}");
            }
        }
    }
}
