using System.Net;
using System.Web.Http;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using Moresca.IM.Web.Models;
using Microsoft.Data.OData;

namespace Moresca.IM.Web.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Moresca.IM.Web.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Job>("Jobs");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class JobsController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/Jobs
        public IHttpActionResult GetJobs(ODataQueryOptions<Job> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            // return Ok<IEnumerable<Job>>(jobs);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/Jobs(5)
        public IHttpActionResult GetJob([FromODataUri] System.Guid key, ODataQueryOptions<Job> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            // return Ok<Job>(job);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/Jobs(5)
        public IHttpActionResult Put([FromODataUri] System.Guid key, Delta<Job> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(job);

            // TODO: Save the patched entity.

            // return Updated(job);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/Jobs
        public IHttpActionResult Post(Job job)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(job);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/Jobs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] System.Guid key, Delta<Job> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(job);

            // TODO: Save the patched entity.

            // return Updated(job);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/Jobs(5)
        public IHttpActionResult Delete([FromODataUri] System.Guid key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
