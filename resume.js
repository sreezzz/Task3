// Resume in JSON Format

const resume = {
  basics: {
    name: "Sreedhar vangala",
    email: "sridharvangala741@gmail.com",
    phone: "+91 9592036983",
    degree: "B.tech(Mechanical)",
    summary:
      "To work as a Full stack developer in good organization that allows me the scope to update my knowledge to the latest trends and be part of a diverse and dynamic team that adds to both my personal and professional growth. Previously worked as Mechanical engineer and want to explore myself in IT industry. Good in creative design.",
    location: {
      address: "H.No:16-51b, balaji nagar",
      postalCode: "518401",
      city: "Nandikotkur",
      countryCode: "India",
      region: "Andhra Pradesh",
    },
  },
  work: [
    {
      company: "Shetron Limited",
      position: "Quality Engineer",
      website: "www.shetrongroup.in",
      startDate: "jun-2019",
      endDate: "jun-2021",
    },
  ],
  education: [
    {
      institution: "Lovely Professional University",
      area: "Mechanical",
      studyType: "Regular",
      startDate: "Aug-2014",
      endDate: "May-2018",
      gpa: "7.65 CGPA",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Good",
    },
    {
      language: "Telugu",
      fluency: "Good",
    },
    {
      language: "Hindi",
      fluency: "mdium",
    },
  ],
};

console.log(resume);