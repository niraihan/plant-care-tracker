import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:5000/plants/${id}`);
                const data = await res.json();
                setPlant(data);
            } catch (err) {
                console.error("Failed to fetch plant details:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlant();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-80">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    if (!plant) {
        return (
            <div className="text-center mt-10 text-red-500">
                Plant not found or an error occurred.
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2">
                    <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl text-green-700">{plant.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{plant.description}</p>
                    <div className="space-y-1 text-sm">
                        <p><span className="font-bold">Category:</span> {plant.category}</p>
                        <p><span className="font-bold">Care Level:</span> {plant.careLevel}</p>
                        <p><span className="font-bold">Watering:</span> {plant.wateringFrequency}</p>
                        <p><span className="font-bold">Last Watered:</span> {plant.lastWateredDate}</p>
                        <p><span className="font-bold">Next Watering:</span> {plant.nextWateringDate}</p>
                        <p><span className="font-bold">Health Status:</span> {plant.healthStatus}</p>
                        <p><span className="font-bold">Added By:</span> {plant.userName} ({plant.userEmail})</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
