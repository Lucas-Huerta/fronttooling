export const fetchWrapper = async <T>(
    resource: RequestInfo | URL,
    config: RequestInit
  ): Promise<T> => {
    const { headers, method, body } = config || {};
    const requestOptions = { headers, method, body };
  
    try {
      const response = await fetch(resource, requestOptions);
  
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
  
      return await response.json() as T;
    } catch (error) {
      console.error(error);
      throw error;
    }
};
