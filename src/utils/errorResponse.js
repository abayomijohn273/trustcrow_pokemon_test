export const errorResponse = (error) => {
    const errorMessage = error;
  
    return (
      errorMessage?.response?.data?.message ||
      errorMessage?.message ||
      error ||
      "An error occurred. Please try again later"
    );
  };
  