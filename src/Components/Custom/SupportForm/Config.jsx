export default {
  config: {
    messages: {
      success: "We received your message! Thanks for inquiring.",
      error:
        "An error occurred during submittal. Please contact us at support@xyz.com"
    },
    buttonText: "Send",
    spinner: true
  },
  fields: [
    {
      label: "Full Name",
      placeholder: "Name",
      required: true
    },
    {
      label: "Area",
      placeholder: "Area",
      required: true
    },
    {
      label: "Phone Number",
      placeholder: "Phone Number",
      required: true
    },
    {
      label: "Symptoms",
      type: "textarea",
      placeholder: "Enter your Symptoms...",
      required: true
    }
  ]
};
