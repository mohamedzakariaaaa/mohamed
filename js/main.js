function orderWhatsApp(productName) {
  const phone = "201097865272"; // Replace with your phone number
  const message = `Hello, I want to order: ${productName}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
