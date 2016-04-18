using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using nTechQuiz.Models;

namespace nTechQuiz.Controllers
{
   
    public class NavController : ApiController
    {
        // GET api/values
        public IEnumerable<Navigation> Get()
        {
            var navigation = new Navigation();
            return navigation.GetNavigationItems();
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
