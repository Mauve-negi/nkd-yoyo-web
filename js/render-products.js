fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.querySelector('.product-list');

    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p>${p.summary}</p>
        <div class="product-links">
          <a href="products/${p.id}/">▶ 詳細を見る</a>
          <a href="${p.booth}" target="_blank">🛒 Boothで購入</a>
        </div>
      `;
      list.appendChild(card);
    });
  });