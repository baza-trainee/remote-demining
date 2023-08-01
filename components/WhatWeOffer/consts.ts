export interface IData {
  id: string;
  text: string;
}

export const data: IData[] = [
  {
    text: 'Унікальна  технологія: пристрій дистанційного знаходження вибухонебезпечних предметів на базі БПЛА з приладом LEMI-026 та подальша обробка за допомогою штучного інтелекту.',
  },
  {
    text: 'Розмір виявлення об’єктів від 10 см.',
  },
  {
    text: 'Точність ідентифікації - не менш 86%',
  },
].map((text) => ({
  id: crypto.randomUUID(),
  ...text,
}));