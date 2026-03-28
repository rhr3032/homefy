import Link from 'next/link';
import { FaChartBar, FaHome, FaUsers, FaExchangeAlt, FaFileInvoice, FaBlog, FaAddressBook, FaCog } from 'react-icons/fa';

const navItems = [
  { href: '/admin/dashboard', label: 'Analytics', icon: <FaChartBar /> },
  { href: '/admin/properties', label: 'Properties', icon: <FaHome /> },
  { href: '/admin/customers', label: 'Customers', icon: <FaUsers /> },
  { href: '/admin/transactions', label: 'Transactions', icon: <FaExchangeAlt /> },
  { href: '/admin/invoices', label: 'Invoices', icon: <FaFileInvoice /> },
  { href: '/admin/blogs', label: 'Blogs', icon: <FaBlog /> },
  { href: '/admin/contact', label: 'Contact Info', icon: <FaAddressBook /> },
  { href: '/admin/settings', label: 'Settings', icon: <FaCog /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 flex flex-col">
      <div className="text-2xl font-bold mb-10 text-primary">Homefy CMS</div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex items-center gap-3 text-gray-700 hover:text-primary font-medium py-2 px-3 rounded transition-colors">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
