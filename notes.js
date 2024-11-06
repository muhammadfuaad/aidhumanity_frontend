useEffect(() => {
  axiosInstance
    .get("/appeals/campaigns")
    .then((response) => {
      console.log("response:", response);
      setCampaigns(response.data.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
}, []);