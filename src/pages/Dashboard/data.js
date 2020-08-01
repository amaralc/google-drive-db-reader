import React from 'react';

const data = [
  {
    timestamp: '1',
    category: 'B',
    name: 'Flange',
    description: 'Flange de acrílico',
    image_url:
      'https://drive.google.com/uc?export=view&id=1QNO82JompE8ELRwHyD_VzXAXAqYwdo1W',
  },
];

export const ListItems = data.map((item) => (
  <ul>
    <li>
      <li>
        <img
          style={{ width: '50px', height: '50px' }}
          alt="my_image"
          src={item.image_url}
        />
      </li>
      <li>{item.timestamp}</li>
      <li>{item.category}</li>
      <li>{item.name}</li>
      <li>{item.description}</li>
    </li>
  </ul>
));
