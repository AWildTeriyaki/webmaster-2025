import { useState } from 'react';

const OrderForm = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [orderType, setOrderType] = useState('pickup');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState('');

  const menuItems = [
    // Appetizers
    { id: 1, category: 'Appetizers', name: 'Spring Pea Soup', description: 'Velvety green pea and mint soup garnished with cashew cream and microgreens.', price: 9, image: 'https://via.placeholder.com/100?text=Pea+Soup' },
    { id: 2, category: 'Appetizers', name: 'Asparagus Tartlets', description: 'Flaky puff pastry filled with ricotta and roasted asparagus tips.', price: 10, image: 'https://via.placeholder.com/100?text=Asparagus+Tartlets' },
    { id: 3, category: 'Appetizers', name: 'Radish and Butter Crostini', description: 'Radishes with vegan butter on toasted baguette.', price: 8, image: 'https://via.placeholder.com/100?text=Crostini' },
    { id: 4, category: 'Appetizers', name: 'Zucchini Fritters', description: 'Crispy zucchini fritters with yogurt dill sauce.', price: 10, image: 'https://via.placeholder.com/100?text=Fritters' },
    { id: 5, category: 'Appetizers', name: 'Carrot Ginger Salad Rolls', description: 'Rice paper rolls with carrots, cucumber, mint.', price: 11, image: 'https://via.placeholder.com/100?text=Salad+Rolls' },

    // Entrees
    { id: 6, category: 'Entrees', name: 'Lemon Herb Risotto', description: 'Risotto infused with dill, parsley, lemon, topped with vegetables.', price: 18, image: 'https://via.placeholder.com/100?text=Risotto' },
    { id: 7, category: 'Entrees', name: 'Stuffed Portobello Mushrooms', description: 'Portobello caps with quinoa, spinach, tomatoes.', price: 17, image: 'https://via.placeholder.com/100?text=Mushrooms' },
    { id: 8, category: 'Entrees', name: 'Spring Pesto Pasta', description: 'Fettuccine with pea basil pesto, snap peas, tomatoes.', price: 16, image: 'https://via.placeholder.com/100?text=Pesto+Pasta' },
    { id: 9, category: 'Entrees', name: 'Grilled Artichoke Bowl', description: 'Artichokes over farro with fennel, arugula, lemon vinaigrette.', price: 18, image: 'https://via.placeholder.com/100?text=Artichoke+Bowl' },
    { id: 10, category: 'Entrees', name: 'Herb-Crusted Cauliflower Steak', description: 'Cauliflower steak with herbs and tahini sauce.', price: 19, image: 'https://via.placeholder.com/100?text=Cauliflower+Steak' },

    // Sides
    { id: 11, category: 'Sides', name: 'Lemon Garlic Asparagus', description: 'Asparagus sautéed with lemon juice and garlic.', price: 7, image: 'https://via.placeholder.com/100?text=Asparagus' },
    { id: 12, category: 'Sides', name: 'Butter-Braised Radishes', description: 'Radishes in vegan butter with dill and honey.', price: 6, image: 'https://via.placeholder.com/100?text=Radishes' },
    { id: 13, category: 'Sides', name: 'Spring Pea and Mint Salad', description: 'Peas, mint, arugula with lemon dressing.', price: 7, image: 'https://via.placeholder.com/100?text=Pea+Salad' },
    { id: 14, category: 'Sides', name: 'Crispy Fingerling Potatoes', description: 'Potatoes roasted with rosemary and thyme.', price: 8, image: 'https://via.placeholder.com/100?text=Potatoes' },
    { id: 15, category: 'Sides', name: 'Fennel Gratin', description: 'Fennel baked in creamy sauce with breadcrumbs.', price: 8, image: 'https://via.placeholder.com/100?text=Fennel+Gratin' },

    // Desserts
    { id: 16, category: 'Desserts', name: 'Lemon Lavender Cake', description: 'Sponge cake with lemon zest, lavender, lemon glaze.', price: 9, image: 'https://via.placeholder.com/100?text=Cake' },
    { id: 17, category: 'Desserts', name: 'Matcha Panna Cotta', description: 'Matcha panna cotta with coconut whipped cream.', price: 10, image: 'https://via.placeholder.com/100?text=Panna+Cotta' },
    { id: 18, category: 'Desserts', name: 'Carrot Cake Cupcakes', description: 'Carrot cupcakes with cashew frosting.', price: 8, image: 'https://via.placeholder.com/100?text=Cupcakes' },

    // Beverages
    { id: 19, category: 'Beverages', name: 'Elderflower Lemonade', description: 'Lemonade with elderflower syrup.', price: 4, image: 'https://via.placeholder.com/100?text=Lemonade' },
    { id: 20, category: 'Beverages', name: 'Iced Matcha Mint Tea', description: 'Matcha tea with mint and agave.', price: 6, image: 'https://via.placeholder.com/100?text=Matcha+Tea' },
  ];

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.06;
  const tip = customTip ? parseFloat(customTip) : subtotal * (tipPercentage / 100);
  const total = (subtotal + tax + tip).toFixed(2);

  const estimateTime = () => (orderType === 'delivery' ? '45-60 mins' : '20-30 mins');

  const handleCheckout = () => {
    alert(`Order placed by ${name}!\nTotal: $${total}\nEstimated Time: ${estimateTime()}`);
    setCart([]);
    setShowCart(false);
  };

  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '24px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.3)', borderRadius: '8px' }}>
      {!showCart ? (
        <>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Menu</h2>
          <div style={{ marginBottom: '24px' }}>
            {categories.map((category) => (
              <button key={category} style={{ margin: '4px', padding: '8px', cursor: 'pointer' }} onClick={() => document.getElementById(category).scrollIntoView()}>{category}</button>
            ))}
          </div>
          {categories.map((category) => (
            <div key={category} id={category} style={{ marginBottom: '24px', scrollMarginTop: '80px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{category}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {menuItems.filter((item) => item.category === category).map((item) => (
                  <div key={item.id} style={{ border: '1px solid #ddd', padding: '8px', borderRadius: '8px' }}>
                    <h4 style={{ marginTop: '8px', fontWeight: '500' }}>{item.name}</h4>
                    <p style={{ fontSize: '14px' }}>{item.description}</p>
                    <p style={{ fontWeight: '600' }}>${item.price}</p>
                    <button style={{ marginTop: '8px', backgroundColor: '#F6E966', color: "black", padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} onClick={() => setShowCart(true)}>
            View Cart ({cart.length})
          </button>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Cart</h2>
          {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span>{item.name} - ${item.price}</span>
              <button style={{ color: '#dc3545', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #ddd', paddingTop: '8px', marginTop: '16px' }}>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (6%): ${tax.toFixed(2)}</p>
            <p>Tip: ${tip.toFixed(2)}</p>
            <p style={{ fontWeight: 'bold' }}>Total: ${total}</p>
          </div>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />

          <select
            value={orderType}
            onChange={e => setOrderType(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
              backgroundColor: '#fff'
            }}
          >
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>

          <select
            value={tipPercentage}
            onChange={e => setTipPercentage(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
              backgroundColor: '#fff'
            }}
          >
            <option value={0}>No Tip</option>
            <option value={18}>18%</option>
            <option value={20}>20%</option>
            <option value={22}>22%</option>
            <option value={-1}>Custom</option>
          </select>

          {tipPercentage === -1 && (
            <input
              type="number"
              placeholder="Custom Tip Amount"
              value={customTip}
              onChange={e => setCustomTip(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                margin: '8px 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          )}

          <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginTop: '16px' }} onClick={handleCheckout} disabled={!name || !email || cart.length === 0}>
            Checkout
          </button>
          <button style={{ marginLeft: '8px', background: 'none', border: 'none', color: '#6c757d', cursor: 'pointer' }} onClick={() => setShowCart(false)}>Back to Menu</button>
        </>
      )}
    </div>
  );
};

export default OrderForm;
