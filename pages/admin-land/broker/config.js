export const initialPagination = {
  currentPage: 1,
  perRowPage: 12,
  status: 'All',
  propertyType: null,
  seller: null,
  search: '',
}

export const initialSelectCategory = {
  name: 'Select Category',
  idL: null,
}

export const fields = [
  {
    key: 'name',
    label: 'Broker Name',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'address',
    label: 'Office Address',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'total',
    label: 'Total Properties',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'sold',
    label: 'Sold',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'appove',
    label: 'Appoved',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'declined',
    label: 'Declined',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'pending',
    label: 'Pending Approvals',
    sortable: true,
    class: 'text-center',
  },
  { key: 'actions', label: ' ' },
]
