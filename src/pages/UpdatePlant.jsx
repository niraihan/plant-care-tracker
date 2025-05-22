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

      navigate("/my-plants");
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
          <input
            name="image"
            defaultValue={plant.image}
            className="input input-bordered w-full"
            placeholder="Image URL"
            required
          />
          <input
            name="name"
            defaultValue={plant.name}
            className="input input-bordered w-full"
            placeholder="Plant Name"
            required
          />
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
          <select
            name="careLevel"
            defaultValue={plant.careLevel}
            className="select select-bordered w-full"
          >
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
          <input
            name="wateringFrequency"
            defaultValue={plant.wateringFrequency}
            className="input input-bordered w-full"
            placeholder="Watering Frequency"
            required
          />
          <input
            name="lastWateredDate"
            type="date"
            defaultValue={plant.lastWateredDate}
            className="input input-bordered w-full"
            required
          />
          <input
            name="nextWateringDate"
            type="date"
            defaultValue={plant.nextWateringDate}
            className="input input-bordered w-full"
            required
          />
          <input
            name="healthStatus"
            defaultValue={plant.healthStatus}
            className="input input-bordered w-full"
            placeholder="Health Status"
            required
          />
        </div>
        <textarea
          name="description"
          defaultValue={plant.description}
          className="textarea textarea-bordered w-full"
          rows="3"
          placeholder="Description"
          required
        ></textarea>
        {/* <Link to={`/my-plants`} >
        </Link> */}
        <button type="submit" className="btn btn-success w-full">
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;
