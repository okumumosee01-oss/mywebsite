// Hotel cards are sample listings. Replace names, prices and links with verified details before publishing.
const hotelListings = [
  { name: 'The Nairobi Serena Hotel', area: 'Nairobi, Kenya', 
    price: 'KES 18,000+', rating: 'Premium stay', tag: 'City comfort', 
    image: 'images/nairobi.jpg', 
    description: 'An elegant city stay for business trips, dining and relaxing between plans.' },
  { 
    name: 'Diani Beach Stay', area: 'Diani, Kenya', 
    price: 'Check current rates', rating: 'Coastal escape', tag: 'Beach break', 
    image: 'images/diani.jpg', 
    description: 'A tropical-style getaway idea for visitors looking for sun, sand and a slower pace.' },
  { 
    name: 'Lake Naivasha Retreat', area: 'Naivasha, Kenya', 
    price: 'Check current rates', rating: 'Nature getaway', tag: 'Weekend trip', 
    image: 'images/naivasha.jpg', 
    description: 'A peaceful getaway idea for scenic views, nature and a refreshing weekend.' },
  { 
    name: 'Accra Beach Hotel', area: 'Accra, Ghana', 
    price: 'GHS. 1,400', rating: 'Premium stay', tag: 'City comfort', 
    image: 'images/accra.jpg', 
    description: 'An elegant city stay for business trips, dining and relaxing between plans.' },
  { 
    name: 'Fairway Hotel & Spa', area: 'Kampala, Uganda', 
    price: 'Check current UGX rates', rating: 'Hilly terrains', tag: 'Seventh Hill', 
    image: 'images/kampala.jpg', 
    description: 'A mid-range accommodation found in Kampala across the road from Uganda Golf course.' },
  { 
    name: 'Luxury Link Hotel', area: 'Marijani, Tanzania', 
    price: 'Check current rates', rating: 'Serene view', tag: 'Refresh trip', 
    image: 'images/tanzania.jpg', 
    description: 'World-renowned luxury hotels and safari lodges across the Serengeti, Ngorongoro Crater and more.' }
];

const hotelGrid = document.getElementById('hotelGrid');

if (hotelGrid) {
  hotelGrid.innerHTML = hotelListings.map(hotel => `
    <article class="hotel-card">
      <div class="hotel-image-wrap">
        <img class="hotel-image" src="${hotel.image}" alt="Hotel inspiration for ${hotel.area}" loading="lazy">
        <span class="hotel-tag">${hotel.tag}</span>
      </div>
      <div class="hotel-content">
        <p class="hotel-area">⌖ ${hotel.area}</p>
        <h3>${hotel.name}</h3>
        <p class="hotel-description">${hotel.description}</p>
        <div class="hotel-meta"><span>✦ ${hotel.rating}</span><button class="reviewbutton"><a href="${base_link}">Review &#8599;</a></button></div>
      </div>
    </article>`).join('');
}
