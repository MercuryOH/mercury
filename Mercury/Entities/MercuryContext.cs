using Microsoft.EntityFrameworkCore;

namespace Mercury.Entities
{
    public class MercuryContext : DbContext
    {
        public MercuryContext(DbContextOptions<MercuryContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Group> Groups { get; set; }
    }
}
