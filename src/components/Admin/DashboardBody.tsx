export default function DashboardBody() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow flex flex-col items-center">
          <span className="text-3xl font-bold text-primary">1,234</span>
          <span className="text-gray-500 mt-2">Total Properties</span>
        </div>
        <div className="bg-white p-6 rounded shadow flex flex-col items-center">
          <span className="text-3xl font-bold text-primary">567</span>
          <span className="text-gray-500 mt-2">Customers</span>
        </div>
        <div className="bg-white p-6 rounded shadow flex flex-col items-center">
          <span className="text-3xl font-bold text-primary">$89,000</span>
          <span className="text-gray-500 mt-2">Total Revenue</span>
        </div>
      </div>
      {/* Add more analytics, charts, or quick actions here */}
    </section>
  );
}
