# Fix unused variables by prefixing with underscore
$files = @(
    "src\app\pages\account\Notifications.tsx",
    "src\app\pages\admin\AdminAccountDetails.tsx",
    "src\app\pages\admin\AdminActiveServices.tsx",
    "src\app\pages\admin\AdminActivityLogs.tsx",
    "src\app\pages\admin\AdminAssignTickets.tsx",
    "src\app\pages\admin\AdminCustomerReports.tsx",
    "src\app\pages\admin\AdminCustomers.tsx",
    "src\app\pages\admin\AdminFAQManagement.tsx",
    "src\app\pages\admin\AdminInvoices.tsx",
    "src\app\pages\admin\AdminNotifications.tsx",
    "src\app\pages\admin\AdminPaymentMethods.tsx",
    "src\app\pages\admin\AdminRevenueReports.tsx",
    "src\app\pages\admin\AdminRolesPermissions.tsx",
    "src\app\pages\admin\AdminServicePlans.tsx",
    "src\app\pages\admin\AdminServiceReports.tsx",
    "src\app\pages\admin\AdminStaff.tsx",
    "src\app\pages\admin\AdminStaffAccounts.tsx",
    "src\app\pages\admin\AdminSubscriptions.tsx",
    "src\app\pages\admin\AdminSupportTickets.tsx",
    "src\app\pages\reports\BillingReports.tsx",
    "src\app\pages\reports\ServiceReports.tsx",
    "src\app\pages\services\ActiveServices.tsx",
    "src\app\pages\services\ManageService.tsx"
)

$replacements = @{
    "CardDescription," = "CardDescription as _CardDescription,"
    "UserPlus," = "UserPlus as _UserPlus,"
    "CardContent," = "CardContent as _CardContent,"
    "Shield," = "Shield as _Shield,"
    "Users," = "Users as _Users,"
    "MessageSquare," = "MessageSquare as _MessageSquare,"
    "DollarSign," = "DollarSign as _DollarSign,"
    "Button } from" = "Button as _Button } from"
    "Activity," = "Activity as _Activity,"
    "Calendar," = "Calendar as _Calendar,"
    "const handleSuspend = \(" = "const _handleSuspend = ("
    "const handleResetPassword = \(" = "const _handleResetPassword = ("
    "const handleReactivate = \(" = "const _handleReactivate = ("
    "const handleFilter = \(" = "const _handleFilter = ("
    "const handleClearLogs = \(" = "const _handleClearLogs = ("
    "const handleReassign = \(" = "const _handleReassign = ("
    "const handleBulkAssign = \(" = "const _handleBulkAssign = ("
    "const handleFilterByDate = \(" = "const _handleFilterByDate = ("
    "const handleViewDetails = \(" = "const _handleViewDetails = ("
    "const handlePublish = \(" = "const _handlePublish = ("
    "const handleSendReminder = \(" = "const _handleSendReminder = ("
    "const handleMarkRead = \(" = "const _handleMarkRead = ("
    "const handleToggleStatus = \(" = "const _handleToggleStatus = ("
    "const handleAddMethod = \(" = "const _handleAddMethod = ("
    "const handleFilterByPeriod = \(" = "const _handleFilterByPeriod = ("
    "const handleViewBreakdown = \(" = "const _handleViewBreakdown = ("
    "const handleDeleteRole = \(" = "const _handleDeleteRole = ("
    "const handleViewPlanDetails = \(" = "const _handleViewPlanDetails = ("
    "const handleGenerateReport = \(" = "const _handleGenerateReport = ("
    "const handleRenew = \(" = "const _handleRenew = ("
    "const handleCancel = \(" = "const _handleCancel = ("
    "\(id: number\)" = "(_id: number)"
    "\(id: string\)" = "(_id: string)"
    "\(type: string\)" = "(_type: string)"
    "\(month: string\)" = "(_month: string)"
    "\(period: string\)" = "(_period: string)"
    "\(plan: string\)" = "(_plan: string)"
    "\(ticketId: string\)" = "(_ticketId: string)"
    "\(planName: string, type: string\)" = "(planName: string, _type: string)"
}

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($key in $replacements.Keys) {
            $content = $content -replace $key, $replacements[$key]
        }
        Set-Content $file $content -NoNewline
        Write-Host "Fixed: $file"
    }
}
