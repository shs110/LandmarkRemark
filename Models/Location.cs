using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace test2.Models
{
    //model to construct User location info
    public class Location
    {
        public double lattitude { get; set; }
        public double longitude { get; set; }
        public string zip { get; set; }
        public string city { get; set; }
        public string region { get; set; }

    }

    public class LocationPaginated
    {
        public List<Location> location { get; set; }
       

    }
}
