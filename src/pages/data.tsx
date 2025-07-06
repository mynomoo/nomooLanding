import { useEffect, useState } from 'react';

const LOGIN_KEY = 'nomooClusterDataLoggedIn';
const USERNAME = 'nomooClusterData';
const PASSWORD = 'cluster0#@NV';

export default function DataPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState<{ email: string; createdAt: string; source?: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem(LOGIN_KEY) === 'true') {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchUsers();
    }
    // eslint-disable-next-line
  }, [loggedIn]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === USERNAME && password === PASSWORD) {
      setLoggedIn(true);
      localStorage.setItem(LOGIN_KEY, 'true');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/wishlist?admin=1');
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      } else {
        setError(data.error || 'Failed to fetch users');
      }
    } catch (err) {
      setError('Failed to fetch users');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem(LOGIN_KEY);
    setUsername('');
    setPassword('');
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-[#F5FFF5] flex flex-col items-center py-10 px-2">
      {/* Minimal Admin Header (logo only, always visible) */}
      <div className="flex justify-center mb-8 w-full">
        <img src="/footerAssets/logowithname.svg" alt="NoMoo Logo" className="h-10" />
      </div>
      { !loggedIn ? (
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-xs">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input
            className="mb-4 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0AAD0B]"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          <input
            className="mb-4 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0AAD0B]"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#0AAD0B] text-white font-semibold py-2 rounded hover:bg-[#09990a] transition"
          >
            Login
          </button>
          {error && <p className="text-red-600 text-sm mt-3 text-center">{error}</p>}
        </form>
      ) : (
        <div className="w-full max-w-2xl bg-white rounded shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Wishlist Users</h2>
            <button onClick={handleLogout} className="text-sm text-[#0AAD0B] hover:underline">Logout</button>
          </div>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : users.length === 0 ? (
            <p className="text-center text-gray-500">No users found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border">
                <thead>
                  <tr className="bg-[#F5FFF5]">
                    <th className="py-2 px-4 border-b text-left">Email</th>
                    <th className="py-2 px-4 border-b text-left">Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={u.email + u.createdAt + i} className="hover:bg-[#F5FFF5]">
                      <td className="py-2 px-4 border-b">{u.email}</td>
                      <td className="py-2 px-4 border-b">{new Date(u.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <footer className="w-full text-center text-xs text-[#888] py-4 mt-8">
        © 2025 <span className="text-[#0AAD0B] font-semibold">NoMoo</span>. All Rights Reserved.
      </footer>
    </div>
  );
} 