import os

files = [
    "src/app/pages/admin/AdminActiveServices.tsx",
    "src/app/pages/admin/AdminActivityLogs.tsx",
    "src/app/pages/admin/AdminAssignTickets.tsx",
    "src/app/pages/admin/AdminCustomerReports.tsx",
    "src/app/pages/admin/AdminFAQManagement.tsx",
    "src/app/pages/admin/AdminInvoices.tsx",
    "src/app/pages/admin/AdminNotifications.tsx",
    "src/app/pages/admin/AdminRolesPermissions.tsx",
    "src/app/pages/admin/AdminServicePlans.tsx",
    "src/app/pages/admin/AdminStaffAccounts.tsx",
    "src/app/pages/admin/AdminSubscriptions.tsx",
]

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = []
        skip_until_closing = False
        brace_count = 0
        
        for line in lines:
            if skip_until_closing:
                brace_count += line.count('{') - line.count('}')
                if brace_count == 0:
                    skip_until_closing = False
                continue
            
            if 'const _handle' in line and '= (' in line:
                skip_until_closing = True
                brace_count = line.count('{') - line.count('}')
                if brace_count == 0:
                    skip_until_closing = False
                continue
            
            new_lines.append(line)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        
        print(f"Fixed: {file_path}")
