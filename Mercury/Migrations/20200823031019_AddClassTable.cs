using Microsoft.EntityFrameworkCore.Migrations;

namespace Mercury.Migrations
{
    public partial class AddClassTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClassId",
                table: "Groups",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Classes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    CalendarId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Groups_ClassId",
                table: "Groups",
                column: "ClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Classes_ClassId",
                table: "Groups",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Classes_ClassId",
                table: "Groups");

            migrationBuilder.DropTable(
                name: "Classes");

            migrationBuilder.DropIndex(
                name: "IX_Groups_ClassId",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "ClassId",
                table: "Groups");
        }
    }
}
