export function serializeForm(formNode: HTMLFormElement): { name: string; value: string | boolean }[] {
  const  elements  = formNode.querySelectorAll('div > input, select');

  const data = Array.from(elements)
    .map((element) => {
      const { name, type } = element as HTMLInputElement;
      let value: string | boolean;

      switch(type) {
        case 'text':
          value = (element as HTMLInputElement).value;
          break;
        case 'checkbox':
          value = (element as HTMLInputElement).checked;
          break;
        case 'select-one':
          value = (element as HTMLSelectElement).options[(element as HTMLSelectElement).selectedIndex].value;
          break;
        default:
          value = '';
      }

      return { name, value };
    });

  return data;
}