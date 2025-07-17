interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
}

const config: CloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
};

export const cloudinary = {
  uploadUrl: `https://api.cloudinary.com/v1_1/${config.cloudName}/upload`,

  async uploadMedia(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', config.uploadPreset);

    const response = await fetch(this.uploadUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload media to Cloudinary');
    }

    const data = await response.json();
    return data.secure_url;
  },

  async uploadMultipleMedia(files: File[]): Promise<string[]> {
    const uploadPromises = files.map(file => this.uploadMedia(file));
    return Promise.all(uploadPromises);
  },

  getOptimizedUrl(url: string, options: { width?: number; height?: number; quality?: number } = {}): string {
    const { width = 800, height = 800, quality = 'auto' } = options;
    const urlParts = url.split('/');
    const uploadIndex = urlParts.indexOf('upload');
    
    if (uploadIndex !== -1) {
      const transformations = `w_${width},h_${height},c_limit,q_${quality}`;
      urlParts.splice(uploadIndex + 1, 0, transformations);
    }
    
    return urlParts.join('/');
  },
};