export const fields = [
  {
    key: 'userInfo',
    label: 'Full Name',
    sortable: false,
    class: 'text-center',
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'mobile',
    label: 'Mobile',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'createdAt',
    label: 'created At',
    sortable: true,
    class: 'text-center',
  },
  { key: 'actions', label: ' ' },
]
export const statusOptions = [
  { value: 'all', text: 'All' },
  { value: 'ACTIVE', text: 'Active Users' },
  { value: 'FUNNEL_PENDING', text: 'Funnel Pending' },
  { value: 'IS_VERIFY_PENDING', text: 'Verify Pending' },
  {
    value: 'INVALID_LOGIN_ATTEMPTS_RESTRICTION',
    text: 'Invalid Login Attempts Restriction',
  },
  { value: 'DISABLE_BY_ADMINISTRATOR', text: 'Disable By Administrator' },
  { value: 'EXPIRED', text: 'Expired' },
]
