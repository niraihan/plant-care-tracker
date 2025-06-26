import { useEffect, useState } from "react";
import axios from "axios";
import useTitle from "../../hook/useTitle";

const NewsletterSubscribers = () => {
    useTitle("Dashboard - Newsletter Subscribers");
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://assignment10-server-wheat.vercel.app/newsletter")
            .then(res => {
                setSubscribers(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching subscribers:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    return (
        <div className="max-w-5xl  text-green-700 dark:text-green-300 mx-auto p-6">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                📧 Newsletter Subscribers ({subscribers.length})
            </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-green-100 text-green-700 text-base">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Subscribed At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber, index) => (
                            <tr key={subscriber._id}>
                                <td>{index + 1}</td>
                                <td>{subscriber.email}</td>
                                <td>{new Date(subscriber.subscribedAt).toLocaleString()}</td>
                            </tr>
                        ))}
                        {subscribers.length === 0 && (
                            <tr>
                                <td colSpan="3" className="text-center text-red-500">
                                    No subscribers found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsletterSubscribers;
