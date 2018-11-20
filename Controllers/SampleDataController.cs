using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Device.Location;
using FreeGeoIPCore;
using Microsoft.AspNetCore.Http.Features;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using test2.Models;

namespace test2.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("http://ip-api.com/json");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var response = client.GetAsync("http://ip-api.com/json");
            HttpResponseMessage response1 = client.GetAsync("http://ip-api.com/json").Result;

            var result = response1.Content.ReadAsStringAsync().Result;
            dynamic s = Newtonsoft.Json.JsonConvert.DeserializeObject(result);
            var city = s.city.Value;


            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });




        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
