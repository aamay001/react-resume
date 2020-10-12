const Resume = {
  header: {
    name: 'Your Name',
    email: 'email@domain.com',
    phone: '123-456-7890',
    github: 'https://github.com/xxxxxxx',
    linkedin: 'https://linkedin.com/in/xxxxxx',
    address: '123 Main Street',
    website: 'https://website.com',
    city: 'City',
    state: 'CA',
    zip: '00000',
    country: 'USA',
  },
  experience: [
    {
      company: 'Experience 1',
      city: 'City',
      state: 'CA',
      position: 'Position 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
      isVisible: true,
    },
    {
      company: 'Experience 2',
      city: 'City',
      state: 'CA',
      position: 'Position 2',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
      isVisible: true,
    },
    {
      company: 'Experience 3',
      city: 'City',
      state: 'CA',
      position: 'Position 3',
      dateFrom: '',
      dateTo: '',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
      isVisible: true,
    },
  ],
  education: [
    {
      site: 'School 1',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      studyDegree: 'Subject, Degree/Certificate',
      isVisible: true,
    },
    {
      site: 'School 2',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      studyDegree: 'Subject, Degree/Certificate',
      isVisible: true,
    },
  ],
  certification: [
    {
      issuedBy: 'Issuer 1/Cert Name',
      id: '#12345',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      isVisible: true,
    },
    {
      issuedBy: 'Issuer 2/Cert Name',
      id: '#12345',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      isVisible: true,
    },
    {
      issuedBy: 'Issuer 3/Cert Name',
      id: '#12345',
      dateFrom: '',
      dateTo: '',
      isVisible: true,
    },
  ],
  technicalSkills: [
    {
      category: 'Development Languages',
      keywords: [
        { name: 'JavaScript', level: 3 },
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 4 },
      ],
      isVisible: true,
    },
    {
      category: 'Technologies',
      keywords: [
        { name: 'MongoDB', level: 2 },
        { name: 'Express', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Node.js', level: 4 },
        { name: 'Mocha', level: 4 },
        'Passport',
        { name: 'JWT', level: 5 },
        { name: 'Chai', level: 4 },
        { name: 'Redux', level: 2 },
        { name: 'Git', level: 4 },
        { name: 'GitHub', level: 4 },
        'Gatsby',
      ],
      isVisible: true,
    },
    {
			"category": "Custom Category",
			"keywords": [
				{
					"name": "Item 1",
					"level": 3
				},
				{
					"name": "Item 2",
					"level": 4
				},
				{
					"name": "Item 3",
					"level": 4
				}
			],
			"isVisible": true,
			"columnWidthPercent": "33.33%"
		}
  ],
  projects: [
    {
      name: 'Project 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      link: 'http://website.com',
      teamBrief: '1-person project',
      details: ['Detail 1', 'Detail 2', 'http://projectLink.com'],
      isVisible: true,
    },
    {
      name: 'Project 2',
      link: 'http://website.com',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      teamBrief: '1-person project',
      details: ['Detail 1', 'Detail 2', 'https://google.com'],
      isVisible: true,
    },
  ],
};

export default Resume;
