export const data = {
  fields: [
    {
      key: 'employeeId',
      label: 'Employee ID',
      type: 'text',
      disabled: true,
    },
    {
      key: 'name',
      label: 'Full Name',
      type: 'text',
      validators: [
        { name: 'required', message: 'Please provide a name' },
        {
          name: 'minLength',
          value:6,
          message: `Please provide a name with atleast 6 chars`,
        },
      ],
    },
    {
      key: 'email',
      label: 'Email',
      type: 'email',
      validators: [{ name: 'required', message: 'Please provide an email' }],
    },
    {
      key: 'department',
      label: 'Department',
      type: 'select',
      options: [
        { label: 'HR', value: 'HR' },
        { label: 'IT', value: 'IT' },
        { label: 'Finance', value: 'FIN' },
      ],
      validators: [{ name: 'required' }],
    },
    {
      key: 'joiningDate',
      label: 'Joining Date',
      type: 'date',
      validators: [{ name: 'required' }],
    },
  ],
  employee: {
    employeeId: 'EMP001',
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'IT',
    joiningDate: '2023-01-10',
  },
};
