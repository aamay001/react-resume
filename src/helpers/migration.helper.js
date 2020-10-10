import jsonResume from '../jsonresume-data';

export const migrateSchema = (oldSchema) => {
  let newSchema = {};

  newSchema.basics = migrateHeader(oldSchema.header);
  newSchema.work = migrateExperience(oldSchema.experience);
  newSchema.education = migrateEducation(oldSchema.education);
  newSchema.skills = mirgrateTechnicalSkills(oldSchema.technicalSkills);
  newSchema.awards  = migrateCertifications(oldSchema.certification);
  newSchema.publications = migrateProjects(oldSchema.projects);

  newSchema = addMissingSection(newSchema);

  return newSchema;
};

const migrateHeader = oldHeader => {

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