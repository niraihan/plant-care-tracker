import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { differenceInDays } from "date-fns";
import useTitle from "../../hook/useTitle";

const NewPlants = () => {
    useTitle("Plants - NewPlants");
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://assignment10-server-wheat.vercel.app/new-plants")
            .then((res) => {
                setPlants(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch new plants:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Loading new plants...</div>;
    }

    return (
        <section className="max-w-6xl mx-auto px-4 my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
                🌿 New Arrivals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {plants.map((plant) => {
                    
                    const daysLeft = plant.nextWateringDate
                        ? differenceInDays(new Date(plant.nextWateringDate), new Date())
                        : null;

                    return (
                        <div key={plant._id} className="card bg-base-100 shadow-md">
                            <figure>
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-green-700">{plant.name}</h2>
                                <p className="text-sm text-gray-600 mb-2">Category: {plant.category}</p>
                                <p className="text-sm">{plant.description}</p>

                                {/* ✅ Alert Message */}
                                {daysLeft !== null && (
                                    <p className={daysLeft <= 0 ? "text-red-600 font-bold" : "text-green-600"}>
                                        {daysLeft <= 0 ? "⚠️ Water now!" : `💧 Next watering in: ${daysLeft} days`}
                                    </p>
                                )}

                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/plants/${plant._id}`} className="btn btn-sm btn-outline btn-success">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default NewPlants;
