useEffect(() => {
    axiosInstance
      .get(`/appeals/${appealId}`).then((response) => {
        console.log("response:", response);
        setAppeal(response.data.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);