using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using test2.Models;


namespace test2.Controllers
{
    public class HomeController : Controller

        
    {

        public IActionResult Index()
        {

            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        //public Location GetLocation()
        //{
        //    Location location = new Location();
        //    HttpClient client = new HttpClient();
        //    client.BaseAddress = new Uri("http://ip-api.com/json");
        //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        //    HttpResponseMessage response = client.GetAsync("http://ip-api.com/json").Result;



        //    var result = response.Content.ReadAsStringAsync().Result;
        //    dynamic s = Newtonsoft.Json.JsonConvert.DeserializeObject(result);

        //    location.lattitude = s.lat.Value;
        //    location.longitude = s.lon.Value;
        //    location.zip = s.zip.Value;
        //    location.region = s.region.Value;

        //    return location;


        //}
    }
}
