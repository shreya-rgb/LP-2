// =============================================
//  ShopBot Expert System - Knowledge Base
//  keys  → keywords to detect the problem
//  reply → diagnosis + step-by-step solution
// =============================================

const rules = [

  {
    keys: ['hello', 'hi', 'hey', 'start', 'hii'],
    reply: "👋 Hello! Welcome to ShopBot!\n\nI can help you with:\n• 📦 Tracking your order\n• 💸 Returns & Refunds\n• 🚚 Shipping info\n• 💳 Payment methods\n• 📞 Contacting support\n\nHow can I help you today?"
  },

  {
    keys: ['track', 'order', 'status', 'where', 'package'],
    reply: "📦 Order Tracking\n\nTo track your order:\n1. Go to your Account > 'My Orders'\n2. Click on the order you want to track\n3. Click 'Track Package'\n\nAlternatively, enter your tracking number on our tracking page. Orders usually take 24 hours to show updates."
  },

  {
    keys: ['refund', 'return', 'exchange', 'back', 'cancel'],
    reply: "💸 Returns & Refunds\n\n✅ You can return most items within 30 days of delivery.\n\nSteps to Return:\n1. Go to 'My Orders' and select 'Return Item'\n2. Print the return label\n3. Drop off the package at any partnered location\n\n💰 Refunds are processed within 3-5 business days after we receive the item."
  },

  {
    keys: ['shipping', 'delivery', 'time', 'cost', 'charge'],
    reply: "🚚 Shipping Information\n\n• Standard Shipping: 3-5 business days (Free over $50)\n• Express Shipping: 1-2 business days ($12.99)\n• International: 7-14 business days\n\nWe ship all orders placed before 2 PM EST on the same day!"
  },

  {
    keys: ['payment', 'card', 'debit', 'credit', 'paypal', 'pay'],
    reply: "💳 Payment Methods\n\nWe accept the following secure payment methods:\n• Visa, MasterCard, AMEX, Discover\n• PayPal\n• Apple Pay & Google Pay\n• Store Credit / Gift Cards\n\nYour payment details are 100% securely encrypted."
  },

  {
    keys: ['human', 'agent', 'support', 'contact', 'call', 'email'],
    reply: "📞 Contact Support\n\nNeed more help? Our human agents are ready!\n\n📧 Email: support@shopbot.com\n📱 Phone: 1-800-SHOPBOT (Available 24/7)\n\nOr type 'live chat' to connect with an agent right now."
  },

  {
    keys: ['thank', 'thanks', 'solved', 'great'],
    reply: "✅ Glad I could help!\n\nFeel free to come back anytime. Happy Shopping! 🛒"
  },

  {
    keys: ['bye', 'exit', 'done', 'goodbye'],
    reply: "👋 Thank you for using ShopBot!\nHave a great day! 🛒"
  }

];