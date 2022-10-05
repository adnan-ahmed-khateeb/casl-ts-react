export const permissions = {
  admin: [
    {
      action: ['manage'],
      subject: ['all'],
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
