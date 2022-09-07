const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.status(200).send("here we go!");
  });
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });