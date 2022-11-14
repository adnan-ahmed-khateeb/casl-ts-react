export const permissions = {
  admin: [
    {
      action: ['manage'], // what the user can do
      subject: ['all'], // the component the user can perform the said action on
    },
  ],
  user: [
    {
      action: ['read'],
      subject: ['Form'],
    },
  ],
  manager: [
    {
      action: ['read'],
      subject: ['all'],
    },
    {
      action: ['update'],
      subject: ['Table'],
    },
  ],
  teamLead: [
    {
      action: ['read'],
      subject: ['Table'],
    },
  ],
};
