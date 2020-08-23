using Microsoft.EntityFrameworkCore;

namespace Mercury.Entities
{
    public class MercuryContext : DbContext
    {
        public MercuryContext(DbContextOptions<MercuryContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClassUser>().HasKey(x => new { x.ClassId, x.UserId });
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<ClassUser> ClassUsers { get; set; }
    }
}
