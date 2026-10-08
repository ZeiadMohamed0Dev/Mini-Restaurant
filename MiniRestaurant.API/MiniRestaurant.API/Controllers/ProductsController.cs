using Microsoft.AspNetCore.Mvc;
using MiniRestaurant.API.Models;

namespace MiniRestaurant.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Burger",
                    Price = 500
                },

                new Product
                {
                    Id = 2,
                    Name = "Pizza",
                    Price = 500
                },

                new Product
                {
                    Id = 3,
                    Name = "Pasta",
                    Price = 500
                }
            };

            return Ok(products);
        }
    }
}