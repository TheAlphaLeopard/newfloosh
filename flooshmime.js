export function getMimeType(path) {
  const lowerPath = path.toLowerCase();
  
  // Handle multi-extension patterns for Unity WebGL builds
  if (lowerPath.endsWith('.wasm.code.unityweb')) return 'application/wasm';
  if (lowerPath.endsWith('.wasm.framework.unityweb')) return 'application/wasm';
  if (lowerPath.endsWith('.data.unityweb')) return 'application/octet-stream';
  
  // Handle Love2D data files
  if (lowerPath.endsWith('love.data') || lowerPath.endsWith('data.love')) return 'application/octet-stream';
  
  const ext = path.split('.').pop()?.toLowerCase() || '';
  
  const types = {
    // Text
    'html': 'text/html',
    'htm': 'text/html',
    'css': 'text/css',
    'txt': 'text/plain',
    'md': 'text/markdown',
    'xml': 'application/xml',
    
    // JavaScript
    'js': 'application/javascript',
    'mjs': 'application/javascript',
    'jsx': 'application/javascript',
    'ts': 'application/typescript',
    'tsx': 'application/typescript',
    
    // Data
    'json': 'application/json',
    'jsonld': 'application/ld+json',
    'yaml': 'application/x-yaml',
    'yml': 'application/x-yaml',
    
    // Images
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'ico': 'image/x-icon',
    'bmp': 'image/bmp',
    'tiff': 'image/tiff',
    'tif': 'image/tiff',
    'avif': 'image/avif',
    
    // Audio
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
    'oga': 'audio/ogg',
    'opus': 'audio/opus',
    'flac': 'audio/flac',
    'm4a': 'audio/mp4',
    'aac': 'audio/aac',
    
    // Video
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'ogv': 'video/ogg',
    'mov': 'video/quicktime',
    'avi': 'video/x-msvideo',
    'mkv': 'video/x-matroska',
    
    // Fonts
    'ttf': 'font/ttf',
    'otf': 'font/otf',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'eot': 'application/vnd.ms-fontobject',
    
    // Archives
    'zip': 'application/zip',
    'tar': 'application/x-tar',
    'gz': 'application/gzip',
    'rar': 'application/x-rar-compressed',
    '7z': 'application/x-7z-compressed',
    
    // Documents
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    
    // Game engines
    'pck': 'application/octet-stream',
    'love': 'application/octet-stream',
    'unityweb': 'application/octet-stream',
    
    // Other
    'wasm': 'application/wasm',
    'bin': 'application/octet-stream',
  };
  
  return types[ext] || 'application/octet-stream';
}