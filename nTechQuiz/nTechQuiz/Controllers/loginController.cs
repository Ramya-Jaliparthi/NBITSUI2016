using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace nTechQuiz.Controllers
{
    public class LoginController : ApiController
    {
        public bool LoginUser(Login login)
        {
            if(login.UserName=="kiran" && login.Password=="1234567890")
            {
                return true;
            }
            return false;
        }
    }
    public class Login
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}

