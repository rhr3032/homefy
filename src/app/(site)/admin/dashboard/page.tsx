import Sidebar from '@/components/Admin/Sidebar';
import Topbar from '@/components/Admin/Topbar';
import DashboardBody from '@/components/Admin/DashboardBody';

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6">
          <DashboardBody />
        </main>
      </div>
    </div>
  );
}
