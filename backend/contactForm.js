/** @format */

// Handles contact form submission using SupabaseAPI class
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      full_name: this.full_name.value,
      email: this.email.value,
      message: this.message.value,
    };

    const api = new SupabaseAPI(); // Instantiate API manager class

    try {
      await api.submitContact(formData); // Submit via class method
      // Safe DOM update for success message
      this.classList.add("d-none");
      document.getElementById("successMsg").classList.remove("d-none");
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert("Something went wrong. Please try again.");
    }
  });
