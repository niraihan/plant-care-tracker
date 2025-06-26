import React from "react";
import useTitle from "../hook/useTitle";

const SupportPage = () => {
  useTitle("PlantCare | Support");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Support</h1>
      <p className="text-gray-700 mb-8 text-center">
        Browse our frequently asked questions to find help quickly.
      </p>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold text-green-700">
            🪴 How do I add a new plant?
          </div>
          <div className="collapse-content text-gray-700">
            Go to "Add Plant" after logging in. Fill in the plant name, type, watering schedule, and upload an image if you'd like.
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold text-green-700">
            💧 How to track watering or sunlight logs?
          </div>
          <div className="collapse-content text-gray-700">
            Under "My Plants", you can update care history and keep notes on watering, repotting, and sunlight.
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold text-green-700">
            🛟 Still need help?
          </div>
          <div className="collapse-content text-gray-700">
            Contact our support team via email: <a href="mailto:support@plantcare.com" className="text-green-700 underline">support@plantcare.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
