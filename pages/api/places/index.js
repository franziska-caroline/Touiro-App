import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  // GET method
  if (request.method === "GET") {
    const places = await Place.find();
    console.log("places: ", places);
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "method not allowed" });
  }
}
