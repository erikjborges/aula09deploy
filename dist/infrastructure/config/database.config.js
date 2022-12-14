"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const databaseConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: 'mysql'
};
if (process.env.NODE_ENV === 'production') {
    Object.assign(databaseConfig, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}
exports.default = databaseConfig;
module.exports = databaseConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL2NvbmZpZy9kYXRhYmFzZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBdUI7QUFFdkIsTUFBTSxjQUFjLEdBQUc7SUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUN6QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQzdCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDN0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUN6QixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQzdCLE9BQU8sRUFBRSxPQUFPO0NBQ25CLENBQUE7QUFFRCxJQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBQztJQUNyQyxNQUFNLENBQUMsTUFBTSxDQUNULGNBQWMsRUFDZDtRQUNJLGNBQWMsRUFBRTtZQUNaLEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUsSUFBSTtnQkFDYixrQkFBa0IsRUFBRSxLQUFLO2FBQzVCO1NBQ0o7S0FDSixDQUNKLENBQUE7Q0FDSjtBQUVELGtCQUFlLGNBQWMsQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyJ9