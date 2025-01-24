const isValidContactFormData = (data) => {
  return (
    typeof data === "object" &&
    typeof data.name === "string" &&
    data.name.trim().length >= 2 &&
    typeof data.email === "string" &&
    /^\S+@\S+\.\S+$/.test(data.email) &&
    typeof data.comment === "string" &&
    data.comment.trim().length >= 10
  );
};

module.exports = async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    if (!isValidContactFormData(body)) {
      console.error("Invalid form data:", body);
      return res.status(400).json({ message: "Invalid form data" });
    }

    const { name, email, comment } = body;

    try {
      console.log("Contact Form Submission:", { name, email, comment });
      return res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
