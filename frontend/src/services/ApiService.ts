import axios from "axios";

class ApiService {
    static async loadRoutesMatched(lat: Number, lon: Number) {
        console.log("http://localhost:8080/legs/area?bottomleft=13,52&topright=14,53&minWeight=1");
        // return fetch("/ridesMapMatched.json").then(r => r.json());
        return fetch("http://localhost:8080/legs/area?bottomleft=13,52&topright=14,53&minWeight=1").then(r => r.json());
    }

    static async loadRoutes(lat1: Number, lon1: Number, lat2: Number, lon2: Number) {
        console.log(`http://localhost:8080/rides/area?bottomleft=${ lon1 },${ lat1 }&topright=${ lon2 },${ lat2 }`);
        return fetch(`http://localhost:8080/rides/area?bottomleft=${ lon1 },${ lat1 }&topright=${ lon2 },${ lat2 }`).then(r => r.json());
    }

    static async loadIncidents(lat: Number, lon: Number) {
        return fetch("http://localhost:8080/incidents?lon=" + lon + "&lat=" + lat + "&max=" + 100000).then(r => r.json());
    }

    static async startDataProcessing() {
        return (await axios.get("/api/actions/startDataProcessing")).data;
    }

    static async loadRide(rideId: Number) {
        let ride = fetch(`http://localhost:8080/rides/${rideId}`).then(r => r.json());
        let incidents = fetch(`http://localhost:8080/rides/${rideId}/incidents/all`).then(r => r.json());

        // Waiting for both request simultanously
        return {
            ride: (await ride),
            incidents: (await incidents)
        };
    }

    static async loadIncidentsOnRide(rideId: Number) {
        return fetch(`http://localhost:8080/rides/${rideId}/incidents/all`).then(r => r.json());
    }
}

export { ApiService };
