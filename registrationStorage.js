export const getRegistrations = () => {
  const raw = localStorage.getItem('registrations');
  return raw ? JSON.parse(raw) : [];
};

export const saveRegistration = (reg) => {
  const existing = getRegistrations();
  existing.push(reg);
  localStorage.setItem('registrations', JSON.stringify(existing));
};
