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
using test2.databaseModels;

namespace test2.Controllers
{
    [Route("api/[controller]")]
    public class UserNoteController : Controller
    {
        mydbcontext db = new mydbcontext();

        [HttpGet("[action]")]
        public IEnumerable<UserNote> GetAllNotes()
        {
            try
            {
                return db.UserNote.ToList();
            }
            catch
            {
                throw;
            }
        }

        [HttpPost("[action]")]
        public int AddNote(string userName , string Note)
        {
            try
            {
                var data = db.UserNote.ToList();
                var lastuser = data[data.Count -1 ];
                var locationController = new test2.Controllers.LocationController();
                var location = locationController.GetLocation();                
               var userNote = new test2.databaseModels.UserNote {
                   id = lastuser.id +1,
                    Lattitude = (float)Convert.ToDecimal(location.lattitude),
                    Longitude = (float)Convert.ToDecimal(location.longitude),
                    City = location.city,
                    UserName = userName,
                    Note = Note
                };
                db.UserNote.Add(userNote);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        [HttpPost("[action]")]
        public IEnumerable<UserNote> SearchNotes(string searchstring)
        {
            var data = db.UserNote.ToList();

            var result = data.Where(f => f.UserName.ToLower().Contains(searchstring.ToLower()) || f.Note.ToLower().Contains(searchstring.ToLower())).Distinct().ToList();

            return result;
        }




    }
           


    
}
