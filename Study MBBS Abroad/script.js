// Data
const features = [
    { icon: 'check-circle', text: 'WHO Recognized' },
    { icon: 'clock', text: 'Flexible Duration' },
    { icon: 'dollar-sign', text: 'Scholarship Available' },
    { icon: 'award', text: 'Licensed Practice' }
];

const benefits = [
    {
        icon: 'graduation-cap',
        title: 'World-Class Education',
        description: 'Internationally recognized medical degrees with state-of-the-art facilities and experienced faculty',
        highlight: '100% Recognition'
    },
    {
        icon: 'globe',
        title: 'Global Exposure',
        description: 'Experience diverse healthcare systems and build an international network in the medical field',
        highlight: '7+ Countries'
    },
    {
        icon: 'clipboard-check',
        title: 'Affordable Fees',
        description: 'Cost-effective medical education without compromising on quality and standards',
        highlight: 'Save 70%'
    }
];

const countries = [
    { name: 'Russia', flag: '🇷🇺', fee: '$4,000/year', duration: '6 years', ranking: '#1 Choice', features: ['World-Class Facilities', 'English Medium'] },
    { name: 'Uzbekistan', flag: '🇺🇿', fee: '$3,500/year', duration: '5 years', ranking: '#2 Choice', features: ['Affordable Living', 'Modern Campus'] },
    { name: 'Kazakhstan', flag: '🇰🇿', fee: '$3,800/year', duration: '5 years', ranking: 'Top Rated', features: ['Research Focus', 'Clinical Training'] },
    { name: 'Philippines', flag: '🇵🇭', fee: '$5,000/year', duration: '5.5 years', ranking: 'Popular', features: ['US Curriculum', 'Beach Location'] },
    { name: 'Georgia', flag: '🇬🇪', fee: '$4,500/year', duration: '6 years', ranking: 'Best Value', features: ['European Standard', 'Rich Culture'] },
    { name: 'Kyrgyzstan', flag: '🇰🇬', fee: '$3,200/year', duration: '5 years', ranking: 'Rising Star', features: ['Low Cost', 'Quality Education'] },
    { name: 'Egypt', flag: '🇪🇬', fee: '$4,200/year', duration: '6 years', ranking: 'Historic', features: ['Ancient Heritage', 'Modern Medicine'] }
];

// Helper function to create SVG icons
function createIcon(name) {
    const icons = {
        'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        'clock': '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        'dollar-sign': '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
        'award': '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
        'graduation-cap': '<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
        'globe': '<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        'clipboard-check': '<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path><path d="M9 14l2 2 4-4"></path></svg>'
    };
    return icons[name] || '';
}

// Render features
document.getElementById('features-container').innerHTML = features.map(feature => `
    <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <span class="text-blue-300 mr-2">${createIcon(feature.icon)}</span>
        <span class="text-sm font-medium">${feature.text}</span>
    </div>
`).join('');

// Render benefits
document.getElementById('benefits-container').innerHTML = benefits.map(benefit => `
    <div class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div class="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
            ${benefit.highlight}
        </div>
        <div class="text-blue-600 group-hover:text-indigo-600 transition-colors duration-300 flex justify-center mb-6">
            ${createIcon(benefit.icon)}
        </div>
        <h3 class="text-2xl font-bold mb-4 text-gray-800">${benefit.title}</h3>
        <p class="text-gray-600 group-hover:text-gray-700">${benefit.description}</p>
    </div>
`).join('');

// Render countries
document.getElementById('countries-container').innerHTML = countries.map(country => `
    <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div class="relative">
            <div class="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                ${country.ranking}
            </div>
            <div class="p-6">
                <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    ${country.flag}
                </div>
                <h3 class="text-2xl font-bold mb-2 text-gray-800">${country.name}</h3>
                <div class="space-y-2">
                    <p class="flex items-center text-gray-600">
                        ${createIcon('dollar-sign')}
                        <span class="ml-2">${country.fee}</span>
                    </p>
                    <p class="flex items-center text-gray-600">
                        ${createIcon('clock')}
                        <span class="ml-2">${country.duration}</span>
                    </p>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100">
                    ${country.features.map(feature => `
                        <p class="flex items-center text-sm text-gray-600 mb-1">
                            ${createIcon('check-circle')}
                            <span class="ml-2">${feature}</span>
                        </p>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
`).join('');

// Form handling
const form = document.getElementById('application-form');
form.innerHTML = `
    <div class="space-y-6">
        <div class="form-group">
            <label class="block text-gray-700 font-medium mb-2" for="name">Full Name</label>
            <input type="text" id="name" name="name" required
                class="form-input"
                placeholder="John Doe">
            <div class="error-message" id="name-error"></div>
        </div>

        <div class="form-group">
            <label class="block text-gray-700 font-medium mb-2" for="email">Email Address</label>
            <input type="email" id="email" name="email" required
                class="form-input"
                placeholder="john@example.com">
            <div class="error-message" id="email-error"></div>
        </div>

        <div class="form-group">
            <label class="block text-gray-700 font-medium mb-2" for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required
                class="form-input"
                placeholder="+1234567890">
            <div class="error-message" id="phone-error"></div>
        </div>

        <div class="form-group">
            <label class="block text-gray-700 font-medium mb-2" for="country">Preferred Country</label>
            <select id="country" name="country" required
                class="form-input">
                <option value="">Select a country</option>
                ${countries.map(country => `
                    <option value="${country.name}">${country.name}</option>
                `).join('')}
            </select>
            <div class="error-message" id="country-error"></div>
        </div>

        <button type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <span>Submit Application</span>
        </button>
    </div>
`;

// Form validation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    let isValid = true;
    
    // Name validation
    if (data.name.length < 2) {
        document.getElementById('name-error').textContent = 'Name must be at least 2 characters long';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }
    
    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
        isValid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }
    
    // Country validation
    if (!data.country) {
        document.getElementById('country-error').textContent = 'Please select a country';
        isValid = false;
    } else {
        document.getElementById('country-error').textContent = '';
    }
    
    if (isValid) {
        // Show success message
        form.innerHTML = `
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-8 py-6 rounded-2xl relative text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto mb-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p class="text-2xl font-bold mb-2">Thank you for your application!</p>
                <p class="text-green-600">We will contact you shortly to discuss your medical education journey.</p>
            </div>
        `;
    }
});