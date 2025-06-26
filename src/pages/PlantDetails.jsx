import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTitle from "../hook/useTitle";
import { AuthContext } from "../providers/AuthProvider";

const PlantDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const setTitle = useTitle();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const res = await fetch(`https://assignment10-server-wheat.vercel.app/plants/${id}`);
                const data = await res.json();
                setPlant(data);

                if (data?._id) {
                    setTitle(`${data.name} | Plants`);
                } else {
                    setTitle(`Not Found | Plants`);
                }
            } catch (err) {
                console.error("Error fetching plant:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlant();
    }, [id, setTitle]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="loading loading-ring loading-lg text-success"></span>
            </div>
        );
    }

    if (!plant || !plant._id) {
        return (
            <div className="text-center mt-10 text-red-500 font-semibold">
                ❌ Plant not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200 dark:bg-gray-900 pb-16">
            {/* ✅ Hero Section */}
            <div className="hero bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 py-10">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold mb-2">{plant.name}</h1>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Discover detailed information and care tips for your plant
                        </p>
                    </div>
                </div>
            </div>

            {/* ✅ Main Details Card */}
            <div className="max-w-5xl mx-auto px-4 mt-10">
                <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <img
                            src={plant.image}
                            alt={plant.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6 space-y-4">
                        <h2 className="text-2xl font-bold text-green-600 dark:text-green-300">
                            {plant.name}
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300">{plant.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <p><span className="font-semibold">🌿 Category:</span> {plant.category}</p>
                            <p><span className="font-semibold">🧪 Care Level:</span> {plant.careLevel}</p>
                            <p><span className="font-semibold">💧 Watering:</span> {plant.wateringFrequency}</p>
                            <p><span className="font-semibold">📅 Last Watered:</span> {plant.lastWateredDate}</p>
                            <p><span className="font-semibold">🔜 Next Watering:</span> {plant.nextWateringDate}</p>
                            <p><span className="font-semibold">📈 Health Status:</span> {plant.healthStatus}</p>
                            {user && plant.userName && plant.userEmail && (
                                <p className="col-span-2">
                                    <span className="font-semibold">👤 Added By:</span> {plant.userName} ({plant.userEmail})
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* ✅ Back Button */}
                <div className="mt-6 text-center">
                    <button
                        onClick={() => navigate("/all-plants")}
                        className="btn btn-success btn-sm"
                    >
                        ⬅️ Back to All Plants
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
