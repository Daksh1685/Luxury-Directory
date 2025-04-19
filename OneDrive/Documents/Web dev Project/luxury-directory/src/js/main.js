// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const nav = document.querySelector('nav.hidden.md\\:flex');
    
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', function() {
            if (nav.classList.contains('hidden')) {
                nav.classList.remove('hidden');
                nav.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-luxury-dark', 'p-4', 'space-y-4', 'z-50');
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-luxury-dark', 'p-4', 'space-y-4', 'z-50');
            }
        });
    }
    
    // Vendor Submission Form Validation
    const vendorForm = document.getElementById('vendorSubmissionForm');
    
    if (vendorForm) {
        vendorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const businessName = document.getElementById('businessName').value;
            const serviceType = document.getElementById('serviceType').value;
            const contactInfo = document.getElementById('contactInfo').value;
            const description = document.getElementById('description').value;
            
            let isValid = true;
            let errorMessage = '';
            
            if (!businessName) {
                isValid = false;
                errorMessage += 'Business name is required.\n';
            }
            
            if (!serviceType) {
                isValid = false;
                errorMessage += 'Service type is required.\n';
            }
            
            if (!contactInfo) {
                isValid = false;
                errorMessage += 'Contact information is required.\n';
            }
            
            if (!description) {
                isValid = false;
                errorMessage += 'Description is required.\n';
            }
            
            if (isValid) {
                // In a real app, this would submit to a server
                alert('Thank you for your submission! We will review your application and contact you shortly.');
                vendorForm.reset();
            } else {
                alert('Please fix the following errors:\n' + errorMessage);
            }
        });
    }
    
    // Search functionality
    const searchForms = document.querySelectorAll('form[data-search]');
    
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="text"]').value;
            const categorySelect = this.querySelector('select').value;
            
            if (searchInput || categorySelect) {
                // In a real app, this would search the database
                window.location.href = `listings.html?search=${encodeURIComponent(searchInput)}&category=${encodeURIComponent(categorySelect)}`;
            }
        });
    });
    
    // Handle URL parameters for category pages
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('type');
    
    if (categoryParam) {
        const categoryTitle = document.querySelector('.category-title');
        if (categoryTitle) {
            let title = 'All Listings';
            
            if (categoryParam === 'hotels') {
                title = 'Luxury Hotels';
            } else if (categoryParam === 'jets') {
                title = 'Private Jets';
            } else if (categoryParam === 'yachts') {
                title = 'Yachts';
            }
            
            categoryTitle.textContent = title;
        }
    }
}); 