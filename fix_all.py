import re
import os

fixes = {
    "src/app/pages/admin/AdminAccountDetails.tsx": [
        ("const handleSuspend =", "const _handleSuspend ="),
        ("const handleResetPassword =", "const _handleResetPassword ="),
    ],
    "src/app/pages/admin/AdminActiveServices.tsx": [
        ("const handleSuspend =", "const _handleSuspend ="),
        ("const handleReactivate =", "const _handleReactivate ="),
    ],
    "src/app/pages/admin/AdminActivityLogs.tsx": [
        ("const handleFilter =", "const _handleFilter ="),
        ("const handleClearLogs =", "const _handleClearLogs ="),
    ],
    "src/app/pages/admin/AdminAssignTickets.tsx": [
        ("const handleReassign =", "const _handleReassign ="),
        ("const handleBulkAssign =", "const _handleBulkAssign ="),
    ],
    "src/app/pages/admin/AdminCustomerReports.tsx": [
        ("import { Download, Users, TrendingUp }", "import { Download, TrendingUp }"),
        ("const handleFilterByDate =", "const _handleFilterByDate ="),
        ("const handleViewDetails =", "const _handleViewDetails ="),
    ],
    "src/app/pages/admin/AdminCustomers.tsx": [
        ("import { Search, Eye, Edit, Trash2, UserPlus }", "import { Search, Eye, Edit, Trash2 }"),
    ],
    "src/app/pages/admin/AdminFAQManagement.tsx": [
        ("import { Card, CardContent, CardHeader, CardTitle }", "import { Card, CardHeader, CardTitle }"),
        ("const handlePublish =", "const _handlePublish ="),
    ],
    "src/app/pages/admin/AdminInvoices.tsx": [
        ("const handleSendReminder =", "const _handleSendReminder ="),
    ],
    "src/app/pages/admin/AdminNotifications.tsx": [
        ("import { Card, CardContent, CardHeader, CardTitle }", "import { Card, CardHeader, CardTitle }"),
        ("const handleMarkRead =", "const _handleMarkRead ="),
    ],
    "src/app/pages/admin/AdminPaymentMethods.tsx": [
        ("const handleToggleStatus =", "const _handleToggleStatus ="),
        ("const handleAddMethod =", "const _handleAddMethod ="),
    ],
    "src/app/pages/admin/AdminRevenueReports.tsx": [
        ("const handleFilterByPeriod =", "const _handleFilterByPeriod ="),
        ("const handleViewBreakdown =", "const _handleViewBreakdown ="),
    ],
    "src/app/pages/admin/AdminRolesPermissions.tsx": [
        ("const handleDeleteRole =", "const _handleDeleteRole ="),
    ],
    "src/app/pages/admin/AdminServicePlans.tsx": [
        ("const handleToggleStatus =", "const _handleToggleStatus ="),
    ],
    "src/app/pages/admin/AdminServiceReports.tsx": [
        ("const handleViewPlanDetails =", "const _handleViewPlanDetails ="),
        ("const handleGenerateReport =", "const _handleGenerateReport ="),
    ],
    "src/app/pages/admin/AdminStaff.tsx": [
        ("import { UserPlus, Edit, Trash2, Shield }", "import { UserPlus, Edit, Trash2 }"),
    ],
    "src/app/pages/admin/AdminStaffAccounts.tsx": [
        ("const handleResetPassword =", "const _handleResetPassword ="),
    ],
    "src/app/pages/admin/AdminSubscriptions.tsx": [
        ("const handleRenew =", "const _handleRenew ="),
        ("const handleCancel =", "const _handleCancel ="),
    ],
    "src/app/pages/admin/AdminSupportTickets.tsx": [
        ("import { MessageSquare, User, Clock }", "import { User, Clock }"),
    ],
    "src/app/pages/Home.tsx": [
        ("import { Shield, Clock, Users, Zap, CheckCircle, Star, CreditCard, Headphones, FileText, Bell, Settings, BarChart }", 
         "import { Clock, Users, Zap, CheckCircle, CreditCard, Headphones, Bell, Settings, BarChart }"),
        ("  const [isConnected, setIsConnected] = useState(false);", ""),
        ("  const [connectionMessage, setConnectionMessage] = useState('Checking...');", ""),
        ("        setIsConnected(true);", ""),
        ("        setConnectionMessage(data.message);", ""),
        ("        setIsConnected(false);", ""),
        ("        setConnectionMessage('Not connected - Check console');", ""),
    ],
    "src/app/pages/Login.tsx": [
        ("import { api } from '@/services/api';", ""),
        ("  const [error, setError] = useState('');", ""),
    ],
    "src/app/pages/reports/BillingReports.tsx": [
        ("import { Download, FileText, Calendar, DollarSign }", "import { Download, FileText, Calendar }"),
    ],
    "src/app/pages/reports/ServiceReports.tsx": [
        ("import { Button } from '@/app/components/ui/button';", ""),
    ],
    "src/app/pages/services/ActiveServices.tsx": [
        ("import { Wifi, Activity, Calendar, Plus, QrCode }", "import { Wifi, Plus, QrCode }"),
    ],
    "src/app/pages/services/ManageService.tsx": [
        ("  const handlePlanChange = (planName: string, type: string) => {", "  const handlePlanChange = (planName: string, _type: string) => {"),
    ],
}

for file_path, replacements in fixes.items():
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in replacements:
            content = content.replace(old, new)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
