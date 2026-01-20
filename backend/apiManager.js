/** @format */

// API Manager class for Supabase operations
class SupabaseAPI {
  constructor() {
    this.client = window.supabaseClient; 
  }

  /**
   * Fetches all programs from Supabase
   * @returns {Promise<Array>} Array of program objects
   */
  async getPrograms() {
    const { data, error } = await this.client.from('programs').select('*');
    if (error) throw error;
    return data;
  }

  /**
   * Submits contact form data to Supabase
   * @param {Object} formData - Contact form data (name, email, message)
   */
  async submitContact(formData) {
    const { error } = await this.client.from('email_form').insert([formData]);
    if (error) throw error;
  }
}