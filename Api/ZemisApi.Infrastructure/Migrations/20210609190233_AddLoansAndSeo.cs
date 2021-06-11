using Microsoft.EntityFrameworkCore.Migrations;

namespace ZemisApi.Infrastructure.Migrations
{
    public partial class AddLoansAndSeo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Loan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    AmountFrom = table.Column<int>(type: "int", nullable: false),
                    AmountTo = table.Column<int>(type: "int", nullable: false),
                    TermDays = table.Column<int>(type: "int", maxLength: 43200, nullable: false),
                    DayRate = table.Column<double>(type: "double", nullable: false),
                    InitialDayRate = table.Column<double>(type: "double", nullable: false),
                    ProcessingTimeMinutes = table.Column<int>(type: "int", maxLength: 10080, nullable: false),
                    IsOnlineProcessing = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    BorrowerAgeFrom = table.Column<int>(type: "int", maxLength: 120, nullable: false),
                    BorrowerAgeTo = table.Column<int>(type: "int", maxLength: 120, nullable: false),
                    CommissionDescription = table.Column<string>(type: "varchar(1500)", maxLength: 1500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    IssueWorkingHoursDescription = table.Column<string>(type: "varchar(200)", maxLength: 200, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    RepaymentMethodsDescription = table.Column<string>(type: "varchar(1500)", maxLength: 1500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    WithdrawalMethodsDescription = table.Column<string>(type: "varchar(1500)", maxLength: 1500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    BonusesDescription = table.Column<string>(type: "varchar(1500)", maxLength: 1500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ExtraInfo = table.Column<string>(type: "varchar(1500)", maxLength: 1500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loan", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Seo",
                columns: table => new
                {
                    Url = table.Column<string>(type: "varchar(150)", maxLength: 150, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Title = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Keywords = table.Column<string>(type: "varchar(180)", maxLength: 180, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "varchar(180)", maxLength: 180, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seo", x => x.Url);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Loan");

            migrationBuilder.DropTable(
                name: "Seo");
        }
    }
}
