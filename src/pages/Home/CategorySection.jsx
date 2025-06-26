import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

const CategorySection = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = user?.email
      ? `https://assignment10-server-wheat.vercel.app/plants?email=${user.email}`
      : `https://assignment10-server-wheat.vercel.app/plants`;

    axios
      .get(url)
      .then((res) => {
        const plants = res.data;
        const uniqueCategories = [...new Set(plants.map((plant) => plant.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
      });
  }, [user]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        🌿 {user ? "Your" : "All"} Plant Categories
      </h2>

      {categories.length === 0 ? (
        <p className="text-center text-gray-500">
          {user ? "No categories found for your plants." : "No plants found."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card bg-base-100 shadow-md hover:shadow-xl border rounded-xl"
            >
              <div className="card-body items-center text-center">
                <FaTags className="text-3xl text-green-600 mb-2" />
                <h3 className="text-xl font-semibold capitalize text-green-700">{cat}</h3>
                <p className="text-sm text-gray-500 mb-3">See all {cat} plants</p>
                <div className="card-actions">
                  <Link
                    to={`/category/${cat}`}
                    className="btn btn-outline btn-success btn-sm"
                  >
                    See Plants
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
