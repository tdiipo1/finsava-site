"use client";

import { useState } from "react";

interface WaitlistData {
  total: number;
  emails: string[];
}

export default function WaitlistAdmin() {
  const [secret, setSecret] = useState("");
  const [data, setData] = useState<WaitlistData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const fetchWaitlist = async () => {
    if (!secret.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/waitlist/list?secret=${encodeURIComponent(secret)}`);
      if (res.status === 401) {
        setError("Invalid secret. Check your WAITLIST_ADMIN_SECRET.");
        setData(null);
        setAuthenticated(false);
      } else {
        const json = await res.json();
        setData(json);
        setAuthenticated(true);
      }
    } catch {
      setError("Failed to fetch waitlist.");
    }
    setLoading(false);
  };

  const downloadCsv = () => {
    window.open(`/api/waitlist/list?secret=${encodeURIComponent(secret)}&format=csv`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Waitlist Admin</h1>
        <p className="text-gray-400 mb-8">View and export Finsava waitlist signups.</p>

        {!authenticated ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Admin Secret</label>
              <input
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchWaitlist()}
                placeholder="Enter WAITLIST_ADMIN_SECRET"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={fetchWaitlist}
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
            >
              {loading ? "Loading..." : "View Waitlist"}
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Summary */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-4xl font-bold text-blue-400">{data?.total || 0}</span>
                <span className="text-gray-400 ml-2">
                  {data?.total === 1 ? "signup" : "signups"}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={fetchWaitlist}
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Refresh
                </button>
                <button
                  onClick={downloadCsv}
                  className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 transition-colors"
                >
                  Export CSV
                </button>
              </div>
            </div>

            {/* Email list */}
            {data && data.emails.length > 0 ? (
              <div className="rounded-xl border border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700 bg-gray-900/50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">#</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.emails.map((email, i) => (
                      <tr key={email} className="border-b border-gray-800 hover:bg-gray-900/30">
                        <td className="px-4 py-3 text-sm text-gray-500">{i + 1}</td>
                        <td className="px-4 py-3 text-sm">{email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rounded-xl border border-gray-700 px-6 py-12 text-center">
                <p className="text-gray-400">No signups yet. Share your landing page!</p>
              </div>
            )}

            <button
              onClick={() => { setAuthenticated(false); setData(null); setSecret(""); }}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Lock
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
