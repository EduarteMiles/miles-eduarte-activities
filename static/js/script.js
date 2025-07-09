document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('is-invalid');
                    isValid = false;
                } else {
                    field.classList.remove('is-invalid');
                }
            });

            // Password confirmation check
            const password = form.querySelector('#new_password');
            const confirmPassword = form.querySelector('#confirm_password');
            if (password && confirmPassword && password.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
                
                // Scroll to the first invalid field
                const firstInvalid = form.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstInvalid.focus();
                }
            }
        });
    });

    // Real-time validation for password confirmation
    const confirmPassword = document.getElementById('confirm_password');
    if (confirmPassword) {
        const password = document.getElementById('new_password');
        confirmPassword.addEventListener('input', function() {
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
            } else {
                confirmPassword.classList.remove('is-invalid');
            }
        });
    }

    // Set today's date as default for enrollment date in add student form
    const enrollmentDate = document.getElementById('enrollment_date');
    if (enrollmentDate) {
        const today = new Date().toISOString().split('T')[0];
        enrollmentDate.value = today;
    }
});