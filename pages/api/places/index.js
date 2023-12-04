import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  // GET method
  if (request.method === "GET") {
    const places = await Place.find();
    console.log("places: ", places);
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Place.create(placeData);

      response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
