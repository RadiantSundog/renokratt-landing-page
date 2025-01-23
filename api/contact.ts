import { NextApiRequest, NextApiResponse } from "next";

// Define a type for the request body
type ContactFormData = {
  name: string;
  email: string;
  comment: string;
};

// Utility function to validate the request body
const isValidContactFormData = (data: any): data is ContactFormData => {
  return (
    typeof data.name === "string" &&
    data.name.trim().length >= 2 &&
    typeof data.email === "string" &&
    /^\S+@\S+\.\S+$/.test(data.email) &&
    typeof data.comment === "string" &&
    data.comment.trim().length >= 10
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body;

    // Validate the request body
    if (!isValidContactFormData(body)) {
      return res.status(400).json({ message: "Invalid form data" });
    }

    const { name, email, comment } = body;

    try {
      // Log the data (replace this with email or database logic)
      console.log("Contact Form Submission:", { name, email, comment });

      // Send a success response
      return res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
