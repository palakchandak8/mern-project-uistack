// uiComponents.jsx - Fixed with string HTML

export const categories = [
  { id: 'all', name: 'All', icon: '☰' },
  { id: 'buttons', name: 'Buttons', icon: '▶' },
  { id: 'checkboxes', name: 'Checkboxes', icon: '☑' },
  { id: 'inputs', name: 'Inputs', icon: '⌨' },
  { id: 'radio', name: 'Radio buttons', icon: '◉' },
  { id: 'forms', name: 'Forms', icon: '▦' },
  { id: 'toggle', name: 'Toggle switches', icon: '⚡' },
  { id: 'cards', name: 'Cards', icon: '♦' },
  { id: 'loaders', name: 'Loaders', icon: '⋯' },
  { id: 'tooltips', name: 'Tooltips', icon: '◐' },
  { id: 'modals', name: 'Modals', icon: '⊞' },
  { id: 'dropdowns', name: 'Dropdowns', icon: '▼' },
  { id: 'alerts', name: 'Alerts', icon: '⚠' },
  { id: 'badges', name: 'Badges', icon: '●' },
  { id: 'progress', name: 'Progress Bars', icon: '▬' }
];

export const componentTypes = [
  { id: 'button', name: 'Button', icon: '▣' },
  { id: 'toggle', name: 'Toggle switch', icon: '◐' },
  { id: 'checkbox', name: 'Checkbox', icon: '☑' },
  { id: 'loader', name: 'Loader', icon: '⋯' },
  { id: 'input', name: 'Input', icon: '⋯' },
  { id: 'form', name: 'Form', icon: '☰' },
  { id: 'radio', name: 'Radio buttons', icon: '◉' },
  { id: 'tooltip', name: 'Tooltips', icon: '◐' },
  { id: 'card', name: 'Card', icon: '▭' },
  { id: 'modal', name: 'Modal', icon: '⊞' },
  { id: 'dropdown', name: 'Dropdown', icon: '▼' },
  { id: 'alert', name: 'Alert', icon: '⚠' },
  { id: 'badge', name: 'Badge', icon: '●' },
  { id: 'progress', name: 'Progress Bar', icon: '▬' }
];

export const components = {
  buttons: [
    {
      id: 'btn-1',
      name: 'Download Button',
      html: `<button class="ui-btn"><span>Download</span></button>`,
      css: `.ui-btn {
  box-sizing: border-box;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: Menlo, Roboto Mono, monospace;
  background: rgb(41, 41, 41);
  border: none;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.137);
}

.ui-btn:hover {
  background: rgb(51, 51, 51);
}

.ui-btn:hover span {
  color: #FAC921;
}`
    },
    {
      id: 'btn-2',
      name: 'Gradient Button',
      html: `<button class="gradient-btn">Button</button>`,
      css: `.gradient-btn {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}`
    },
    {
      id: 'btn-3',
      name: 'Subscribe Button',
      html: `<button class="subscribe-btn">Subscribe →</button>`,
      css: `.subscribe-btn {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  background: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.subscribe-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #000;
  transition: left 0.3s ease;
  z-index: -1;
}

.subscribe-btn:hover::before {
  left: 0;
}

.subscribe-btn:hover {
  color: #fff;
}`
    },
    {
      id: 'btn-4',
      name: 'Neon Button',
      html: `<button class="neon-btn">Glow Button</button>`,
      css: `.neon-btn {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #00ff88;
  background: transparent;
  border: 2px solid #00ff88;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px #00ff88;
}

.neon-btn:hover {
  background: #00ff88;
  color: #000;
  box-shadow: 0 0 20px #00ff88, 0 0 40px #00ff88;
  text-shadow: none;
}`
    },
    {
      id: 'btn-5',
      name: 'Ripple Button',
      html: `<button class="ripple-btn">Click Me</button>`,
      css: `.ripple-btn {
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.ripple-btn:hover {
  background: #2563eb;
}

.ripple-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple-btn:active::before {
  width: 300px;
  height: 300px;
}`
    },
    {
      id: 'btn-6',
      name: 'Icon Button',
      html: `<button class="icon-btn">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3v14M3 10h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  Add Item
</button>`,
      css: `.icon-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: #10b981;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-btn:hover {
  background: #059669;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.icon-btn svg {
  transition: transform 0.3s ease;
}

.icon-btn:hover svg {
  transform: rotate(90deg);
}`
    },
    {
      id: 'btn-7',
      name: '3D Button',
      html: `<button class="btn-3d">Press Me</button>`,
      css: `.btn-3d {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background: #f59e0b;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.1s ease;
  box-shadow: 0 6px 0 #d97706, 0 8px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  top: 0;
}

.btn-3d:hover {
  background: #fbbf24;
}

.btn-3d:active {
  top: 4px;
  box-shadow: 0 2px 0 #d97706, 0 4px 4px rgba(0, 0, 0, 0.3);
}`
    },
    {
      id: 'btn-8',
      name: 'Outline Button',
      html: `<button class="outline-btn"><span>Click Here</span></button>`,
      css: `.outline-btn {
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  color: #8b5cf6;
  background: transparent;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.outline-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #8b5cf6;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  z-index: 0;
}

.outline-btn:hover::before {
  width: 400px;
  height: 400px;
}

.outline-btn:hover {
  color: white;
  border-color: #8b5cf6;
}

.outline-btn span {
  position: relative;
  z-index: 1;
}`
    },
    {
      id: 'btn-9',
      name: 'Animated Border Button',
      html: `<button class="animated-border-btn"><span>Hover Me</span></button>`,
      css: `.animated-border-btn {
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #1f1f1f;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.animated-border-btn::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080);
  border-radius: 8px;
  z-index: -1;
  background-size: 400%;
  animation: borderAnimation 3s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.animated-border-btn:hover::before {
  opacity: 1;
}

@keyframes borderAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
    },
    {
      id: 'btn-10',
      name: 'Ghost Button',
      html: `<button class="ghost-btn">Ghost Button</button>`,
      css: `.ghost-btn {
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  color: #e5e7eb;
  background: transparent;
  border: 2px solid #4b5563;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ghost-btn:hover {
  color: white;
  border-color: white;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}`
    }
  ],
  
  checkboxes: [
    {
      id: 'check-1',
      name: 'Custom Checkbox',
      html: `<label class="custom-checkbox">
  <input type="checkbox" />
  <span class="checkmark"></span>
  <span class="label-text">Accept terms</span>
</label>`,
      css: `.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 35px;
  font-size: 16px;
  color: #fff;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #1f1f1f;
  border: 2px solid #666;
  border-radius: 4px;
  transition: all 0.3s;
}

.custom-checkbox:hover .checkmark {
  border-color: #9333ea;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #9333ea;
  border-color: #9333ea;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.label-text {
  margin-left: 10px;
}`
    },
    {
      id: 'check-2',
      name: 'Animated Checkbox',
      html: `<label class="animated-checkbox">
  <input type="checkbox" />
  <span class="checkbox-box"></span>
  <span>Subscribe to newsletter</span>
</label>`,
      css: `.animated-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
}

.animated-checkbox input {
  display: none;
}

.checkbox-box {
  width: 24px;
  height: 24px;
  background: #1f1f1f;
  border: 2px solid #666;
  border-radius: 6px;
  position: relative;
  transition: all 0.3s ease;
}

.animated-checkbox:hover .checkbox-box {
  transform: scale(1.1);
  border-color: #a855f7;
}

.animated-checkbox input:checked ~ .checkbox-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  animation: checkbounce 0.4s ease;
}

.checkbox-box::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.animated-checkbox input:checked ~ .checkbox-box::after {
  transform: translate(-50%, -50%) scale(1);
}

@keyframes checkbounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`
    },
    {
      id: 'check-3',
      name: 'Rounded Checkbox',
      html: `<label class="rounded-checkbox">
  <input type="checkbox" />
  <span class="rounded-check"></span>
  <span>Enable notifications</span>
</label>`,
      css: `.rounded-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
}

.rounded-checkbox input {
  display: none;
}

.rounded-check {
  width: 22px;
  height: 22px;
  background: #2a2a2a;
  border: 2px solid #555;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}

.rounded-checkbox:hover .rounded-check {
  border-color: #10b981;
}

.rounded-checkbox input:checked ~ .rounded-check {
  background: #10b981;
  border-color: #10b981;
}

.rounded-check::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0) rotate(-45deg);
  color: white;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.rounded-checkbox input:checked ~ .rounded-check::after {
  transform: translate(-50%, -50%) scale(1) rotate(0deg);
}`
    },
    {
      id: 'check-4',
      name: 'Switch Checkbox',
      html: `<label class="switch-checkbox">
  <input type="checkbox" />
  <span class="switch-slider"></span>
  <span class="switch-label">Dark Mode</span>
</label>`,
      css: `.switch-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
}

.switch-checkbox input {
  display: none;
}

.switch-slider {
  width: 44px;
  height: 24px;
  background: #333;
  border-radius: 24px;
  position: relative;
  transition: all 0.3s ease;
}

.switch-slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: all 0.3s ease;
}

.switch-checkbox input:checked ~ .switch-slider {
  background: #3b82f6;
}

.switch-checkbox input:checked ~ .switch-slider::before {
  transform: translateX(20px);
}`
    }
  ],

  inputs: [
    {
      id: 'input-1',
      name: 'Modern Input',
      html: `<div class="modern-input-wrapper">
  <input type="text" class="modern-input" placeholder=" " />
  <label class="modern-label">Email address</label>
</div>`,
      css: `.modern-input-wrapper {
  position: relative;
  width: 300px;
}

.modern-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  color: #fff;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.modern-input:focus {
  border-color: #9333ea;
  background: #2a2a2a;
}

.modern-label {
  position: absolute;
  left: 16px;
  top: 12px;
  color: #666;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
}

.modern-input:focus ~ .modern-label,
.modern-input:not(:placeholder-shown) ~ .modern-label {
  top: -10px;
  left: 12px;
  font-size: 12px;
  color: #9333ea;
  background: #000;
  padding: 0 4px;
}`
    },
    {
      id: 'input-2',
      name: 'Search Input',
      html: `<div class="search-input-wrapper">
  <input type="text" class="search-input" placeholder="Search..." />
  <span class="search-icon">🔍</span>
</div>`,
      css: `.search-input-wrapper {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 45px;
  font-size: 16px;
  color: #fff;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 24px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.6;
}`
    },
    {
      id: 'input-3',
      name: 'Password Input',
      html: `<div class="password-input-wrapper">
  <input type="password" class="password-input" placeholder="Enter password" />
  <button class="toggle-password">👁</button>
</div>`,
      css: `.password-input-wrapper {
  position: relative;
  width: 300px;
}

.password-input {
  width: 100%;
  padding: 12px 45px 12px 16px;
  font-size: 16px;
  color: #fff;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.password-input:focus {
  border-color: #9333ea;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.toggle-password:hover {
  opacity: 1;
}`
    },
    {
      id: 'input-4',
      name: 'Underline Input',
      html: `<div class="underline-input-wrapper">
  <input type="text" class="underline-input" placeholder=" " />
  <label class="underline-label">Your Name</label>
  <span class="underline-bar"></span>
</div>`,
      css: `.underline-input-wrapper {
  position: relative;
  width: 300px;
  margin: 20px 0;
}

.underline-input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  border-bottom: 2px solid #444;
  outline: none;
  transition: all 0.3s ease;
}

.underline-label {
  position: absolute;
  left: 0;
  top: 10px;
  color: #666;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
}

.underline-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease;
}

.underline-input:focus ~ .underline-bar {
  width: 100%;
}

.underline-input:focus ~ .underline-label,
.underline-input:not(:placeholder-shown) ~ .underline-label {
  top: -20px;
  font-size: 12px;
  color: #3b82f6;
}`
    },
    {
      id: 'input-5',
      name: 'Icon Input',
      html: `<div class="icon-input-wrapper">
  <span class="input-icon">📧</span>
  <input type="email" class="icon-input" placeholder="Enter your email" />
</div>`,
      css: `.icon-input-wrapper {
  position: relative;
  width: 300px;
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.7;
  pointer-events: none;
}

.icon-input {
  width: 100%;
  padding: 12px 16px 12px 45px;
  font-size: 15px;
  color: #fff;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  outline: none;
  transition: all 0.3s ease;
}

.icon-input:focus {
  border-color: #10b981;
  background: #252525;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}`
    },
    {
      id: 'input-6',
      name: 'Gradient Border Input',
      html: `<div class="gradient-input-wrapper">
  <input type="text" class="gradient-input" placeholder="Enter text..." />
</div>`,
      css: `.gradient-input-wrapper {
  position: relative;
  width: 300px;
  padding: 2px;
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
  border-radius: 10px;
}

.gradient-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  color: #fff;
  background: #1f1f1f;
  border: none;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.gradient-input:focus {
  background: #2a2a2a;
}`
    }
  ],

  forms: [
    {
      id: 'form-1',
      name: 'Contact Form',
      html: `<form class="contact-form">
  <h3 class="form-title">Get in touch</h3>
  <input type="text" placeholder="Name" class="form-input" />
  <input type="email" placeholder="Email" class="form-input" />
  <textarea placeholder="Message" class="form-textarea"></textarea>
  <button type="submit" class="form-submit">Send Message</button>
</form>`,
      css: `.contact-form {
  max-width: 400px;
  padding: 32px;
  background: #1f1f1f;
  border-radius: 16px;
  border: 1px solid #333;
}

.form-title {
  margin: 0 0 24px 0;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #fff;
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #9333ea;
  background: #1a1a1a;
}

.form-submit {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #9333ea;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form-submit:hover {
  background: #7c3aed;
}`
    },
    {
      id: 'form-2',
      name: 'Login Form',
      html: `<form class="login-form">
  <h2 class="login-title">Welcome Back</h2>
  <p class="login-subtitle">Sign in to continue</p>
  <div class="login-input-group">
    <label class="login-label">Username</label>
    <input type="text" class="login-input" />
  </div>
  <div class="login-input-group">
    <label class="login-label">Password</label>
    <input type="password" class="login-input" />
  </div>
  <button type="submit" class="login-btn">Sign In</button>
  <a href="#" class="login-link">Forgot password?</a>
</form>`,
      css: `.login-form {
  max-width: 380px;
  padding: 40px;
  background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%);
  border-radius: 20px;
  border: 1px solid #404040;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.login-title {
  margin: 0 0 8px 0;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}

.login-subtitle {
  margin: 0 0 32px 0;
  color: #888;
  font-size: 14px;
  text-align: center;
}

.login-input-group {
  margin-bottom: 20px;
}

.login-label {
  display: block;
  margin-bottom: 8px;
  color: #ccc;
  font-size: 13px;
  font-weight: 600;
}

.login-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  color: #fff;
  background: #151515;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.login-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.login-btn {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.login-link {
  display: block;
  margin-top: 16px;
  color: #667eea;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #764ba2;
}`
    },
    {
      id: 'form-3',
      name: 'Newsletter Form',
      html: `<form class="newsletter-form">
  <h3 class="newsletter-title">📬 Subscribe</h3>
  <p class="newsletter-text">Get updates delivered to your inbox</p>
  <div class="newsletter-input-wrapper">
    <input type="email" class="newsletter-input" placeholder="your@email.com" />
    <button type="submit" class="newsletter-btn">→</button>
  </div>
</form>`,
      css: `.newsletter-form {
  max-width: 400px;
  padding: 32px;
  background: #1f1f1f;
  border-radius: 16px;
  border: 1px solid #333;
  text-align: center;
}

.newsletter-title {
  margin: 0 0 12px 0;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

.newsletter-text {
  margin: 0 0 24px 0;
  color: #888;
  font-size: 14px;
}

.newsletter-input-wrapper {
  display: flex;
  gap: 8px;
}

.newsletter-input {
  flex: 1;
  padding: 14px 16px;
  font-size: 15px;
  color: #fff;
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-input:focus {
  border-color: #3b82f6;
  background: #151515;
}

.newsletter-btn {
  padding: 14px 20px;
  font-size: 20px;
  color: white;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-btn:hover {
  background: #2563eb;
  transform: translateX(4px);
}`
    }
  ],

  tooltips: [
    {
      id: 'tooltip-1',
      name: 'Hover Tooltip',
      html: `<div class="tooltip-container">
  <button class="tooltip-btn">Hover me</button>
  <span class="tooltip-text">This is a tooltip!</span>
</div>`,
      css: `.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-btn {
  padding: 10px 20px;
  background: #9333ea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;
  transition: opacity 0.3s, visibility 0.3s;
}

.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`
    },
    {
      id: 'tooltip-2',
      name: 'Bottom Tooltip',
      html: `<div class="tooltip-bottom-container">
  <button class="tooltip-bottom-btn">Hover for info</button>
  <span class="tooltip-bottom-text">Appears at the bottom!</span>
</div>`,
      css: `.tooltip-bottom-container {
  position: relative;
  display: inline-block;
}

.tooltip-bottom-btn {
  padding: 10px 20px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.tooltip-bottom-text {
  visibility: hidden;
  opacity: 0;
  width: 160px;
  background-color: #1f1f1f;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -80px;
  transition: all 0.3s ease;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tooltip-bottom-text::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #1f1f1f transparent;
}

.tooltip-bottom-container:hover .tooltip-bottom-text {
  visibility: visible;
  opacity: 1;
  top: 135%;
}`
    },
    {
      id: 'tooltip-3',
      name: 'Gradient Tooltip',
      html: `<div class="gradient-tooltip-container">
  <button class="gradient-tooltip-btn">✨ Hover</button>
  <span class="gradient-tooltip-text">Beautiful gradient!</span>
</div>`,
      css: `.gradient-tooltip-container {
  position: relative;
  display: inline-block;
}

.gradient-tooltip-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.gradient-tooltip-text {
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
}

.gradient-tooltip-container:hover .gradient-tooltip-text {
  visibility: visible;
  opacity: 1;
  bottom: 135%;
}`
    }
  ],

  loaders: [
    {
      id: 'loader-1',
      name: 'Spinner Loader',
      html: `<div class="spinner-loader"></div>`,
      css: `.spinner-loader {
  width: 50px;
  height: 50px;
  border: 5px solid #333;
  border-top: 5px solid #9333ea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
    },
    {
      id: 'loader-2',
      name: 'Dots Loader',
      html: `<div class="dots-loader"><span></span><span></span><span></span></div>`,
      css: `.dots-loader {
  display: flex;
  gap: 8px;
}

.dots-loader span {
  width: 12px;
  height: 12px;
  background: #9333ea;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.dots-loader span:nth-child(1) {
  animation-delay: -0.32s;
}

.dots-loader span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1);
  }
}`
    },
    {
      id: 'loader-3',
      name: 'Pulse Loader',
      html: `<div class="pulse-loader"></div>`,
      css: `.pulse-loader {
  width: 50px;
  height: 50px;
  background: #9333ea;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.5;
  }
}`
    },
    {
      id: 'loader-4',
      name: 'Bar Loader',
      html: `<div class="bar-loader">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>`,
      css: `.bar-loader {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 40px;
}

.bar {
  width: 6px;
  background: #9333ea;
  border-radius: 3px;
  animation: barGrow 1.2s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: 0s; }
.bar:nth-child(2) { animation-delay: 0.1s; }
.bar:nth-child(3) { animation-delay: 0.2s; }
.bar:nth-child(4) { animation-delay: 0.3s; }

@keyframes barGrow {
  0%, 100% { height: 10px; }
  50% { height: 40px; }
}`
    },
    {
      id: 'loader-5',
      name: 'Ring Loader',
      html: `<div class="ring-loader"></div>`,
      css: `.ring-loader {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 6px solid #333;
  border-top-color: #3b82f6;
  border-right-color: #10b981;
  animation: ringRotate 1s linear infinite;
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
    },
    {
      id: 'loader-6',
      name: 'Wave Loader',
      html: `<div class="wave-loader">
  <div class="wave-bar"></div>
  <div class="wave-bar"></div>
  <div class="wave-bar"></div>
  <div class="wave-bar"></div>
  <div class="wave-bar"></div>
</div>`,
      css: `.wave-loader {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 50px;
}

.wave-bar {
  width: 4px;
  height: 10px;
  background: linear-gradient(180deg, #667eea, #764ba2);
  border-radius: 2px;
  animation: wave 1s ease-in-out infinite;
}

.wave-bar:nth-child(1) { animation-delay: 0s; }
.wave-bar:nth-child(2) { animation-delay: 0.1s; }
.wave-bar:nth-child(3) { animation-delay: 0.2s; }
.wave-bar:nth-child(4) { animation-delay: 0.3s; }
.wave-bar:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
  0%, 100% { height: 10px; }
  50% { height: 40px; }
}`
    }
  ],

  cards: [
    {
      id: 'card-1',
      name: 'Glass Card',
      html: `<div class="glass-card"><h3>Glass Card</h3><p>Beautiful glassmorphism effect</p></div>`,
      css: `.glass-card {
  padding: 32px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: white;
}

.glass-card h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
}

.glass-card p {
  margin: 0;
  opacity: 0.8;
}`
    },
    {
      id: 'card-2',
      name: 'Hover Card',
      html: `<div class="hover-card"><h3>Hover Me</h3><p>Interactive card with elevation</p></div>`,
      css: `.hover-card {
  padding: 32px;
  background: #1f1f1f;
  border-radius: 12px;
  border: 1px solid #333;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(147, 51, 234, 0.4);
  border-color: #9333ea;
}

.hover-card h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
  color: #9333ea;
}

.hover-card p {
  margin: 0;
  opacity: 0.8;
}`
    },
    {
      id: 'card-3',
      name: 'Profile Card',
      html: `<div class="profile-card">
  <div class="profile-avatar">JS</div>
  <h3 class="profile-name">John Smith</h3>
  <p class="profile-role">Software Developer</p>
  <button class="profile-btn">View Profile</button>
</div>`,
      css: `.profile-card {
  padding: 32px;
  background: #1f1f1f;
  border-radius: 16px;
  border: 1px solid #333;
  text-align: center;
  max-width: 280px;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: white;
}

.profile-name {
  margin: 0 0 8px 0;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
}

.profile-role {
  margin: 0 0 20px 0;
  color: #888;
  font-size: 14px;
}

.profile-btn {
  padding: 10px 24px;
  background: #9333ea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.profile-btn:hover {
  background: #7c3aed;
}`
    },
    {
      id: 'card-4',
      name: 'Feature Card',
      html: `<div class="feature-card">
  <div class="feature-icon">🚀</div>
  <h3 class="feature-title">Fast Performance</h3>
  <p class="feature-desc">Lightning fast load times and smooth animations</p>
</div>`,
      css: `.feature-card {
  padding: 28px;
  background: #1a1a1a;
  border-radius: 14px;
  border: 1px solid #2a2a2a;
  max-width: 260px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #3b82f6;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
}

.feature-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.feature-title {
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

.feature-desc {
  margin: 0;
  font-size: 14px;
  color: #999;
  line-height: 1.6;
}`
    },
    {
      id: 'card-5',
      name: 'Pricing Card',
      html: `<div class="pricing-card">
  <h3 class="pricing-plan">Pro Plan</h3>
  <div class="pricing-price">$29<span>/month</span></div>
  <ul class="pricing-features">
    <li>✓ Unlimited projects</li>
    <li>✓ Priority support</li>
    <li>✓ Advanced analytics</li>
  </ul>
  <button class="pricing-btn">Get Started</button>
</div>`,
      css: `.pricing-card {
  padding: 32px;
  background: #1f1f1f;
  border-radius: 16px;
  border: 2px solid #333;
  max-width: 280px;
  text-align: center;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  border-color: #10b981;
  transform: scale(1.02);
}

.pricing-plan {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #10b981;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pricing-price {
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}

.pricing-price span {
  font-size: 18px;
  color: #888;
  font-weight: 400;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px 0;
  text-align: left;
}

.pricing-features li {
  padding: 10px 0;
  color: #ccc;
  font-size: 15px;
}

.pricing-btn {
  width: 100%;
  padding: 14px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.pricing-btn:hover {
  background: #059669;
}`
    }
  ],

  toggle: [
    {
      id: 'toggle-1',
      name: 'Simple Toggle',
      html: `<label class="toggle-switch">
  <input type="checkbox" />
  <span class="toggle-slider"></span>
</label>`,
      css: `.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  transition: 0.4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.toggle-switch input:checked + .toggle-slider {
  background-color: #9333ea;
}

.toggle-switch input:checked + .toggle-slider:before {
  transform: translateX(26px);
}`
    },
    {
      id: 'toggle-2',
      name: 'Labeled Toggle',
      html: `<label class="labeled-toggle">
  <input type="checkbox" />
  <span class="labeled-toggle-slider">
    <span class="labeled-toggle-on">ON</span>
    <span class="labeled-toggle-off">OFF</span>
  </span>
</label>`,
      css: `.labeled-toggle {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 36px;
}

.labeled-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.labeled-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ef4444;
  transition: 0.4s;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.labeled-toggle-on,
.labeled-toggle-off {
  font-size: 11px;
  font-weight: 700;
  color: white;
  z-index: 1;
  transition: opacity 0.3s;
}

.labeled-toggle-on {
  opacity: 0;
}

.labeled-toggle-off {
  opacity: 1;
}

.labeled-toggle-slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 28px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.labeled-toggle input:checked + .labeled-toggle-slider {
  background-color: #10b981;
}

.labeled-toggle input:checked + .labeled-toggle-slider:before {
  transform: translateX(44px);
}

.labeled-toggle input:checked + .labeled-toggle-slider .labeled-toggle-on {
  opacity: 1;
}

.labeled-toggle input:checked + .labeled-toggle-slider .labeled-toggle-off {
  opacity: 0;
}`
    },
    {
      id: 'toggle-3',
      name: 'Gradient Toggle',
      html: `<label class="gradient-toggle">
  <input type="checkbox" />
  <span class="gradient-toggle-slider"></span>
</label>`,
      css: `.gradient-toggle {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
}

.gradient-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.gradient-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  transition: 0.4s;
  border-radius: 34px;
}

.gradient-toggle-slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: white;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.gradient-toggle input:checked + .gradient-toggle-slider {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-toggle input:checked + .gradient-toggle-slider:before {
  transform: translateX(30px);
}`
    },
    {
      id: 'toggle-4',
      name: 'iOS Style Toggle',
      html: `<label class="ios-toggle">
  <input type="checkbox" />
  <span class="ios-toggle-slider"></span>
</label>`,
      css: `.ios-toggle {
  position: relative;
  display: inline-block;
  width: 51px;
  height: 31px;
}

.ios-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.ios-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 31px;
}

.ios-toggle-slider:before {
  position: absolute;
  content: "";
  height: 27px;
  width: 27px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.ios-toggle input:checked + .ios-toggle-slider {
  background-color: #34c759;
}

.ios-toggle input:checked + .ios-toggle-slider:before {
  transform: translateX(20px);
}`
    }
  ],

  radio: [
    {
      id: 'radio-1',
      name: 'Custom Radio',
      html: `<div class="radio-group">
  <label class="radio-label">
    <input type="radio" name="option" />
    <span class="radio-custom"></span>
    <span>Option 1</span>
  </label>
  <label class="radio-label">
    <input type="radio" name="option" />
    <span class="radio-custom"></span>
    <span>Option 2</span>
  </label>
</div>`,
      css: `.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}

.radio-label input {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #666;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}

.radio-label:hover .radio-custom {
  border-color: #9333ea;
}

.radio-label input:checked ~ .radio-custom {
  border-color: #9333ea;
}

.radio-custom::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #9333ea;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease;
}

.radio-label input:checked ~ .radio-custom::after {
  transform: translate(-50%, -50%) scale(1);
}`
    },
    {
      id: 'radio-2',
      name: 'Card Radio Buttons',
      html: `<div class="card-radio-group">
  <label class="card-radio">
    <input type="radio" name="plan" />
    <div class="card-radio-content">
      <h4>Basic</h4>
      <p>$9/month</p>
    </div>
  </label>
  <label class="card-radio">
    <input type="radio" name="plan" />
    <div class="card-radio-content">
      <h4>Pro</h4>
      <p>$29/month</p>
    </div>
  </label>
</div>`,
      css: `.card-radio-group {
  display: flex;
  gap: 16px;
}

.card-radio {
  cursor: pointer;
}

.card-radio input {
  display: none;
}

.card-radio-content {
  padding: 20px;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 12px;
  text-align: center;
  min-width: 140px;
  transition: all 0.3s ease;
}

.card-radio-content h4 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
}

.card-radio-content p {
  margin: 0;
  font-size: 14px;
  color: #888;
}

.card-radio:hover .card-radio-content {
  border-color: #3b82f6;
  transform: translateY(-2px);
}

.card-radio input:checked ~ .card-radio-content {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.card-radio input:checked ~ .card-radio-content h4 {
  color: #3b82f6;
}`
    },
    {
      id: 'radio-3',
      name: 'Button Radio Group',
      html: `<div class="button-radio-group">
  <label class="button-radio">
    <input type="radio" name="size" />
    <span>Small</span>
  </label>
  <label class="button-radio">
    <input type="radio" name="size" />
    <span>Medium</span>
  </label>
  <label class="button-radio">
    <input type="radio" name="size" />
    <span>Large</span>
  </label>
</div>`,
      css: `.button-radio-group {
  display: inline-flex;
  background: #1a1a1a;
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
}

.button-radio {
  cursor: pointer;
}

.button-radio input {
  display: none;
}

.button-radio span {
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #999;
  background: transparent;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.button-radio:hover span {
  color: #fff;
}

.button-radio input:checked ~ span {
  background: #9333ea;
  color: white;
  box-shadow: 0 2px 8px rgba(147, 51, 234, 0.4);
}`
    }
  ],

  modals: [
    {
      id: 'modal-1',
      name: 'Simple Modal',
      html: `<div class="modal-overlay">
  <div class="modal-container">
    <div class="modal-header">
      <h3>Modal Title</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <p>This is a simple modal dialog. You can put any content here.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-btn modal-btn-cancel">Cancel</button>
      <button class="modal-btn modal-btn-confirm">Confirm</button>
    </div>
  </div>
</div>`,
      css: `.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  background: #1f1f1f;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  border: 1px solid #333;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.modal-close {
  background: none;
  border: none;
  color: #888;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #fff;
}

.modal-body {
  padding: 24px;
  color: #ccc;
  font-size: 15px;
  line-height: 1.6;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #333;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.modal-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-btn-cancel {
  background: #333;
  color: #fff;
}

.modal-btn-cancel:hover {
  background: #444;
}

.modal-btn-confirm {
  background: #9333ea;
  color: #fff;
}

.modal-btn-confirm:hover {
  background: #7c3aed;
}`
    },
    {
      id: 'modal-2',
      name: 'Centered Modal',
      html: `<div class="centered-modal-overlay">
  <div class="centered-modal">
    <div class="centered-modal-icon">✓</div>
    <h2 class="centered-modal-title">Success!</h2>
    <p class="centered-modal-text">Your action was completed successfully.</p>
    <button class="centered-modal-btn">Got it</button>
  </div>
</div>`,
      css: `.centered-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.centered-modal {
  background: #1f1f1f;
  border-radius: 16px;
  padding: 40px;
  max-width: 400px;
  text-align: center;
  border: 1px solid #333;
  animation: modalZoomIn 0.3s ease;
}

@keyframes modalZoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.centered-modal-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
}

.centered-modal-title {
  margin: 0 0 12px 0;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
}

.centered-modal-text {
  margin: 0 0 28px 0;
  font-size: 15px;
  color: #999;
  line-height: 1.6;
}

.centered-modal-btn {
  padding: 12px 32px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.centered-modal-btn:hover {
  background: #059669;
}`
    }
  ],

  dropdowns: [
    {
      id: 'dropdown-1',
      name: 'Simple Dropdown',
      html: `<div class="dropdown">
  <button class="dropdown-btn">Select Option ▼</button>
  <div class="dropdown-content">
    <a href="#" class="dropdown-item">Option 1</a>
    <a href="#" class="dropdown-item">Option 2</a>
    <a href="#" class="dropdown-item">Option 3</a>
  </div>
</div>`,
      css: `.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  padding: 12px 24px;
  background: #1f1f1f;
  color: #fff;
  border: 2px solid #333;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.dropdown-btn:hover {
  border-color: #9333ea;
  background: #2a2a2a;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: #1f1f1f;
  border: 1px solid #333;
  border-radius: 8px;
  min-width: 100%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;
}

.dropdown:hover .dropdown-content {
  display: block;
  animation: dropdownSlide 0.3s ease;
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: #2a2a2a;
  color: #9333ea;
}`
    },
    {
      id: 'dropdown-2',
      name: 'Icon Dropdown',
      html: `<div class="icon-dropdown">
  <button class="icon-dropdown-btn">
    <span>Menu</span>
    <span class="icon-dropdown-arrow">▼</span>
  </button>
  <div class="icon-dropdown-content">
    <a href="#" class="icon-dropdown-item">
      <span class="icon-dropdown-emoji">👤</span>
      <span>Profile</span>
    </a>
    <a href="#" class="icon-dropdown-item">
      <span class="icon-dropdown-emoji">⚙</span>
      <span>Settings</span>
    </a>
    <a href="#" class="icon-dropdown-item">
      <span class="icon-dropdown-emoji">🚪</span>
      <span>Logout</span>
    </a>
  </div>
</div>`,
      css: `.icon-dropdown {
  position: relative;
  display: inline-block;
}

.icon-dropdown-btn {
  padding: 12px 20px;
  background: #1f1f1f;
  color: #fff;
  border: 2px solid #333;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.icon-dropdown-btn:hover {
  border-color: #3b82f6;
  background: #2a2a2a;
}

.icon-dropdown-arrow {
  font-size: 10px;
  transition: transform 0.3s ease;
}

.icon-dropdown:hover .icon-dropdown-arrow {
  transform: rotate(180deg);
}

.icon-dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: #1f1f1f;
  border: 1px solid #333;
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;
}

.icon-dropdown:hover .icon-dropdown-content {
  display: block;
  animation: dropdownSlide 0.3s ease;
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.icon-dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.icon-dropdown-item:hover {
  background: #2a2a2a;
  color: #3b82f6;
}

.icon-dropdown-emoji {
  font-size: 16px;
}`
    }
  ],

  alerts: [
    {
      id: 'alert-1',
      name: 'Success Alert',
      html: `<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  <div class="alert-content">
    <strong>Success!</strong> Your changes have been saved.
  </div>
  <button class="alert-close">×</button>
</div>`,
      css: `.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid;
  animation: alertSlide 0.4s ease;
}

@keyframes alertSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}

.alert-icon {
  font-size: 20px;
  font-weight: bold;
}

.alert-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
}

.alert-content strong {
  font-weight: 600;
  margin-right: 4px;
}

.alert-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  padding: 0;
  line-height: 1;
}

.alert-close:hover {
  opacity: 1;
}`
    },
    {
      id: 'alert-2',
      name: 'Error Alert',
      html: `<div class="alert alert-error">
  <span class="alert-icon">!</span>
  <div class="alert-content">
    <strong>Error!</strong> Something went wrong. Please try again.
  </div>
  <button class="alert-close">×</button>
</div>`,
      css: `.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid;
  animation: alertSlide 0.4s ease;
}

@keyframes alertSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.alert-error {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.alert-icon {
  font-size: 20px;
  font-weight: bold;
}

.alert-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
}

.alert-content strong {
  font-weight: 600;
  margin-right: 4px;
}

.alert-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  padding: 0;
  line-height: 1;
}

.alert-close:hover {
  opacity: 1;
}`
    },
    {
      id: 'alert-3',
      name: 'Warning Alert',
      html: `<div class="alert alert-warning">
  <span class="alert-icon">⚠</span>
  <div class="alert-content">
    <strong>Warning!</strong> Please review your information before proceeding.
  </div>
  <button class="alert-close">×</button>
</div>`,
      css: `.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid;
  animation: alertSlide 0.4s ease;
}

@keyframes alertSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.alert-warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
  color: #f59e0b;
}

.alert-icon {
  font-size: 20px;
  font-weight: bold;
}

.alert-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
}

.alert-content strong {
  font-weight: 600;
  margin-right: 4px;
}

.alert-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  padding: 0;
  line-height: 1;
}

.alert-close:hover {
  opacity: 1;
}`
    },
    {
      id: 'alert-4',
      name: 'Info Alert',
      html: `<div class="alert alert-info">
  <span class="alert-icon">ℹ</span>
  <div class="alert-content">
    <strong>Info:</strong> New features have been added to your dashboard.
  </div>
  <button class="alert-close">×</button>
</div>`,
      css: `.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid;
  animation: alertSlide 0.4s ease;
}

@keyframes alertSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.alert-info {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  color: #3b82f6;
}

.alert-icon {
  font-size: 20px;
  font-weight: bold;
}

.alert-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
}

.alert-content strong {
  font-weight: 600;
  margin-right: 4px;
}

.alert-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  padding: 0;
  line-height: 1;
}

.alert-close:hover {
  opacity: 1;
}`
    }
  ],

  badges: [
    {
      id: 'badge-1',
      name: 'Status Badges',
      html: `<div class="badge-group">
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-danger">Danger</span>
</div>`,
      css: `.badge-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary {
  background: rgba(147, 51, 234, 0.2);
  color: #a855f7;
  border: 1px solid rgba(147, 51, 234, 0.3);
}

.badge-success {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-warning {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.badge-danger {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}`
    },
    {
      id: 'badge-2',
      name: 'Notification Badge',
      html: `<div class="notification-wrapper">
  <button class="notification-btn">🔔</button>
  <span class="notification-badge">5</span>
</div>`,
      css: `.notification-wrapper {
  position: relative;
  display: inline-block;
}

.notification-btn {
  padding: 12px 16px;
  background: #1f1f1f;
  border: 2px solid #333;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s ease;
}

.notification-btn:hover {
  border-color: #9333ea;
  background: #2a2a2a;
}

.notification-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  animation: badgePulse 2s infinite;
}

@keyframes badgePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}`
    },
    {
      id: 'badge-3',
      name: 'Pill Badges',
      html: `<div class="pill-badge-group">
  <span class="pill-badge pill-new">New</span>
  <span class="pill-badge pill-hot">Hot</span>
  <span class="pill-badge pill-sale">Sale</span>
</div>`,
      css: `.pill-badge-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill-badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pill-new {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.pill-hot {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.pill-sale {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}`
    }
  ],

  progress: [
    {
      id: 'progress-1',
      name: 'Progress Bar',
      html: `<div class="progress-container">
  <div class="progress-bar" style="width: 60%;">60%</div>
</div>`,
      css: `.progress-container {
  width: 100%;
  height: 24px;
  background: #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #333;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  transition: width 0.3s ease;
  animation: progressSlide 2s ease;
}

@keyframes progressSlide {
  from {
    width: 0%;
  }
}`
    },
    {
      id: 'progress-2',
      name: 'Circular Progress',
      html: `<div class="circular-progress">
  <svg class="progress-ring" width="120" height="120">
    <circle class="progress-ring-circle" stroke="#333" stroke-width="8" fill="transparent" r="52" cx="60" cy="60"/>
    <circle class="progress-ring-circle progress-ring-fill" stroke="#9333ea" stroke-width="8" fill="transparent" r="52" cx="60" cy="60"/>
  </svg>
  <div class="progress-text">75%</div>
</div>`,
      css: `.circular-progress {
  position: relative;
  display: inline-block;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-circle {
  transition: stroke-dashoffset 0.5s ease;
}

.progress-ring-fill {
  stroke-dasharray: 326.73;
  stroke-dashoffset: 81.68;
  animation: progressFill 2s ease;
}

@keyframes progressFill {
  from {
    stroke-dashoffset: 326.73;
  }
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
  color: #9333ea;
}`
    },
    {
      id: 'progress-3',
      name: 'Striped Progress',
      html: `<div class="striped-progress-container">
  <div class="striped-progress-bar" style="width: 70%;"></div>
</div>`,
      css: `.striped-progress-container {
  width: 100%;
  height: 28px;
  background: #1a1a1a;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #333;
}

.striped-progress-bar {
  height: 100%;
  background: linear-gradient(
    45deg,
    #10b981 25%,
    #059669 25%,
    #059669 50%,
    #10b981 50%,
    #10b981 75%,
    #059669 75%,
    #059669
  );
  background-size: 40px 40px;
  animation: progressStripes 1s linear infinite;
  transition: width 0.3s ease;
}

@keyframes progressStripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
}`
    }
  ]
};

export default components;