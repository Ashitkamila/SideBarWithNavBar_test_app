export const configuration = {
    // API base url test server
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "http://13.70.26.58:6066/api/v1",

    //production api
    //  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "https://api-benchmarker.waycool.in/api/v1",

    fileLimit: 10240,
    // All the formats for file and images that can be uploaded 
    allowedFileFormats: '.txt,.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.csv',
    version: '1.0.0',
};
// Here replace  GoogleMapsAPI value with original one
export const GoogleMapsAPI = 'AIzaSyASRO1ULLpXIdhh75V_ye6eju4xpo5JB_Y';
