// ==============================
//  ShopBot - Rule Base (rules.js)
//  Each rule has:
//    keys   → keywords to look for in user message
//    reply  → response to show when any keyword matches
// ==============================

const rules = [

  {
    keys: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon', 'greet', 'hii', 'helo'],
    reply: "👋 Hello! Welcome to ShopBot!\n\nI can help you with:\n• Order tracking\n• Returns & refunds\n• Payment issues\n• Shipping info\n• Discounts & offers\n\nWhat do you need help with today?"
  },

  {
    keys: ['track', 'order status', 'where is my order', 'my order', 'order id'],
    reply: "📦 To track your order:\n\n1. Go to our website → My Orders\n2. Enter your Order ID (e.g. ORD-12345)\n3. View real-time delivery status\n\nOrders are usually shipped within 1-2 business days.\nYou'll receive SMS & email updates at each step!"
  },

  {
    keys: ['return', 'refund', 'exchange', 'send back', 'money back', 'replacement'],
    reply: "🔄 Our Return & Refund Policy:\n\n✅ Free returns within 30 days\n✅ Full refund to original payment method\n✅ Exchange also available\n\nHow to return:\n1. Go to My Orders → Select the item\n2. Click 'Return Item'\n3. Print free return label\n4. Drop off at nearest courier point\n\nRefund is processed in 5–7 business days."
  },

  {
    keys: ['payment', 'pay', 'transaction', 'bill', 'invoice', 'charge', 'failed payment', 'upi'],
    reply: "💳 Payment Help:\n\nWe accept:\nVisa, Mastercard, UPI, Net Banking, Wallets, COD\n\n⚠️ If your payment failed:\n• Amount auto-refunds in 3–5 business days\n• Check your bank statement\n• Try a different payment method\n\nTo raise a dispute, share your Transaction ID with us!"
  },

  {
    keys: ['shipping', 'delivery', 'deliver', 'courier', 'dispatch', 'how long', 'days'],
    reply: "🚚 Shipping Information:\n\n📍 Standard Delivery: 5–7 business days (FREE above ₹499)\n⚡ Express Delivery: 2–3 business days (₹99)\n🏃 Same Day: Available in select cities (₹149)\n\nAll deliveries are tracked and insured."
  },

  {
    keys: ['cancel', 'cancellation', 'cancel order'],
    reply: "❌ Order Cancellation:\n\nYou can cancel your order BEFORE it is dispatched:\n→ My Orders → Select Order → Cancel\n\nIf already shipped, please use the Return process after delivery.\n\nCancellation refund takes 3–5 business days."
  },

  {
    keys: ['discount', 'coupon', 'promo', 'offer', 'deal', 'code', 'voucher'],
    reply: "🎉 Current Offers:\n\n• SAVE10 → 10% off on all orders\n• FIRST20 → 20% off on your first order\n• FREE shipping on orders above ₹499\n\nOffers change every week — check our app for the latest deals!"
  },

  {
    keys: ['account', 'login', 'password', 'sign in', 'sign up', 'register', 'forgot'],
    reply: "🔐 Account Help:\n\nForgot password?\n→ Click 'Forgot Password' on login page\n→ OTP will be sent to your registered mobile/email\n\nUpdate account details:\n→ My Account → Edit Profile\n\nFor urgent security issues:\n📞 Call: 1800-XXX-XXXX"
  },

  {
    keys: ['human', 'agent', 'person', 'talk to someone', 'live support', 'representative'],
    reply: "👤 Connecting you to a human agent...\n\n⏳ Estimated wait time: ~3 minutes\n\nOr reach us directly:\n📞 1800-XXX-XXXX (9AM – 9PM)\n📧 support@shopbot.com\n💬 Live chat on our app\n\nWould you like me to log this conversation for the agent?"
  },

  {
    keys: ['size', 'fit', 'measurement', 'size chart', 'fitting'],
    reply: "📏 Size Guide:\n\nEvery product page has a Size Chart — scroll down on the product page.\n\nGeneral tip: If between sizes, go one size UP for comfort.\n\nNot the right size? Exchange it FREE within 30 days!"
  },

  {
    keys: ['warranty', 'guarantee', 'damaged', 'defective', 'broken', 'not working'],
    reply: "🛠️ Warranty & Damaged Items:\n\nAll electronics come with a 1-year manufacturer warranty.\n\nReceived a damaged item?\n1. Take a photo of the item\n2. Go to My Orders → Report Issue\n3. We'll replace or refund within 48 hours!"
  },

  {
    keys: ['thank', 'thanks', 'thank you', 'great', 'awesome', 'helpful', 'perfect', 'nice'],
    reply: "😊 You're most welcome! Happy to help anytime.\n\nIs there anything else I can assist you with today?"
  },

  {
    keys: ['bye', 'goodbye', 'see you', 'exit', 'done', 'no thanks', 'that is all'],
    reply: "👋 Thank you for contacting ShopBot!\n\nHave a wonderful day! Feel free to come back anytime. 🛍️"
  }

];
