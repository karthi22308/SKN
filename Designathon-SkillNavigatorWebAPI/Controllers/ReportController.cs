using Designathon_SkillNavigatorWebAPI.Data;
using Designathon_SkillNavigatorWebAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class ReportController : ControllerBase
{
    private readonly SKNdbcontext _context;

    public ReportController(SKNdbcontext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllReports()
    {
        var reports = await _context.Reports.Include(r => r.User).Include(r => r.Batch).ToListAsync();
        return Ok(reports);
    }

    [HttpPost]
    public async Task<IActionResult> CreateReport([FromBody] Report report)
    {
        _context.Reports.Add(report);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAllReports), report);
    }
}
