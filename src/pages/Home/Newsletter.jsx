import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const subscriber = { email };

    try {
      const res = await axios.post("https://assignment10-server-wheat.vercel.app/newsletter", subscriber);
      if (res.data.insertedId) {
        toast.success("Thank you for subscribing!");
        setEmail(""); // Clear input
      } else {
        toast.error("Subscription failed. Try again later.");
      }
    } catch (err) {
      toast.error("Server error! Try again.");
      console.error(err);
    }
  };

  return (
    <section className="bg-base-200 py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">📬 Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with plant care tips and new arrivals.</p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-80"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
