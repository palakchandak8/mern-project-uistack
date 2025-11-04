import React, { useState, useCallback, useEffect } from 'react';
import { Menu, X, Search, Plus, Star, Users } from 'lucide-react';
import './App.css';
import ProfilePage from './ProfilePage';
import { components, categories, componentTypes } from './uiComponents';

// ========== BACKEND API CONNECTION ==========
const API_URL = 'http://localhost:5000/api';

const api = {
  // ========== AUTH ==========
  register: async (userData) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return res.json();
  },
  
  login: async (username, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    return res.json();
  },

  // ========== USER PROFILE ==========
  getUserProfile: async (userId) => {
    const res = await fetch(`${API_URL}/users/${userId}`);
    return res.json();
  },
  
  updateUserProfile: async (userId, userData) => {
    const res = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return res.json();
  },

  // ========== COMPONENTS ==========
  getComponents: async (category = 'all') => {
    const url = category === 'all' 
      ? `${API_URL}/components` 
      : `${API_URL}/components?category=${category}`;
    const res = await fetch(url);
    return res.json();
  },
  
  getUserComponents: async (userId) => {
    const res = await fetch(`${API_URL}/components/user/${userId}`);
    return res.json();
  },
  
  createComponent: async (componentData) => {
    const res = await fetch(`${API_URL}/components`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(componentData)
    });
    return res.json();
  },

  updateComponent: async (componentId, componentData) => {
    const res = await fetch(`${API_URL}/components/${componentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(componentData)
    });
    return res.json();
  },
  
  deleteComponent: async (componentId) => {
    const res = await fetch(`${API_URL}/components/${componentId}`, {
      method: 'DELETE'
    });
    return res.json();
  }
};

// ========== SEPARATE MODAL COMPONENTS ==========

const LoginModal = ({ onClose, onLogin, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(username, password);
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <button onClick={onClose} className="closeButton">
          <X size={24} />
        </button>
        
        <h2 className="modalTitle">LOGIN</h2>
        <p className="modalSubtitle">
          Design stunning UI elements and effortlessly share them with developers everywhere
        </p>
        
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="formGroup">
            <label className="label">Username</label>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <div className="formGroup">
            <label className="label">Password</label>
            <input 
              type="password" 
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <button type="submit" className="submitButtonFull">
            Login
          </button>
          
          <p className="modalFooter">
            Don't have account?{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="linkButton"
            >
              register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const RegisterModal = ({ onClose, onRegister, onSwitchToLogin }) => {
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regGithub, setRegGithub] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onRegister({
      username: regUsername,
      password: regPassword,
      email: regEmail,
      github: regGithub,
      phone: regPhone
    });
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <button onClick={onClose} className="closeButton">
          <X size={24} />
        </button>
        
        <p className="modalSubtitle">Happy to have you!</p>
        <h2 className="modalTitle">REGISTER</h2>
        
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="formGroup">
            <label className="label">Username *</label>
            <input
              type="text"
              className="input"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <div className="formGroup">
            <label className="label">Password *</label>
            <input 
              type="password" 
              className="input"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <div className="formGroup">
            <label className="label">GitHub profile</label>
            <input 
              type="text" 
              className="input"
              value={regGithub}
              onChange={(e) => setRegGithub(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <div className="formGroup">
            <label className="label">Gmail *</label>
            <input 
              type="email" 
              className="input"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <div className="formGroup">
            <label className="label">Phone no.</label>
            <input 
              type="tel" 
              className="input"
              value={regPhone}
              onChange={(e) => setRegPhone(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <button type="submit" className="submitButtonFull">
            Register
          </button>
          
          <p className="modalFooter">
            Already have account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="linkButton"
            >
              login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const CreateModal = ({ onClose, onCreate, componentTypes, categories }) => {
  const [createStep, setCreateStep] = useState(1);
  const [newComponent, setNewComponent] = useState({
    type: '',
    name: '',
    category: '',
    html: '',
    css: ''
  });
  const [bgColor, setBgColor] = useState('#1a1a1a');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCreate(newComponent);
  };

  const handleClose = () => {
    setCreateStep(1);
    setNewComponent({
      type: '',
      name: '',
      category: '',
      html: '',
      css: ''
    });
    setBgColor('#1a1a1a');
    onClose();
  };

  return (
    <div className="modalOverlay">
      <div className="modalLarge">
        <button onClick={handleClose} className="closeButton">
          <X size={28} />
        </button>
        
        {createStep === 1 ? (
          <>
            <h2 className="modalTitle">What are you making?</h2>
            
            <div className="typeGrid">
              {componentTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setNewComponent(prev => ({ ...prev, type: type.id }))}
                  className={`typeCard ${newComponent.type === type.id ? 'typeCardActive' : ''}`}
                >
                  <div className="typeIcon">{type.icon}</div>
                  <div className="typeName">{type.name}</div>
                </button>
              ))}
            </div>
            
            <div className="modalFooterRight">
              <button
                onClick={() => {
                  if (newComponent.type) {
                    setCreateStep(2);
                  } else {
                    alert('Please select a component type');
                  }
                }}
                disabled={!newComponent.type}
                className={`continueButton ${!newComponent.type ? 'continueButtonDisabled' : ''}`}
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <button 
              onClick={() => setCreateStep(1)} 
              className="backButton"
              style={{ marginBottom: '20px' }}
            >
              ← Back to Type Selection
            </button>
            
            <h2 className="modalTitle">Create Your Component</h2>
            <p className="modalSubtitle">Type: {newComponent.type}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              {/* LEFT: Form */}
              <form onSubmit={handleSubmit} className="formContainer" style={{ margin: 0 }}>
                <div className="formGroup">
                  <label className="label">Component Name *</label>
                  <input
                    type="text"
                    className="input"
                    value={newComponent.name}
                    onChange={(e) => setNewComponent(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g., Gradient Button"
                    required
                  />
                </div>
                
                <div className="formGroup">
                  <label className="label">Category *</label>
                  <select
                    className="input"
                    value={newComponent.category}
                    onChange={(e) => setNewComponent(prev => ({ ...prev, category: e.target.value }))}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.filter(cat => cat.id !== 'all').map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="formGroup">
                  <label className="label">HTML Code *</label>
                  <textarea
                    className="input"
                    style={{ minHeight: '150px', fontFamily: 'monospace', fontSize: '13px' }}
                    value={newComponent.html}
                    onChange={(e) => setNewComponent(prev => ({ ...prev, html: e.target.value }))}
                    placeholder='<button class="my-button">Click me</button>'
                    required
                  />
                </div>
                
                <div className="formGroup">
                  <label className="label">CSS Code *</label>
                  <textarea
                    className="input"
                    style={{ minHeight: '150px', fontFamily: 'monospace', fontSize: '13px' }}
                    value={newComponent.css}
                    onChange={(e) => setNewComponent(prev => ({ ...prev, css: e.target.value }))}
                    placeholder='.my-button { padding: 10px 20px; background: #9333ea; }'
                    required
                  />
                </div>
              </form>

              {/* RIGHT: Live Preview */}
              <div>
                <div className="formGroup">
                  <label className="label">Live Preview</label>
                  <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label className="colorLabel" style={{ fontSize: '13px' }}>Background:</label>
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="colorInput"
                    />
                  </div>
                  <div 
                    className="preview" 
                    style={{
                      backgroundColor: bgColor,
                      minHeight: '400px',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <style>{newComponent.css}</style>
                    <div dangerouslySetInnerHTML={{ __html: newComponent.html }} />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={handleClose}
                className="secondaryButton"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="submitButton"
              >
                Create Component
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ========== USER COMPONENT DETAIL PAGE ==========
const UserComponentDetailPage = ({ component, onBack, onDelete, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('html');
  const [bgColor, setBgColor] = useState('#1a1a1a');
  const [isEditing, setIsEditing] = useState(false);
  const [editableHtml, setEditableHtml] = useState(component?.html || '');
  const [editableCss, setEditableCss] = useState(component?.css || '');
  const [editableName, setEditableName] = useState(component?.name || '');

  const handleSave = async () => {
    if (!editableName.trim()) {
      alert('Component name is required');
      return;
    }

    try {
      await onUpdate(component._id, {
        name: editableName,
        html: editableHtml,
        css: editableCss
      });
      setIsEditing(false);
      alert('Component updated successfully!');
    } catch (error) {
      console.error('Error updating component:', error);
      alert('Failed to update component');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this component? This action cannot be undone.')) {
      try {
        await onDelete(component._id);
        alert('Component deleted successfully!');
        onBack();
      } catch (error) {
        console.error('Error deleting component:', error);
        alert('Failed to delete component');
      }
    }
  };

  return (
    <div className="contentPage">
      <button onClick={onBack} className="backButton">
        ← Back to Profile
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editableName}
          onChange={(e) => setEditableName(e.target.value)}
          className="input"
          style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', maxWidth: '600px' }}
        />
      ) : (
        <h1 className="pageTitle">{component?.name || 'Component'}</h1>
      )}
      
      <div className="detailGrid">
        <div className="previewPanel">
          <div className="panelHeader">
            <div className="colorPicker">
              <label className="colorLabel">bg colour</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="colorInput"
              />
            </div>
          </div>
          <div className="preview" style={{backgroundColor: bgColor}}>
            <style>{editableCss}</style>
            <div dangerouslySetInnerHTML={{ __html: editableHtml }} />
          </div>
        </div>

        <div className="codePanel">
          <div className="panelHeader">
            <div className="tabContainer">
              <button
                onClick={() => setActiveTab('html')}
                className={`tab ${activeTab === 'html' ? 'tabActive' : ''}`}
              >
                HTML
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`tab ${activeTab === 'css' ? 'tabActive' : ''}`}
              >
                CSS
              </button>
            </div>
            <button 
              className="copyButton"
              onClick={() => {
                navigator.clipboard.writeText(activeTab === 'html' ? editableHtml : editableCss);
                alert('Copied to clipboard!');
              }}
            >
              copy
            </button>
          </div>
          <div className="codeView">
            {activeTab === 'html' ? (
              <textarea
                value={editableHtml}
                onChange={(e) => setEditableHtml(e.target.value)}
                className="codeTextarea"
                spellCheck="false"
                disabled={!isEditing}
                style={{ opacity: isEditing ? 1 : 0.7 }}
              />
            ) : (
              <textarea
                value={editableCss}
                onChange={(e) => setEditableCss(e.target.value)}
                className="codeTextarea"
                spellCheck="false"
                disabled={!isEditing}
                style={{ opacity: isEditing ? 1 : 0.7 }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="actionBar">
        <button 
          onClick={handleDelete} 
          className="secondaryButton"
          style={{ backgroundColor: '#dc2626', color: '#fff' }}
        >
          Delete Component
        </button>
        <div className="actionBarRight">
          {isEditing ? (
            <>
              <button 
                onClick={() => {
                  setIsEditing(false);
                  setEditableHtml(component.html);
                  setEditableCss(component.css);
                  setEditableName(component.name);
                }}
                className="secondaryButton"
              >
                Cancel
              </button>
              <button onClick={handleSave} className="submitButton">
                Save Changes
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsEditing(true)} 
              className="submitButton"
            >
              Edit Component
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ========== MAIN APP COMPONENT ==========

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUsername, setCurrentUsername] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedUserComponent, setSelectedUserComponent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pageHistory, setPageHistory] = useState(['home']);
  const [searchQuery, setSearchQuery] = useState('');

  // ========== CHECK AUTH ON MOUNT ==========
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');
    
    console.log('🔍 App mounted - checking auth:', { storedUserId, storedUsername });
    
    if (storedUserId && storedUsername) {
      setIsAuthenticated(true);
      setCurrentUserId(storedUserId);
      setCurrentUsername(storedUsername);
      console.log('✅ User restored from localStorage:', storedUsername);
    } else {
      console.log('❌ No auth found in localStorage');
    }
  }, []);

  const navigateToPage = useCallback((page, category = null) => {
    setPageHistory(prev => [...prev, currentPage]);
    setCurrentPage(page);
    if (category) setSelectedCategory(category);
  }, [currentPage]);

  const goBack = useCallback(() => {
    if (pageHistory.length > 0) {
      const previousPage = pageHistory[pageHistory.length - 1];
      setPageHistory(prev => prev.slice(0, -1));
      setCurrentPage(previousPage);
    }
  }, [pageHistory]);

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchedCategory = categories.find(cat => 
        cat.name.toLowerCase().includes(query) || 
        cat.id.toLowerCase().includes(query)
      );
      
      if (matchedCategory) {
        navigateToPage('components', matchedCategory.id);
      } else {
        navigateToPage('components', 'all');
      }
    }
  }, [searchQuery, navigateToPage]);

  const handleLogin = useCallback(async (username, password) => {
    console.log('🔐 Login attempt for:', username);
    
    if (username && password) {
      try {
        const result = await api.login(username, password);
        console.log('📥 Login response:', result);
        
        if (result.error) {
          alert(result.error);
        } else {
          console.log('✅ Login successful! userId:', result.userId);
          
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('username', result.username);
          
          setIsAuthenticated(true);
          setCurrentUserId(result.userId);
          setCurrentUsername(result.username);
          
          console.log('✅ Stored in localStorage:', {
            userId: localStorage.getItem('userId'),
            username: localStorage.getItem('username')
          });
          
          setShowLoginModal(false);
          alert('Login successful!');
        }
      } catch (error) {
        console.error('❌ Login error:', error);
        alert('Login failed: ' + error.message);
      }
    } else {
      alert('Please fill in all fields');
    }
  }, []);

  const handleRegister = useCallback(async (userData) => {
    console.log('📝 Register attempt for:', userData.username);
    
    if (userData.username && userData.password && userData.email) {
      try {
        const result = await api.register(userData);
        
        console.log('📥 Register response:', result);
        
        if (result.error) {
          alert(result.error);
        } else {
          console.log('✅ Registration successful! userId:', result.userId);
          
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('username', result.username);
          
          setIsAuthenticated(true);
          setCurrentUserId(result.userId);
          setCurrentUsername(result.username);
          
          console.log('✅ Stored in localStorage:', {
            userId: localStorage.getItem('userId'),
            username: localStorage.getItem('username')
          });
          
          setShowRegisterModal(false);
          alert('Registration successful!');
        }
      } catch (error) {
        console.error('❌ Registration error:', error);
        alert('Registration failed: ' + error.message);
      }
    } else {
      alert('Please fill in required fields (username, password, email)');
    }
  }, []);

  const handleLogout = useCallback(() => {
    console.log('👋 Logging out...');
    setIsAuthenticated(false);
    setCurrentUserId(null);
    setCurrentUsername('');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setCurrentPage('home');
    setPageHistory(['home']);
    console.log('✅ Logged out successfully');
  }, []);

  const handleCreateComponent = useCallback(async (componentData) => {
    if (!currentUserId) {
      alert('Please login first');
      setShowCreateModal(false);
      setShowLoginModal(true);
      return;
    }

    if (!componentData.name || !componentData.category || !componentData.html || !componentData.css) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      console.log('📤 Creating component:', componentData);
      
      const fullComponentData = {
        userId: currentUserId,
        name: componentData.name,
        type: componentData.type,
        category: componentData.category,
        html: componentData.html,
        css: componentData.css
      };

      const result = await api.createComponent(fullComponentData);
      console.log('📥 Create component response:', result);
      
      if (result.error) {
        alert('Failed to create component: ' + result.error);
      } else {
        alert('Component created successfully!');
        setShowCreateModal(false);
        navigateToPage('profile');
      }
    } catch (error) {
      console.error('❌ Error creating component:', error);
      alert('Failed to create component: ' + error.message);
    }
  }, [currentUserId, navigateToPage]);

  const handleUpdateComponent = useCallback(async (componentId, componentData) => {
    try {
      console.log('📤 Updating component:', componentId, componentData);
      const result = await api.updateComponent(componentId, componentData);
      
      if (result.error) {
        alert('Failed to update component: ' + result.error);
        throw new Error(result.error);
      }
      
      console.log('✅ Component updated successfully');
      return result;
    } catch (error) {
      console.error('❌ Error updating component:', error);
      throw error;
    }
  }, []);

  const handleDeleteComponent = useCallback(async (componentId) => {
    try {
      console.log('🗑️ Deleting component:', componentId);
      const result = await api.deleteComponent(componentId);
      
      if (result.error) {
        alert('Failed to delete component: ' + result.error);
        throw new Error(result.error);
      }
      
      console.log('✅ Component deleted successfully');
      return result;
    } catch (error) {
      console.error('❌ Error deleting component:', error);
      throw error;
    }
  }, []);

  const handleViewUserComponent = useCallback((component) => {
    setSelectedUserComponent(component);
    navigateToPage('user-component-detail');
  }, [navigateToPage]);

  const Sidebar = () => (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h1 className="logo" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
          <span className="logoPurple">UI</span>
          <span className="logoWhite">Stack</span>
        </h1>
      </div>
      
      <div className="sidebarContent">
        <div className="componentHeader">
          <Menu size={16} />
          <span>components</span>
        </div>
        
        <div className="categoryList">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => navigateToPage('components', cat.id)}
              className={`categoryButton ${selectedCategory === cat.id ? 'categoryButtonActive' : ''}`}
            >
              <span className="categoryIcon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const Header = () => (
    <div className="header">
      <div className="headerContent">
        {isAuthenticated ? (
          <>
            <button onClick={() => setShowCreateModal(true)} className="createButton">
              <Plus size={16} />
              Create
            </button>
            <button onClick={() => navigateToPage('profile')} className="profileButton">
              ▼ {currentUsername}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setShowLoginModal(true)}
              className="createButton"
            >
              <Plus size={16} />
              Create
            </button>
            <button onClick={() => setShowLoginModal(true)} className="loginButton">
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="homePage">
      <h1 className="homeTitle">
        Library for<br />open-source UI
      </h1>
      
      <div className="searchContainer">
        <div className="searchWrapper">
          <Search className="searchIcon" size={20} />
          <input
            type="text"
            placeholder="Search for component, style or create one"
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="actionButtons">
        <button 
          className="actionButton"
          onClick={() => window.open('https://github.com/palakchandak8/UIStack', '_blank')}
        >
          <Users size={18} />
          Join the community
        </button>
        <button 
          className="actionButton"
          onClick={() => window.open('https://github.com/palakchandak8/UIStack', '_blank')}
        >
          <Star size={18} />
          Star on GitHub
        </button>
        <button 
          className="actionButton"
          onClick={() => window.open('https://docs.google.com/document/d/1PaOOEK-xt5KosGD7RA_PDSQz3hvd2ymL/edit', '_blank')}
        >
          user guide
        </button>
      </div>
    </div>
  );

  const ComponentGridPage = () => {
    const categoryComponents = selectedCategory === 'all' 
      ? Object.values(components).flat()
      : components[selectedCategory] || [];

    return (
      <div className="contentPage">
        {currentPage !== 'home' && (
          <button onClick={goBack} className="backButton">
            ← Back
          </button>
        )}
        <h1 className="pageTitle">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h1>
        <div className="componentGrid">
          {categoryComponents.map((comp) => (
            <button
              key={comp.id}
              onClick={() => {
                setSelectedComponent(comp);
                navigateToPage('component-detail');
              }}
              className="componentCard"
            >
              <div className="componentCardName">
                {comp.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const ComponentDetailPage = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [bgColor, setBgColor] = useState('#1a1a1a');
    const [editableHtml, setEditableHtml] = useState(selectedComponent?.html || '');
    const [editableCss, setEditableCss] = useState(selectedComponent?.css || '');

    return (
      <div className="contentPage">
        {currentPage !== 'home' && (
          <button onClick={goBack} className="backButton">
            ← Back
          </button>
        )}
        <h1 className="pageTitle">{selectedComponent?.name || 'Component'}</h1>
        
        <div className="detailGrid">
          <div className="previewPanel">
            <div className="panelHeader">
              <div className="colorPicker">
                <label className="colorLabel">bg colour</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="colorInput"
                />
              </div>
            </div>
            <div className="preview" style={{backgroundColor: bgColor}}>
              <style>{editableCss}</style>
              <div dangerouslySetInnerHTML={{ __html: editableHtml }} />
            </div>
          </div>

          <div className="codePanel">
            <div className="panelHeader">
              <div className="tabContainer">
                <button
                  onClick={() => setActiveTab('html')}
                  className={`tab ${activeTab === 'html' ? 'tabActive' : ''}`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`tab ${activeTab === 'css' ? 'tabActive' : ''}`}
                >
                  CSS
                </button>
              </div>
              <button 
                className="copyButton"
                onClick={() => {
                  navigator.clipboard.writeText(activeTab === 'html' ? editableHtml : editableCss);
                  alert('Copied to clipboard!');
                }}
              >
                copy
              </button>
            </div>
            <div className="codeView">
              {activeTab === 'html' ? (
                <textarea
                  value={editableHtml}
                  onChange={(e) => setEditableHtml(e.target.value)}
                  className="codeTextarea"
                  spellCheck="false"
                />
              ) : (
                <textarea
                  value={editableCss}
                  onChange={(e) => setEditableCss(e.target.value)}
                  className="codeTextarea"
                  spellCheck="false"
                />
              )}
            </div>
          </div>
        </div>

        <div className="actionBar">
          <button className="secondaryButton">Change type</button>
          <div className="actionBarRight">
            <button className="secondaryButton">save as draft</button>
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <Sidebar />
      <Header />
      
      <div className="mainContent">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'components' && <ComponentGridPage />}
        {currentPage === 'component-detail' && <ComponentDetailPage />}
        {currentPage === 'profile' && (
          currentUserId ? (
            <ProfilePage 
              userId={currentUserId} 
              onBack={goBack}
              onLogout={handleLogout}
              onViewComponent={handleViewUserComponent}
            />
          ) : (
            <div className="contentPage">
              <button onClick={goBack} className="backButton">
                ← Back
              </button>
              <div style={{ textAlign: 'center', padding: '80px 20px' }}>
                <h2 style={{ color: '#fff', fontSize: '32px', marginBottom: '16px' }}>
                  Please Login
                </h2>
                <p style={{ color: '#666', fontSize: '16px', marginBottom: '32px' }}>
                  You need to be logged in to view your profile
                </p>
                <button 
                  onClick={() => {
                    setCurrentPage('home');
                    setShowLoginModal(true);
                  }} 
                  className="submitButton"
                >
                  Login to Continue
                </button>
              </div>
            </div>
          )
        )}
        {currentPage === 'user-component-detail' && selectedUserComponent && (
          <UserComponentDetailPage 
            component={selectedUserComponent}
            onBack={goBack}
            onDelete={handleDeleteComponent}
            onUpdate={handleUpdateComponent}
          />
        )}
      </div>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}
      
      {showRegisterModal && (
        <RegisterModal 
          onClose={() => setShowRegisterModal(false)}
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
      
      {showCreateModal && (
        <CreateModal 
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateComponent}
          componentTypes={componentTypes}
          categories={categories}
        />
      )}
    </div>
  );
};

export default App;