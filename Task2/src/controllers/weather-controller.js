import express from "express";

// controller to GET forecast data
export const handleGetForecast = async (req = Request, res = Response) => {
    try {
        const url = `${process.env.Weather_API}`
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== '200') {
            return res.status(400).json({ error: data.message });
        }

        const byDay = {};
        for (const item of data.list) {
            const d = new Date(item.dt * 1000);
            const key = d.toDateString();
            if (!byDay[key]) byDay[key] = { dt: item.dt, temps: [] };
            byDay[key].temps.push(item.main.temp);
        }

        const forecast = Object.values(byDay).slice(0, 5).map(day => ({
            date: new Date(day.dt * 1000).toDateString(),
            temp: (day.temps.reduce((a, b) => a + b, 0) / day.temps.length).toFixed(2)
        }));

        console.log("Weather Forecast: ");
        forecast.forEach(day => {
            // Format the date to "Day, DD Mon YYYY"
            // Example: "Tue, 21 Apr 2026"
            const dateObj = new Date(day.date);
            const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate = dateObj.toLocaleDateString('en-GB', options).replace(/ /g, ' ');

            console.log(`${formattedDate}: ${day.temp}°C`);
        });

        res.status(200).json({ "Weather Forecast": forecast });

    } catch (err) {
        res.status(500).json({
            status: "Fail to Fetch",
            message: err.message
        })
    }
}