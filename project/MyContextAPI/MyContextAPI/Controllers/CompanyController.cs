﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyContextAPI.Model.Model;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyContextAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        // GET: /<controller>/
        [Route("[action]")]
        public IActionResult GetCompanies()
        {
            List<CompanyDTO> PatientList = new List<CompanyDTO>();
            PatientList.Add(new CompanyDTO { ID = Guid.NewGuid(), CompanyReferenceID = "CP00001", Name = "com1", Description = "Description" });
            PatientList.Add(new CompanyDTO { ID = Guid.NewGuid(), CompanyReferenceID = "CP00002", Name = "com2", Description = "Description" });
            PatientList.Add(new CompanyDTO { ID = Guid.NewGuid(), CompanyReferenceID = "CP00003", Name = "com3", Description = "Description", });
            PatientList.Add(new CompanyDTO { ID = Guid.NewGuid(), CompanyReferenceID = "CP00004", Name = "com4", Description = "Description", });
            return Ok(PatientList);
        }

    }
}