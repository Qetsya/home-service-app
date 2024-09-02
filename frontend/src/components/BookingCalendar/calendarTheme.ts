export const calendarTheme = {
  popup: {
    root: {
      inner: 'inline-block rounded-lg bg-white p-4  border',
    },
    header: {
      selectors: {
        button: {
          next: 'fa-house',
          prev: 'fas fa-heart',
          view: 'fas fa-heart',
        },
      },
    },
  },
  views: {
    days: {
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-medium leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          selected: 'bg-gray-500 text-white hover:bg-gray-700',
          disabled: 'text-gray-300',
        },
      },
    },
  },
};
