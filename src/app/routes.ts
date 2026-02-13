import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/components/Layout';
import { Home } from '@/app/pages/Home';
import { Login } from '@/app/pages/Login';
import { Register } from '@/app/pages/Register';
import { Dashboard } from '@/app/pages/Dashboard';
import { Profile } from '@/app/pages/account/Profile';
import { Security } from '@/app/pages/account/Security';
import { Billing } from '@/app/pages/account/Billing';
import { Notifications } from '@/app/pages/account/Notifications';
import { ActiveServices } from '@/app/pages/services/ActiveServices';
import { ManageService } from '@/app/pages/services/ManageService';
import { Addons } from '@/app/pages/services/Addons';
import { OrderHistory } from '@/app/pages/services/OrderHistory';
import { CreateTicket } from '@/app/pages/support/CreateTicket';
import { MyTickets } from '@/app/pages/support/MyTickets';
import { TrackStatus } from '@/app/pages/support/TrackStatus';
import { FAQ } from '@/app/pages/support/FAQ';
import { UsageReports } from '@/app/pages/reports/UsageReports';
import { BillingReports } from '@/app/pages/reports/BillingReports';
import { ServiceReports } from '@/app/pages/reports/ServiceReports';
import { DownloadReports } from '@/app/pages/reports/DownloadReports';
import { AdminDashboard } from '@/app/pages/admin/AdminDashboard';
import { AdminCustomers } from '@/app/pages/admin/AdminCustomers';
import { AdminSupportTickets } from '@/app/pages/admin/AdminSupportTickets';
import { AdminOrders } from '@/app/pages/admin/AdminOrders';
import { AdminPayments } from '@/app/pages/admin/AdminPayments';
import { AdminStaff } from '@/app/pages/admin/AdminStaff';
import { AdminAccountDetails } from '@/app/pages/admin/AdminAccountDetails';
import { AdminActiveServices } from '@/app/pages/admin/AdminActiveServices';
import { AdminActivityLogs } from '@/app/pages/admin/AdminActivityLogs';
import { AdminAssignTickets } from '@/app/pages/admin/AdminAssignTickets';
import { AdminCustomerReports } from '@/app/pages/admin/AdminCustomerReports';
import { AdminFAQManagement } from '@/app/pages/admin/AdminFAQManagement';
import { AdminInvoices } from '@/app/pages/admin/AdminInvoices';
import { AdminNotifications } from '@/app/pages/admin/AdminNotifications';
import { AdminPaymentMethods } from '@/app/pages/admin/AdminPaymentMethods';
import { AdminRevenueReports } from '@/app/pages/admin/AdminRevenueReports';
import { AdminRolesPermissions } from '@/app/pages/admin/AdminRolesPermissions';
import { AdminServicePlans } from '@/app/pages/admin/AdminServicePlans';
import { AdminServiceReports } from '@/app/pages/admin/AdminServiceReports';
import { AdminStaffAccounts } from '@/app/pages/admin/AdminStaffAccounts';
import { AdminSubscriptions } from '@/app/pages/admin/AdminSubscriptions';
import { StaffDashboard } from '@/app/pages/staff/StaffDashboard';
import { StaffTickets } from '@/app/pages/staff/StaffTickets';
import { StaffOrders } from '@/app/pages/staff/StaffOrders';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'dashboard', Component: Dashboard },
      { path: 'dashboard/account/profile', Component: Profile },
      { path: 'dashboard/account/security', Component: Security },
      { path: 'dashboard/account/billing', Component: Billing },
      { path: 'dashboard/account/notifications', Component: Notifications },
      { path: 'dashboard/services/active', Component: ActiveServices },
      { path: 'dashboard/services/manage', Component: ManageService },
      { path: 'dashboard/services/addons', Component: Addons },
      { path: 'dashboard/services/history', Component: OrderHistory },
      { path: 'dashboard/support/create', Component: CreateTicket },
      { path: 'dashboard/support/tickets', Component: MyTickets },
      { path: 'dashboard/support/track', Component: TrackStatus },
      { path: 'dashboard/support/faq', Component: FAQ },
      { path: 'dashboard/reports/usage', Component: UsageReports },
      { path: 'dashboard/reports/billing', Component: BillingReports },
      { path: 'dashboard/reports/service', Component: ServiceReports },
      { path: 'dashboard/reports/download', Component: DownloadReports },
    ],
  },
  {
    path: '/admin/dashboard',
    Component: AdminDashboard,
  },
  {
    path: '/admin/accounts/customers',
    Component: AdminCustomers,
  },
  {
    path: '/admin/accounts/details',
    Component: AdminAccountDetails,
  },
  {
    path: '/admin/support/tickets',
    Component: AdminSupportTickets,
  },
  {
    path: '/admin/support/assign',
    Component: AdminAssignTickets,
  },
  {
    path: '/admin/support/faq',
    Component: AdminFAQManagement,
  },
  {
    path: '/admin/orders/all',
    Component: AdminOrders,
  },
  {
    path: '/admin/billing/payments',
    Component: AdminPayments,
  },
  {
    path: '/admin/billing/invoices',
    Component: AdminInvoices,
  },
  {
    path: '/admin/billing/payment-methods',
    Component: AdminPaymentMethods,
  },
  {
    path: '/admin/billing/subscriptions',
    Component: AdminSubscriptions,
  },
  {
    path: '/admin/staff/accounts',
    Component: AdminStaff,
  },
  {
    path: '/admin/staff/all',
    Component: AdminStaffAccounts,
  },
  {
    path: '/admin/staff/roles',
    Component: AdminRolesPermissions,
  },
  {
    path: '/admin/services/active',
    Component: AdminActiveServices,
  },
  {
    path: '/admin/services/plans',
    Component: AdminServicePlans,
  },
  {
    path: '/admin/reports/customer',
    Component: AdminCustomerReports,
  },
  {
    path: '/admin/reports/revenue',
    Component: AdminRevenueReports,
  },
  {
    path: '/admin/reports/service',
    Component: AdminServiceReports,
  },
  {
    path: '/admin/system/activity-logs',
    Component: AdminActivityLogs,
  },
  {
    path: '/admin/system/notifications',
    Component: AdminNotifications,
  },
  {
    path: '/staff/dashboard',
    Component: StaffDashboard,
  },
  {
    path: '/staff/tickets',
    Component: StaffTickets,
  },
  {
    path: '/staff/orders',
    Component: StaffOrders,
  },
]);
