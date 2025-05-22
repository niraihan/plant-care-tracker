import { useContext, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; 
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hook/useTitle";

const AddPlant = () => {
  useTitle("Plants - Add Plant");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // ফর্ম ডেটার জন্য useState
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    category: "succulent",
    description: "",
    careLevel: "easy",
    wateringFrequency: "",
    lastWateredDate: "",
    nextWateringDate: "",
    healthStatus: "",
  });

  // ইনপুট পরিবর্তন হ্যান্ডলার
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = async e => {
    e.preventDefault();

    // ইউজার তথ্য সহ ডেটা তৈরি
    const plantData = {
      ...formData,
      userEmail: user.email,
      userName: user.displayName,
    };

    try {
      await axios.post("https://assignment10-server-wheat.vercel.app/plants", plantData); // Backend API Call
      toast.success("Plant added successfully!"); // 
      navigate("/my-plants"); 
    } catch (error) {
      toast.error("Something went wrong!"); 
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Add a New Plant</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-base-100 p-6 rounded-xl shadow-md"
      >
        {/* Image URL */}
        <div>
          <label className="label">Image URL</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={formData.image}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Plant Name */}
        <div>
          <label className="label">Plant Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="label">Category</label>
          <select
            name="category"
            onChange={handleChange}
            value={formData.category}
            className="select select-bordered w-full"
          >
            <option value="succulent">Succulent</option>
            <option value="fern">Fern</option>
            <option value="flowering">Flowering</option>
            <option value="Purifier">Air Purifier</option>
            <option value="Tropical">Tropical</option>
            <option value="Bonsai">Bonsai</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Care Level Dropdown */}
        <div>
          <label className="label">Care Level</label>
          <select
            name="careLevel"
            onChange={handleChange}
            value={formData.careLevel}
            className="select select-bordered w-full"
          >
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Watering Frequency */}
        <div>
          <label className="label">Watering Frequency</label>
          <input
            type="text"
            name="wateringFrequency"
            onChange={handleChange}
            value={formData.wateringFrequency}
            placeholder="e.g., every 3 days"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Last Watered Date */}
        <div>
          <label className="label">Last Watered Date</label>
          <input
            type="date"
            name="lastWateredDate"
            onChange={handleChange}
            value={formData.lastWateredDate}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Next Watering Date */}
        <div>
          <label className="label">Next Watering Date</label>
          <input
            type="date"
            name="nextWateringDate"
            onChange={handleChange}
            value={formData.nextWateringDate}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Health Status */}
        <div>
          <label className="label">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            onChange={handleChange}
            value={formData.healthStatus}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-success w-full">
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
