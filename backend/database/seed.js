const { Pool } = require('pg');

// PostgreSQL connection settings
const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

// Sample demo data
const users = [
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
    { name: 'User 3', email: 'user3@example.com' },
];

const reports = [
    { title: 'Report 1', content: 'Content for report 1' },
    { title: 'Report 2', content: 'Content for report 2' },
    { title: 'Report 3', content: 'Content for report 3' },
];

const alerts = [
    { message: 'Alert 1', level: 'high' },
    { message: 'Alert 2', level: 'medium' },
    { message: 'Alert 3', level: 'low' },
];

const sensors = [
    { type: 'Temperature Sensor', location: 'Bauchi, Nigeria' },
    { type: 'Humidity Sensor', location: 'Bauchi, Nigeria' },
    { type: 'Pressure Sensor', location: 'Bauchi, Nigeria' },
];

const responseUnits = [
    { name: 'Response Unit 1', type: 'Fire Truck', location: 'Bauchi, Nigeria' },
    { name: 'Response Unit 2', type: 'Ambulance', location: 'Bauchi, Nigeria' },
    { name: 'Response Unit 3', type: 'Police Car', location: 'Bauchi, Nigeria' },
];

async function seedDatabase() {
    try {
        await pool.connect();

        // Seed Users
        for (const user of users) {
            await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.name, user.email]);
        }

        // Seed Reports
        for (const report of reports) {
            await pool.query('INSERT INTO reports (title, content) VALUES ($1, $2)', [report.title, report.content]);
        }

        // Seed Alerts
        for (const alert of alerts) {
            await pool.query('INSERT INTO alerts (message, level) VALUES ($1, $2)', [alert.message, alert.level]);
        }

        // Seed Sensors
        for (const sensor of sensors) {
            await pool.query('INSERT INTO sensors (type, location) VALUES ($1, $2)', [sensor.type, sensor.location]);
        }

        // Seed Response Units
        for (const responseUnit of responseUnits) {
            await pool.query('INSERT INTO response_units (name, type, location) VALUES ($1, $2, $3)', [responseUnit.name, responseUnit.type, responseUnit.location]);
        }

        console.log('Database seeded successfully!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await pool.end();
    }
}

seedDatabase();