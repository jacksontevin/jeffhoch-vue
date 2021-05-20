export const fields = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'isActive',
    label: 'status',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'createdBy',
    label: 'Created By',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'updatedBy',
    label: 'Updated By',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'createdAt',
    label: 'created At',
    sortable: true,
    class: 'text-center',
  },
  {
    key: 'updatedAt',
    label: 'updated At',
    sortable: true,
    class: 'text-center',
  },
  { key: 'actions', label: ' ' },
]
export const pagination = {
  currentPage: 1,
  perRowPage: 15,
  isDeleted: false,
  isActive: true,
  search: '',
  filed: 'name isActive  _id createdAt updatedAt childPropertyType allowEdit',
}
export const initialData = {
  name: '',
  _id: null,
  childPropertyType: null,
  isActive: true,
}
