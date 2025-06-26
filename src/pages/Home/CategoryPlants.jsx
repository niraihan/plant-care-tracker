import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useTitle from "../../hook/useTitle";

const CategoryPlants = () => {
  const { name } = useParams(); // ক্যাটাগরি নাম URL থেকে
  useTitle(`Plants - ${name} Category`);

  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://assignment10-server-wheat.vercel.app/plants")
      .then((res) => {
        const allPlants = res.data;
        const filtered = allPlants.filter(
          (plant) => plant.category.toLowerCase() === name.toLowerCase()
        );
        setPlants(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category plants:", err);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center capitalize">
        🌿 Category: {name}
      </h2>

      {plants.length === 0 ? (
        <p className="text-center text-red-500">No plants found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plants.map((plant) => (
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
                <p className="text-sm text-gray-500 mb-2">Care: {plant.careLevel}</p>
                <p className="text-sm">{plant.description?.slice(0, 80)}...</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/plants/${plant._id}`}
                    className="btn btn-sm btn-outline btn-success"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPlants;
