import { FaTint, FaSun, FaLeaf } from "react-icons/fa";

const TopMistakes = () => {
  const mistakes = [
    {
      icon: <FaTint className="text-4xl text-green-700" />,
      title: "Overwatering",
      desc: "Most plants don't need daily watering. Overwatering leads to root rot.",
    },
    {
      icon: <FaSun className="text-4xl text-green-700" />,
      title: "Too Much Sun",
      desc: "Direct sunlight can burn leaves. Know your plant’s light preference.",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-700" />,
      title: "Wrong Soil Type",
      desc: "Each plant needs specific soil — succulent vs. tropical are different!",
    },
  ];

  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
          🌱 Top Plant Care Mistakes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMistakes;