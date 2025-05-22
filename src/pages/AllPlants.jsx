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

    const sortedPlants = [...plants].sort((a, b) => {
        if (sortBy === "date") {
            return new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
        } else if (sortBy === "care") {
            return a.careLevel.localeCompare(b.careLevel);
        } else {
            return 0;
        }
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                🌿 All Plants
            </h2>

            {/* Sort Options */}
            <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-sm text-gray-500">
                    Showing {sortedPlants.length} plant{sortedPlants.length !== 1 && "s"}
                </div>
                <select
                    className="select select-sm select-bordered w-full sm:w-auto"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="date">Next Watering Date</option>
                    <option value="care">Care Level</option>
                </select>
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="overflow-x-auto rounded-lg border border-base-300">
                    <table className="table table-zebra w-full text-sm">
                        <thead className="bg-green-100 text-green-700 text-base">
                            <tr>
                                <th>Plant Name</th>
                                <th>Category</th>
                                <th>Care Level</th>
                                <th>Watering</th>
                                <th>Next Watering</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedPlants.map((plant) => (
                                <tr key={plant._id}>
                                    <td className="whitespace-nowrap">{plant.name}</td>
                                    <td className="whitespace-nowrap">{plant.category}</td>
                                    <td className="whitespace-nowrap">{plant.careLevel}</td>
                                    <td className="whitespace-nowrap">{plant.wateringFrequency}</td>
                                    <td className="whitespace-nowrap">{plant.nextWateringDate}</td>
                                    <td>
                                        <Link
                                            to={`/plants/${plant._id}`}
                                            className="btn btn-xs btn-outline btn-success"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {sortedPlants.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center text-red-500">
                                        No plants found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllPlants;
