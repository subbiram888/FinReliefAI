import { useEffect, useState } from "react";
import { getHistory } from "../services/history";
import "../styles/historytable.css";

export default function HistoryTable() {

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        try {

            const data = await getHistory();

            setHistory(data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }
    };

    if (loading) {

        return (
            <div className="history-card">

                <h2>Loading History...</h2>

            </div>
        );

    }

    if (history.length === 0) {

        return (
            <div className="history-card">

                <h2>No AI History Found</h2>

                <p>
                    Generate an AI Negotiation Strategy or Negotiation Email to
                    see history here.
                </p>

            </div>
        );

    }

    return (

        <div className="history-card">

            <table className="history-table">

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Type</th>

                        <th>Response</th>

                    </tr>

                </thead>

                <tbody>

                    {history.map((item) => (

                        <tr key={item.id}>

                            <td>
                                {new Date(item.created_at).toLocaleString()}
                            </td>

                            <td>
                                {item.query_type}
                            </td>

                            <td
                                style={{
                                    maxWidth: "600px",
                                    whiteSpace: "pre-wrap"
                                }}
                            >
                                {item.response}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}