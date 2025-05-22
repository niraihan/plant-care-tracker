import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../hook/useTitle";
import { differenceInDays } from "date-fns";

const MyPlants = () => {
  useTitle("Plants - MyPlants");
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch user's plants
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://assignment10-server-wheat.vercel.app/plants?email=${user.email}`)
        .then((res) => {
          setMyPlants(res.data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Failed to load plants");
          setLoading(false);
        });
    }
  }, [user]);

  // delete plant
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://assignment10-server-wheat.vercel.app/plants/${id}`)
          .then(() => {
            setMyPlants((prev) => prev.filter((p) => p._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your plant has been deleted.",
              icon: "success",
            });
          })
          .catch(() => {
            toast.error("Delete failed");
          });
      }
    });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Plants</h2>
      {myPlants.length === 0 ? (
        <p className="text-center text-gray-500">You haven't added any plants yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Watering Frequency</th>
                <th>Next Watering</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPlants.map((plant) => {
                const daysLeft = plant.nextWateringDate
                  ? differenceInDays(new Date(plant.nextWateringDate), new Date())
                  : null;

                return (
                  <tr key={plant._id}>
                    <td>
                      <img src={plant.image} alt={plant.name} className="w-16 h-16 rounded" />
                    </td>
                    <td>{plant.name}</td>
                    <td>{plant.category}</td>
                    <td>{plant.wateringFrequency}</td>
                    <td>
  {daysLeft !== null ? (
    <div
      className={`badge px-4 py-2 text-sm font-semibold 
        ${daysLeft <= 0 
          ? "badge-error text-white animate-pulse" 
          : "badge-success text-white"}`}
    >
      {daysLeft <= 0 ? "⚠️ Water now!" : `💧 In ${daysLeft} day${daysLeft > 1 ? "s" : ""}`}
    </div>
  ) : (
    <div className="badge badge-ghost text-gray-500 italic">No date</div>
  )}
</td>
                    <td className="space-x-2">
                      <Link to={`/update/${plant._id}`} className="btn btn-sm btn-info">
                        Update
                      </Link>
                      <button onClick={() => handleDelete(plant._id)} className="btn btn-sm btn-error">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPlants;
