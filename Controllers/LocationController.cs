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
    public class LocationController : Controller
    {
       
        [HttpGet("[action]")]
        public Location GetLocation()
        {
            //Fetch user location based on IP address
            Location location = new Location();
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("http://ip-api.com/json");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = client.GetAsync("http://ip-api.com/json").Result;



            var result = response.Content.ReadAsStringAsync().Result;
            dynamic s = Newtonsoft.Json.JsonConvert.DeserializeObject(result);

            location.lattitude = s.lat.Value;
            location.longitude = s.lon.Value;
            location.zip = s.zip.Value;
            location.region = s.region.Value;
            location.city = s.city.Value;

            //LocationPaginated locationList = new LocationPaginated();
            return location;


        }

       
    }
}
