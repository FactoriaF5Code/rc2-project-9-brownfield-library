export const developmentModeOn = process.env.NODE_ENV === "development";
export const getApiHost = () => developmentModeOn ? "http://localhost:9002" : "";