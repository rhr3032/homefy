export default function Topbar() {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-8">
      <div className="font-semibold text-lg">Dashboard</div>
      <div className="flex items-center gap-4">
        {/* Notifications, user avatar, etc. */}
        <span className="text-gray-500">Super Admin</span>
        <img src="/images/users/admin-avatar.png" alt="Admin" className="w-9 h-9 rounded-full border" />
      </div>
    </header>
  );
}
