// Data/StudentDbContext.cs
using Microsoft.EntityFrameworkCore;
using StudentAPI.Model;
using System.Collections.Generic;


namespace StudentAPI.Model
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) { }
        public DbSet<Student> Students { get; set; }

        // Data/StudentDbContext.cs (override OnModelCreating)
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, Name = "Ali", Age = 20, Email = "ali@example.com" },
                new Student { Id = 2, Name = "Ayesha", Age = 22, Email = "ayesha@example.com" },
                new Student { Id = 3, Name = "Bilal", Age = 19, Email = "bilal@example.com" }
            );
        }

    }
}