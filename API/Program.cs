using API.Data;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// remove
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
var app = builder.Build();
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }
//app.UseAuthorization();
app.MapControllers();
DbInitializer.InitDb(app);
app.Run();
