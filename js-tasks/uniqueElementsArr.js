/**
 * change the array so that elements with unique ones remain and add their qty
 */
export const uniqueElementsArr = () => {
  const products = [
    {
      id: 'sku1',
      qty: 1,
    },
    {
      id: 'sku2',
      qty: 2,
    },
    {
      id: 'sku3',
      qty: 3,
    },
    {
      id: 'sku1',
      qty: 6,
    },
    {
      id: 'sku1',
      qty: 8,
    },
    {
      id: 'sku2',
      qty: 19,
    },
    {
      id: 'sku4',
      qty: 1,
    },
  ];

  const newProducts = [...products];

  for (let i = 0; i < newProducts.length; i += 1) {
    for (let j = i + 1; j < newProducts.length; j += 1) {
      if (newProducts[i].id === newProducts[j].id) {
        newProducts[i].qty += newProducts[j].qty;
        newProducts.splice(j, 1);
        j -= 1;
      }
    }
  }
  console.log('originalArr', products);
  console.log('newArr', newProducts);
};
