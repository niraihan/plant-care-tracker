import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import useTitle from "../hook/useTitle";

const AllPlants = () => {
    useTitle("Plants - AllPlants");
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("");
    const [filterCategory, setFilterCategory] = useState(""); //✳️ নতুন ফিল্টার স্টেট

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                setLoading(true);
                const res = await axios.get("https://assignment10-server-wheat.vercel.app/plants");
                setPlants(res.data);
            } catch (error) {
                console.error("Error fetching plants:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlants();
    }, []);

    const filteredPlants = filterCategory
        ? plants.filter(plant => plant.category === filterCategory)
        : plants;

    const sortedPlants = [...filteredPlants].sort((a, b) => {
        if (sortBy === "date") {
            return new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
        } else if (sortBy === "care") {
            return a.careLevel.localeCompare(b.careLevel);
        }
        return 0;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">🌿 All Plants</h2>

            <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-3 w-full md:w-auto">
                    <select
                        className="select select-sm select-bordered"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="date">Next Watering Date</option>
                        <option value="care">Care Level</option>
                    </select>

                    <select
                        className="select select-sm select-bordered"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {[...new Set(plants.map(p => p.category))].map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="text-sm text-gray-500">
                    Showing {sortedPlants.length} plant{sortedPlants.length !== 1 && "s"}
                </div>
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sortedPlants.map(plant => (
                        <div key={plant._id} className="card bg-base-100 shadow-lg">
                            <figure>
                                <img src={plant.image} alt={plant.name} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-green-700">{plant.name}</h2>
                                <p><strong>Category:</strong> {plant.category}</p>
                                <p><strong>Care Level:</strong> {plant.careLevel}</p>
                                <p><strong>Watering:</strong> {plant.wateringFrequency}</p>
                                <p><strong>Next Watering:</strong> {plant.nextWateringDate}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/plants/${plant._id}`} className="btn btn-sm btn-success">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllPlants;
