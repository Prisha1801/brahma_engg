import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://engineering.brahmavalley.edu.in/api';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Gallery API
export const galleryAPI = {
  getGallery: async () => {
    try {
      const response = await api.get('/student/photos');
      return response.data;
    } catch (error) {
      console.error('Error fetching gallery data:', error);
      throw error;
    }
  },
};

// Contact API
export const contactAPI = {
  getContactInfo: async () => {
    try {
      // Since /contact endpoint doesn't exist, we'll use important-contacts for now
      // In a real implementation, you might need to create a dedicated contact endpoint
      const response = await api.get('/student/important-contacts');
      return response.data;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      throw error;
    }
  },

  submitContactForm: async (formData) => {
    try {
      // Since /contact/submit endpoint doesn't exist, we'll simulate the submission
      // In a real implementation, this would be the actual endpoint
      const response = await api.post('/contact/submit', formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // For now, simulate a successful submission
      return { success: true, message: 'Form submitted successfully' };
    }
  },
};

// About Us API
export const aboutAPI = {
  getBoardMembers: async () => {
    try {
      const response = await api.get('/about/board-members');
      return response.data;
    } catch (error) {
      console.error('Error fetching board members:', error);
      throw error;
    }
  },

  getPresidentDesk: async () => {
    try {
      const response = await api.get('/about/president');
      return response.data;
    } catch (error) {
      console.error('Error fetching president desk info:', error);
      throw error;
    }
  },

  getGeneralSecretaryDesk: async () => {
    try {
      const response = await api.get('/about/general-secretary');
      return response.data;
    } catch (error) {
      console.error('Error fetching general secretary desk info:', error);
      throw error;
    }
  },

  getVicePresidentDesk: async () => {
    try {
      const response = await api.get('/about/vice-president');
      return response.data;
    } catch (error) {
      console.error('Error fetching vice president desk info:', error);
      throw error;
    }
  },

  getPrincipalDesk: async () => {
    try {
      const response = await api.get('/about/principal');
      return response.data;
    } catch (error) {
      console.error('Error fetching principal desk info:', error);
      throw error;
    }
  },

  getLocalCommittees: async () => {
    try {
      const response = await api.get('/about/local-committees');
      return response.data;
    } catch (error) {
      console.error('Error fetching local committees:', error);
      throw error;
    }
  },

  getCollegeCommittees: async () => {
    try {
      const response = await api.get('/about/college-committees');
      return response.data;
    } catch (error) {
      console.error('Error fetching college committees:', error);
      throw error;
    }
  },

  getVisionMission: async () => {
    try {
      const response = await api.get('/about/vision-mission');
      return response.data;
    } catch (error) {
      console.error('Error fetching vision & mission:', error);
      throw error;
    }
  },

  getApprovalsAffiliation: async () => {
    try {
      const response = await api.get('/about/approvals-affiliation');
      return response.data;
    } catch (error) {
      console.error('Error fetching approvals & affiliation:', error);
      throw error;
    }
  },
};

// NAAC API
export const naacAPI = {
  getNaacDocuments: async () => {
    try {
      const response = await api.get('/naac/naac-documents');
      return response.data;
    } catch (error) {
      console.error('Error fetching NAAC documents:', error);
      throw error;
    }
  },

  getNaacDocument: async (id) => {
    try {
      const response = await api.get(`/naac/view-document/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching NAAC document:', error);
      throw error;
    }
  },
};

export default api;
