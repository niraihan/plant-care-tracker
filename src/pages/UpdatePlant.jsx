import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useTitle from "../hook/useTitle";

const UpdatePlant = () => {
  useTitle("Plants - UpdatePlant");

  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  // 1️⃣ Load plant data from backend
  useEffect(() => {
    axios
      .get(`https://assignment10-server-wheat.vercel.app/plants/${id}`)
      .then(res => {
        setPlant(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch plant:", err);
      });
  }, [id]);

  // 2️⃣ Handle form submit to update the plant
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const updatedPlant = {
      image: form.image.value,
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWateredDate: form.lastWateredDate.value,
      nextWateringDate: form.nextWateringDate.value,
      healthStatus: form.healthStatus.value,
    };

    try {
      await axios.put(`https://assignment10-server-wheat.vercel.app/plants/${id}`, updatedPlant);

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Your plant has been updated successfully.",
      });

      navigate("/dashboard/my-plants");
    } catch (error) {
      console.error("Error updating plant:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Could not update the plant.",
      });
    }
  };

  // 3️⃣ Show loader while fetching
  if (!plant) {
    return (
      <div className="flex justify-center items-center h-32">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  // 4️⃣ Form UI with default values
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl text-center font-bold text-green-700 mb-6">
        ✏️ Update Plant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Image URL */}
          <div>
            <label className="label">Image URL</label>
            <input
              name="image"
              defaultValue={plant.image}
              className="input input-bordered w-full"
              placeholder="Image URL"
              required
            />
          </div>

          {/* Plant Name */}
          <div>
            <label className="label">Plant Name</label>
            <input
              name="name"
              defaultValue={plant.name}
              className="input input-bordered w-full"
              placeholder="Plant Name"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <select
              name="category"
              defaultValue={plant.category}
              className="select select-bordered w-full"
            >
              <option>Succulent</option>
              <option>Fern</option>
              <option>Vine</option>
              <option>Flowering</option>
              <option>Other</option>
            </select>
          </div>

          {/* Care Level */}
          <div>
            <label className="label">Care Level</label>
            <select
              name="careLevel"
              defaultValue={plant.careLevel}
              className="select select-bordered w-full"
            >
              <option>Easy</option>
              <option>Moderate</option>
              <option>Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div>
            <label className="label">Watering Frequency</label>
            <input
              name="wateringFrequency"
              defaultValue={plant.wateringFrequency}
              className="input input-bordered w-full"
              placeholder="e.g., every 3 days"
              required
            />
          </div>

          {/* Last Watered Date */}
          <div>
            <label className="label">Last Watered Date</label>
            <input
              name="lastWateredDate"
              type="date"
              defaultValue={plant.lastWateredDate}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Next Watering Date */}
          <div>
            <label className="label">Next Watering Date</label>
            <input
              name="nextWateringDate"
              type="date"
              defaultValue={plant.nextWateringDate}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Health Status */}
          <div>
            <label className="label">Health Status</label>
            <input
              name="healthStatus"
              defaultValue={plant.healthStatus}
              className="input input-bordered w-full"
              placeholder="e.g., Healthy / Needs Attention"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={plant.description}
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Write something about this plant"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-full">
          Update Plant
        </button>
      </form>

    </div>
  );
};

export default UpdatePlant;
