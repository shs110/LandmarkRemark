using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace test2.databaseModels
{
    public partial class UserNote
    {
        mydbcontext db = new mydbcontext();

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public string UserName { get; set; }
        public string City { get; set; }
        public float? Lattitude { get; set; }
        public float? Longitude { get; set; }
        public string Note { get; set; }
    }
}
