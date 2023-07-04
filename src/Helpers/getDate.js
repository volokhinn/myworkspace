export const compareDate = (date) => {
  if (date === new Date().toLocaleDateString('ru-RU')) {
    return true;
  }
  return false;
};
