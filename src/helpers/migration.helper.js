import jsonResume from '../jsonresume-data';

export const migrateSchema = (oldSchema) => {
  let newSchema = {};

  newSchema.basics = migrateHeader(oldSchema.header);
  newSchema.work = migrateExperience(oldSchema.experience);
  newSchema.education = migrateEducation(oldSchema.education);
  newSchema.skills = mirgrateTechnicalSkills(oldSchema.technicalSkills);
  newSchema.awards = migrateCertifications(oldSchema.certification);
  newSchema.publications = migrateProjects(oldSchema.projects);

  newSchema = addMissingSection(newSchema);

  return newSchema;
};

const migrateHeader = oldHeader => {
  let basics = { ...jsonResume.basics, ...oldHeader }
  basics.location.address = oldHeader.address;
  basics.location.postalCode = oldHeader.state + ' ' + oldHeader.zip;
  basics.location.city = oldHeader.city;
  basics.location.countryCode = oldHeader.country;
  basics.profiles = [...basics.profiles, { network: 'Github', username: oldHeader.github.split('/')[3], url: oldHeader.github }, { network: 'LinkedIn', username: oldHeader.linkedin.split('/')[4], url: oldHeader.linkedin }]
  delete basics.city;
  delete basics.country;
  delete basics.zip;
  delete basics.address;
  delete basics.state;
  delete basics.github;
  delete basics.linkedin;
  return basics;
};

const migrateExperience = oldExperience => {

};

const migrateEducation = oldEducation => {

};

const migrateCertifications = oldCertifications => {

};

const mirgrateTechnicalSkills = oldTechSkills => {

};

const migrateProjects = oldProjects => {

};

const addMissingSection = newSchema => ({
  ...jsonResume,
  ...newSchema,
});

export default migrateSchema;