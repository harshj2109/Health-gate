const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs"); // Add fs module for file reading
const app = express();

app.use(express.json());
app.use(cors());

const database = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "healthgate"
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    database.query("INSERT into userdetail (name,age,email,password) VALUES(?,?,?,?) ", [name, age, email, password],

        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT ASKED DETAILS" });
            }
        }
    );
});

app.get("/api/pharmacies", (req, res) => {
    fs.readFile('./Pharmacies.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        let pharmacyData = JSON.parse(data);

        // Implement logic to filter pharmacies based on criteria
        const is24x7 = req.query.is24x7; // Check if the query parameter for 24x7 is provided
        if (is24x7) {
            pharmacyData = pharmacyData.filter(pharmacy => pharmacy.is24x7 === true);
        }

        res.json(pharmacyData); // Send the filtered pharmacy data as a response
    });
});

app.get("/api/pathalogies", (req, res) => {
    fs.readFile('./pathalogy.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }

        let pathalogyData = JSON.parse(data);
        const city = req.query.city;
        const specialty = req.query.specialty;

        // Filter by city if provided
        if (city && pathalogyData[city]) {
            pathalogyData = { [city]: pathalogyData[city] };
        } else if (city) {
            res.status(404).json({ error: `No data found for ${city}` });
            return;
        }

        // Filter by specialty if provided
        if (specialty) {
            Object.keys(pathalogyData).forEach(cityKey => {
                const specialties = pathalogyData[cityKey];
                Object.keys(specialties).forEach(specialtyKey => {
                    if (specialtyKey !== specialty) {
                        delete specialties[specialtyKey];
                    }
                });
            });
        }

        res.json(pathalogyData);
    });
});

app.post("/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    database.query("SELECT * FROM userdetail WHERE email=? AND password=?", [email, password],

        (err, result) => {
            if (err) {
                res.setEncoding({ err: err });
            } else {
                if (result.length > 0) {
                    const user = result[1];
                    res.send(result);
                    res.json({success:true,user})

                } else {
                    res.send({ message: "Invalid password or username" });
                }
            }
        }
    );
});

// Modified API endpoint to accept query parameters for city and department
app.get("/api/hospitals", (req, res) => {
    const city = req.query.city;
    const department = req.query.department;

    fs.readFile('./Database_hospitals.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        let hospitalData = JSON.parse(data);

        // Filter hospitals based on city and department if provided
        if (city) {
            hospitalData.city_details = hospitalData.city_details.filter(cityObj => cityObj.city_name === city);
        }
        if (department) {
            hospitalData.city_details.forEach(cityObj => {
                for (const [key, value] of Object.entries(cityObj.hospitals)) {
                    if (key !== department) {
                        delete cityObj.hospitals[key];
                    }
                }
            });
        }

        res.json(hospitalData); // Send the filtered JSON data as a response
    });
});

app.listen(3001, () => {
    console.log("listening to the server...");
});
