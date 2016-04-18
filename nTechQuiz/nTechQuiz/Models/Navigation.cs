using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace nTechQuiz.Models
{
    public class Navigation
    {
        public string Name { get; set; }
        public string TemplateUrl { get; set; }
        public string CssClass { get; set; }

        public List<Navigation> GetNavigationItems()
        {
            var list = new List<Navigation>();
            list.Add(new Navigation() { Name = "Home", TemplateUrl = "home/home.tpl.html", CssClass = "active" });
            list.Add(new Navigation() { Name = "Contact", TemplateUrl = "contact/contact.tpl.html", CssClass = "" });
            return list;
        }
    }
}