import re
import os

files_to_fix = {
    "src/app/pages/admin/AdminAccountDetails.tsx": [
        r"  const _handleSuspend = \(\) => \{[^}]+\};\s*",
        r"  const _handleResetPassword = \(\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminActiveServices.tsx": [
        r"  const _handleSuspend = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleReactivate = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminActivityLogs.tsx": [
        r"  const _handleFilter = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleClearLogs = \(\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminAssignTickets.tsx": [
        r"  const _handleReassign = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleBulkAssign = \(\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminCustomerReports.tsx": [
        r"  const _handleFilterByDate = \(\) => \{[^}]+\};\s*",
        r"  const _handleViewDetails = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminFAQManagement.tsx": [
        r"  const _handlePublish = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminInvoices.tsx": [
        r"  const _handleSendReminder = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminNotifications.tsx": [
        r"  const _handleMarkRead = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminPaymentMethods.tsx": [
        r"  const _handleToggleStatus = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleAddMethod = \(\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminRevenueReports.tsx": [
        r"  const _handleFilterByPeriod = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleViewBreakdown = \(\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminRolesPermissions.tsx": [
        r"  const _handleDeleteRole = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminServicePlans.tsx": [
        r"  const _handleToggleStatus = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminServiceReports.tsx": [
        r"  const _handleViewPlanDetails = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleGenerateReport = \(\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminStaffAccounts.tsx": [
        r"  const _handleResetPassword = \(.*?\) => \{[^}]+\};\s*",
    ],
    "src/app/pages/admin/AdminSubscriptions.tsx": [
        r"  const _handleRenew = \(.*?\) => \{[^}]+\};\s*",
        r"  const _handleCancel = \(.*?\) => \{[^}]+\};\s*",
    ],
}

for file_path, patterns in files_to_fix.items():
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for pattern in patterns:
            content = re.sub(pattern, "", content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
