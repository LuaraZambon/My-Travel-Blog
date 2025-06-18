const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  window.scrollToSection = function(event, id) {
    event.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  function shuffleArray(array) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

const attractions = [
  {
    city: 'osaka',
    name: 'Osaka Castle / 大阪城',
    address: '1-1 Osakajo, Chuo Ward, Osaka',
    price: '¥ 1.200',
    opening: '9:00 AM – 5:00 PM (last entry at 4:30 PM), Park is open 24 hours',
    link: 'https://www.osakacastle.net/',
    image: '/attractions/osaka/osakacastle.jpg'
  },
  {
    city: 'osaka',
    name: 'Osaka Tennoji Zoo / 天王寺動物園',
    address: '1‑108 Chausuyama‑cho, Tennoji‑ku, Osaka‑shi, Osaka',
    price: '¥ 500',
    opening: '9:30 AM – 5:00 PM (last entry 4:00 PM)',
    link: 'https://www.tennojizoo.jp/en/',
    image: '/attractions/osaka/zoo.png'
  },
  {
    city: 'osaka',
    name: 'Namba Yasaka Shrine / 難波八阪神社',
    address: '2-9-19 Moto-machi, Naniwa-ku, Osaka-shi',
    price: 'Free',
    opening: '24 hours',
    link: 'https://nambayasaka.jp/',
    image: '/attractions/osaka/namba.jpg'
  },
  {
    city: 'osaka',
    name: 'Minoh Falls / 箕面大滝',
    address: '1-18 Minookoen, Minoh, Osaka',
    price: 'Free',
    opening: '24 hours',
    link: 'https://minohkankou.net/',
    image: '/attractions/osaka/minoh.jpg'
  },
  {
    city: 'osaka',
    name: 'Tsurumi Ryokuchi Memorial Park / 花博記念公園鶴見緑地',
    address: '2‑163 Ryokuchikoen, Tsurumi‑ku, Osaka',
    price: 'Free',
    opening: 'Park: 24 hours / Flower areas: 9:00–17:30 (Apr–Oct) / 9:00–16:30 (Nov–Mar)',
    link: 'https://www.tsurumi-ryokuchi.jp/',
    image: '/attractions/osaka/memorial.jpg'
  },
  {
    city: 'osaka',
    name: 'Universal Studios / ユニバーサル・スタジオ・ジャパン',
    address: '2 Chome-1-33 Sakurajima, Konohana Ward, Osaka',
    price: '¥8,400 (adult), ¥5,400 (child)',
    opening: '9:00 AM – 8:00 PM (may vary)',
    link: 'https://www.usj.co.jp/web/en/us',
    image: '/attractions/osaka/universal.jpg'
  },
  {
    city: 'osaka',
    name: 'Dotombori / 道頓堀',
    address: 'Dotonbori, Chuo-ku, Osaka-shi',
    price: 'Free',
    opening: 'Varies by shop',
    link: 'http://www.dotonbori.or.jp/en/',
    image: '/attractions/osaka/dotonbori.jpg'
  },
  {
    city: 'osaka',
    name: 'Aquarium Kaiyukan / 海遊館',
    address: '1-1-10 Kaigan-dori, Minato-ku, Osaka-shi',
    price: '¥ 2.700',
    opening: 'Typically 10:00 AM – 8:00 PM (entry until 7:00 PM)',
    link: 'https://www.kaiyukan.com/',
    image: '/attractions/osaka/aquarium.jpg'
  },
  {
    city: 'osaka',
    name: 'Museu Housing and Living / 大阪くらしの今昔館',
    address: 'Tenjinbashi 6-4, Osaka City Kita Ward, Osaka',
    price: '¥ 600',
    opening: '10:00 AM – 5:00 PM (Last entry at 4:30 PM)',
    link: 'https://www.osaka-angenet.jp/konjyakukan/',
    image: '/attractions/osaka/housing.jpg'
  },
  {
    city: 'osaka',
    name: 'Abeno Harukas Observation Deck / あべのハルカス',
    address: '1-1-43 Abenosuji, Abeno-ku, Osaka',
    price: '¥ 2.000',
    opening: '9:00 AM – 10:00 PM',
    link: 'https://www.abenoharukas-300.jp/en/',
    image: '/attractions/osaka/abeno.jpg'
  },

  {
    city: 'kyoto',
    name: 'Fushimi Inari Taisha / 伏見稲荷大社',
    address: '68 Fukakusayabunouchi-Cho, Fushimi-Ku, Kyoto City',
    price: 'Free',
    opening: '24 hours',
    link: 'https://inari.jp/en/',
    image: '/attractions/kyoto/inari.jpg'
  },
  {
    city: 'kyoto',
    name: 'Arashiyama Bamboo Grove / 嵐山竹林',
    address: 'Tabuchiyamacho, Ukyo Ward, Kyoto',
    price: 'Free',
    opening: '24 hours',
    link: 'https://arashiyamabambooforest.com/',
    image: '/attractions/kyoto/bamboo.jpg'
  },
  {
    city: 'kyoto',
    name: 'Iwatayama Monkey Park / 嵐山モンキーパーク',
    address: 'Arashiyama Monkey Park 61 Nakao Shimocho, Arashiyama, Nishikyo Ward, Kyoto City',
    price: '¥ 800',
    opening: '9:00 AM – 4:00 PM',
    link: 'http://www.monkeypark.jp/',
    image: '/attractions/kyoto/iwatayama.jpg'
  },

  {
    city: 'nara',
    name: 'Naramachi Museum / 奈良町資料館',
    address: '14-3 Nishishinayacho, Nara City, Nara Prefecture',
    price: 'Free',
    opening: '24 hours',
    link: 'https://naramachi.co.jp/',
    image: '/attractions/nara/naramachi.jpg'
  },
  {
    city: 'nara',
    name: 'Todaiji Temple / 東大寺',
    address: '406-1 Zoshicho, Todai-ji Temple, Nara',
    price: '¥ 800',
    opening: '8:00 AM – 5:00 PM',
    link: 'http://www.todaiji.or.jp/en/',
    image: '/attractions/nara/temple.jpg'
  },
  {
    city: 'nara',
    name: 'Nara Park / 奈良公園',
    address: '469 Zoshicho, Nara City, Nara Prefecture',
    price: 'Free',
    opening: '24 hours',
    link: 'https://www3.pref.nara.jp/park/',
    image: '/attractions/nara/deer.jpg'
  },

  {
    city: 'shiga',
    name: 'Hikone Castle / 彦根城',
    address: '1‑1 Konki‑cho, Hikone City, Shiga Prefecture',
    price: '¥ 800',
    opening: '8:30 AM – 5:00 PM (entry until 4:30 PM)',
    link: 'https://hikonecastle.com/',
    image: '/attractions/shiga/hikonecastle.jpg'
  },

  {
    city: 'nagoya',
    name: 'Nagoya Castle / 名古屋城',
    address: '1‑1 Hommaru, Naka‑ku, Nagoya‑shi, Aichi',
    price: '¥ 500',
    opening: '9:00 AM – 4:30 PM (last admission 4:00 PM)',
    link: 'https://www.nagoyajo.city.nagoya.jp/',
    image: '/attractions/nagoya/nagoyacastle.jpg'
  }
];

 const carousel = document.getElementById('attractionsCarousel');
  const filterButtons = document.getElementById('filterButtons').querySelectorAll('button');

  function displayAttractions(filter) {
    carousel.innerHTML = '';

    let filtered = filter === 'all' ? shuffleArray(attractions) : attractions.filter(a => a.city === filter);

    filtered.forEach(attraction => {
      const card = document.createElement('div');
      card.className = 'attraction-card';
      card.innerHTML = `
        ${attraction.image ? `<img src="${attraction.image}" alt="${attraction.name}" style="width: 300px; margin: 10px 50px; border-radius: 6px;" />` : ''}
        <h2>${attraction.name}</h2>
        ${attraction.address ? `<p><strong>Address:</strong> ${attraction.address}</p>` : ''}
        ${attraction.price ? `<p><strong>Price:</strong> ${attraction.price}</p>` : ''}
        ${attraction.opening ? `<p><strong>Opening:</strong> ${attraction.opening}</p>` : ''}
        <small><b>City:</b> ${attraction.city.charAt(0).toUpperCase() + attraction.city.slice(1)}</small><br>
        ${attraction.link ? `<a href="${attraction.link}" target="_blank" rel="noopener noreferrer" class="visit-button">Visit Website</a>` : ''}
      `;
      carousel.appendChild(card);
    });
  }

  displayAttractions('all');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      displayAttractions(button.dataset.location);
    });
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    if(e.target.tagName.toLowerCase() === 'a') return;

    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
  });

  carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('touchend', () => {
    isDown = false;
  });

  carousel.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

});
