import os
import re

files_to_fix = [
    "src/app/pages/account/Billing.tsx",
    "src/app/pages/admin/AdminAccountDetails.tsx",
    "src/app/pages/admin/AdminActiveServices.tsx",
    "src/app/pages/admin/AdminActivityLogs.tsx",
    "src/app/pages/admin/AdminAssignTickets.tsx",
    "src/app/pages/admin/AdminCustomerReports.tsx",
    "src/app/pages/admin/AdminCustomers.tsx",
    "src/app/pages/admin/AdminFAQManagement.tsx",
    "src/app/pages/admin/AdminInvoices.tsx",
    "src/app/pages/admin/AdminNotifications.tsx",
    "src/app/pages/admin/AdminPaymentMethods.tsx",
    "src/app/pages/admin/AdminRevenueReports.tsx",
    "src/app/pages/admin/AdminRolesPermissions.tsx",
    "src/app/pages/admin/AdminServicePlans.tsx",
    "src/app/pages/admin/AdminServiceReports.tsx",
    "src/app/pages/admin/AdminStaff.tsx",
    "src/app/pages/admin/AdminStaffAccounts.tsx",
    "src/app/pages/admin/AdminSubscriptions.tsx",
    "src/app/pages/admin/AdminSupportTickets.tsx",
    "src/app/pages/reports/BillingReports.tsx",
    "src/app/pages/reports/ServiceReports.tsx",
    "src/app/pages/services/ActiveServices.tsx",
    "src/app/pages/services/ManageService.tsx"
]

# Patterns to fix
patterns = [
    (r'const handleSuspend = \(', 'const _handleSuspend = ('),
    (r'const handleResetPassword = \(', 'const _handleResetPassword = ('),
    (r'const handleReactivate = \(', 'const _handleReactivate = ('),
    (r'const handleFilter = \(', 'const _handleFilter = ('),
    (r'const handleClearLogs = \(', 'const _handleClearLogs = ('),
    (r'const handleReassign = \(', 'const _handleReassign = ('),
    (r'const handleBulkAssign = \(', 'const _handleBulkAssign = ('),
    (r'const handleFilterByDate = \(', 'const _handleFilterByDate = ('),
    (r'const handleViewDetails = \(', 'const _handleViewDetails = ('),
    (r'const handlePublish = \(', 'const _handlePublish = ('),
    (r'const handleSendReminder = \(', 'const _handleSendReminder = ('),
    (r'const handleMarkRead = \(', 'const _handleMarkRead = ('),
    (r'const handleToggleStatus = \(', 'const _handleToggleStatus = ('),
    (r'const handleAddMethod = \(', 'const _handleAddMethod = ('),
    (r'const handleFilterByPeriod = \(', 'const _handleFilterByPeriod = ('),
    (r'const handleViewBreakdown = \(', 'const _handleViewBreakdown = ('),
    (r'const handleDeleteRole = \(', 'const _handleDeleteRole = ('),
    (r'const handleViewPlanDetails = \(', 'const _handleViewPlanDetails = ('),
    (r'const handleGenerateReport = \(', 'const _handleGenerateReport = ('),
    (r'const handleRenew = \(', 'const _handleRenew = ('),
    (r'const handleCancel = \(', 'const _handleCancel = ('),
    (r'const handleSetDefault = \(id:', 'const handleSetDefault = (_id:'),
    (r'const handleRemove = \(id:', 'const handleRemove = (_id:'),
    (r'\(id: number\) =>', '(_id: number) =>'),
    (r'\(id: string\) =>', '(_id: string) =>'),
    (r'\(type: string\) =>', '(_type: string) =>'),
    (r'\(month: string\) =>', '(_month: string) =>'),
    (r'\(period: string\) =>', '(_period: string) =>'),
    (r'\(plan: string\) =>', '(_plan: string) =>'),
    (r'\(ticketId: string\) =>', '(_ticketId: string) =>'),
    (r'\(planName: string, type: string\)', '(planName: string, _type: string)'),
    (r"import { Download, Users,", "import { Download,"),
    (r"import { Search, Eye, Edit, Trash2, UserPlus }", "import { Search, Eye, Edit, Trash2 }"),
    (r"import { Card, CardContent, CardHeader", "import { Card, CardHeader"),
    (r"import { UserPlus, Edit, Trash2, Shield }", "import { UserPlus, Edit, Trash2 }"),
    (r"import { MessageSquare, User, Clock }", "import { User, Clock }"),
    (r"import { Download, FileText, Calendar, DollarSign }", "import { Download, FileText, Calendar }"),
    (r"import { Button } from '@/app/components/ui/button';", ""),
    (r"import { Wifi, Activity, Calendar, Plus, QrCode }", "import { Wifi, Plus, QrCode }"),
]

for file_path in files_to_fix:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
