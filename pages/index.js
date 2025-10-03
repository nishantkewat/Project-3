import { useState } from 'react';

export default function Home() {
  const [userType, setUserType] = useState('customer'); // 'customer' or 'owner'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  
  // Sample Products
  const [products] = useState([
    { id: 1, name: 'Ashwagandha Powder', price: 299, category: 'Herbs', image: '🌿' },
    { id: 2, name: 'Brahmi Oil', price: 399, category: 'Oils', image: '💧' },
    { id: 3, name: 'Triphala Churna', price: 199, category: 'Powders', image: '🫙' },
    { id: 4, name: 'Aloe Vera Juice', price: 349, category: 'Juices', image: '🌱' }
  ]);

  const handleLogin = (email, password) => {
    if (userType === 'owner') {
      if (email === 'theayurvedaworldofficial@gmail.com' && password === 'admin123') {
        setIsLoggedIn(true);
        setCurrentUser({ email, role: 'owner', name: 'The Ayurveda World Owner' });
      }
    } else {
      // Customer login
      setIsLoggedIn(true);
      setCurrentUser({ email, role: 'customer', name: 'Customer' });
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: 20, fontFamily: 'Arial', minHeight: '100vh', background: '#f0f9f0' }}>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h1 style={{ color: '#059669', fontSize: '2.5rem', marginBottom: '10px' }}>🌿 The Ayurveda World</h1>
          <p style={{ color: '#666', fontSize: '1.2rem' }}>Authentic Ayurvedic Products</p>
        </div>

        {/* User Type Selection */}
        <div style={{ maxWidth: 400, margin: '0 auto', background: 'white', padding: 30, borderRadius: 15, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            <button 
              onClick={() => setUserType('customer')}
              style={{ 
                flex: 1, 
                padding: 15, 
                background: userType === 'customer' ? '#059669' : '#f1f5f9', 
                color: userType === 'customer' ? 'white' : '#64748b',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🛍️ Customer
            </button>
            <button 
              onClick={() => setUserType('owner')}
              style={{ 
                flex: 1, 
                padding: 15, 
                background: userType === 'owner' ? '#059669' : '#f1f5f9', 
                color: userType === 'owner' ? 'white' : '#64748b',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              👑 Owner
            </button>
          </div>

          {userType === 'customer' ? (
            <div>
              <h3 style={{ textAlign: 'center', color: '#059669', marginBottom: 20 }}>Customer Login</h3>
              <button 
                onClick={() => handleLogin('customer@ayurveda.com', '123456')}
                style={{
                  width: '100%',
                  padding: 15,
                  background: '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginBottom: 10
                }}
              >
                🛍️ Continue as Customer
              </button>
              <p style={{ textAlign: 'center', color: '#666', fontSize: 14 }}>
                Or <a href="#" style={{ color: '#059669' }}>Create New Account</a>
              </p>
            </div>
          ) : (
            <div>
              <h3 style={{ textAlign: 'center', color: '#059669', marginBottom: 20 }}>Owner Login</h3>
              <button 
                onClick={() => handleLogin('theayurvedaworldofficial@gmail.com', 'admin123')}
                style={{
                  width: '100%',
                  padding: 15,
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                👑 Login as Owner
              </button>
            </div>
          )}
        </div>

        {/* Product Preview */}
        <div style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', color: '#059669', marginBottom: 30 }}>Featured Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {products.map(product => (
              <div key={product.id} style={{ background: 'white', padding: 20, borderRadius: 10, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>{product.image}</div>
                <h3 style={{ color: '#1f2937', marginBottom: 10 }}>{product.name}</h3>
                <p style={{ color: '#059669', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 15 }}>₹{product.price}</p>
                <button 
                  style={{
                    background: '#059669',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: 6,
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  Add to Cart (Login Required)
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // CUSTOMER DASHBOARD
  if (currentUser?.role === 'customer') {
    return (
      <div style={{ fontFamily: 'Arial', minHeight: '100vh', background: '#f8fafc' }}>
        <header style={{ background: '#059669', color: 'white', padding: '20px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 24 }}>🌿 The Ayurveda World</h1>
              <p style={{ margin: 5, opacity: 0.9 }}>Welcome, {currentUser.name}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
              <span>🛒 Cart ({cart.length})</span>
              <button onClick={() => setIsLoggedIn(false)} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 16px', borderRadius: 6, cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </div>
        </header>

        <main style={{ maxWidth: 1200, margin: '20px auto', padding: '0 20px' }}>
          <h2>🛍️ Ayurvedic Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 25, marginTop: 20 }}>
            {products.map(product => (
              <div key={product.id} style={{ background: 'white', padding: 25, borderRadius: 12, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: 15 }}>{product.image}</div>
                <h3 style={{ color: '#1f2937', marginBottom: 10, fontSize: '1.3rem' }}>{product.name}</h3>
                <p style={{ color: '#6b7280', marginBottom: 10 }}>{product.category}</p>
                <p style={{ color: '#059669', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: 20 }}>₹{product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  style={{
                    background: '#059669',
                    color: 'white',
                    border: 'none',
                    padding: '12px 25px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div style={{ marginTop: 40, background: 'white', padding: 25, borderRadius: 12, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h3>🛒 Your Cart ({cart.length} items)</h3>
              <div style={{ marginTop: 15 }}>
                {cart.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </div>
                ))}
              </div>
              <button style={{ marginTop: 20, width: '100%', padding: 15, background: '#dc2626', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 'bold', cursor: 'pointer' }}>
                💳 Proceed to Checkout (₹{cart.reduce((sum, item) => sum + item.price, 0)})
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // OWNER DASHBOARD - REAL WORKING
  return (
    <div style={{ fontFamily: 'Arial', minHeight: '100vh', background: '#f8fafc' }}>
      <header style={{ background: '#dc2626', color: 'white', padding: '20px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 24 }}>🌿 The Ayurveda World - OWNER DASHBOARD</h1>
            <p style={{ margin: 5, opacity: 0.9 }}>Supreme Administrator</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 16px', borderRadius: 6, cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: '20px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 30 }}>
          <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h3 style={{ color: '#dc2626', margin: '0 0 10px 0' }}>📊 Total Revenue</h3>
            <p style={{ fontSize: 24, fontWeight: 'bold', margin: 0 }}>₹0</p>
            <p style={{ color: '#6b7280', fontSize: 14, margin: '5px 0 0 0' }}>Real data will show here</p>
          </div>
          
          <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h3 style={{ color: '#dc2626', margin: '0 0 10px 0' }}>🛍️ Total Products</h3>
            <p style={{ fontSize: 24, fontWeight: 'bold', margin: 0 }}>4</p>
            <p style={{ color: '#6b7280', fontSize: 14, margin: '5px 0 0 0' }}>Products in store</p>
          </div>
          
          <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h3 style={{ color: '#dc2626', margin: '0 0 10px 0' }}>📦 Pending Orders</h3>
            <p style={{ fontSize: 24, fontWeight: 'bold', margin: 0 }}>0</p>
            <p style={{ color: '#6b7280', fontSize: 14, margin: '5px 0 0 0' }}>Orders to process</p>
          </div>
        </div>

        <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#dc2626', marginBottom: 20 }}>🚀 Quick Actions</h3>
          <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
            <button style={{ padding: '15px 25px', background: '#059669', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>
              ➕ Add New Product
            </button>
            <button style={{ padding: '15px 25px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>
              👥 Manage Users
            </button>
            <button style={{ padding: '15px 25px', background: '#8b5cf6', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>
              📊 View Analytics
            </button>
            <button style={{ padding: '15px 25px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold' }}>
              ⚙️ Settings
            </button>
          </div>
        </div>

        <div style={{ background: 'white', padding: 25, borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginTop: 20 }}>
          <h3 style={{ color: '#dc2626', marginBottom: 20 }}>📋 Real Features Coming Soon</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 15 }}>
            {[
              'Product Management', 'Order Processing', 'Customer Database', 
              'Payment Gateway', 'Inventory Management', 'Sales Analytics',
              'User Roles', 'Email System', 'Mobile App'
            ].map(feature => (
              <div key={feature} style={{ padding: 15, background: '#f8fafc', borderRadius: 8, textAlign: 'center' }}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
  }
