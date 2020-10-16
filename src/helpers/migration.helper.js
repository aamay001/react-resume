import jsonResume from "../jsonresume-data";

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

const migrateHeader = (oldHeader) => {};

const migrateExperience = (oldExperience) => {
  let newExperience = oldExperience.map((experience) => {
    let changedExperience = {};
    changedExperience.company = experience.company ? experience.company : "";
    changedExperience.position = experience.position ? experience.position : "";
    changedExperience.website = experience.website ? experience.website : "";
    changedExperience.startDate = experience.dateFrom
      ? experience.dateFrom
      : "";
    changedExperience.endDate = experience.dateTo ? experience.dateTo : "";
    changedExperience.summary = experience.primaryWorkBrief
      ? `${experience.primaryWorkBrief} ${
          experience.city ? experience.city : ""
        } ${experience.state ? experience.state : ""}`
      : "";
    changedExperience.highlights = [
      experience.impact1,
      experience.impact2,
      experience.impact3,
      experience.impact4,
    ].filter((highlight) => highlight);
    changedExperience.isVisible = experience.isVisible;

    return changedExperience;
  });

  return newExperience;
};

const migrateEducation = (oldEducation) => {};

const migrateCertifications = (oldCertifications) => {};

const mirgrateTechnicalSkills = (oldTechSkills) => {};

const migrateProjects = (oldProjects) => {};

const addMissingSection = (newSchema) => ({
  ...jsonResume,
  ...newSchema,
});

export default migrateSchema;