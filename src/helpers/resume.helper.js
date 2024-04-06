import { toast } from 'react-toastify';
import { debounce } from './app.helper';
import ls from './localstorage.helper';
import defaultResume from '../resume-data';
import { SAVE_RESUME_ERROR_TOAST_ID, SAVE_RESUME_SUCCESS_TOAST_ID } from '../config/constants';

export const isValidJSON = (data, parsed, autoFix) => {
  let cleanedResume;
  try {
    let newResume;
    if (!parsed) {
      newResume = JSON.parse(data);
    } else {
      newResume = data;
    }

    if (!newResume) {
      return false;
    }

    if (('header' in newResume) && typeof newResume.header !== 'object') {
      return false;
    }

    // Add address visibility props if they are missiing
    if (newResume.header.addressVisibility === undefined) {
      newResume = {
        ...newResume,
        header: {
          ...newResume.header,
          addressVisibility: {
            address: true,
            city: true,
            state: true,
            zip: true,
            country: true,
          },
        },
      };
    }

    if (!('professionalSummary' in newResume) && typeof newResume.professionalSummary !== 'object') {
      return false;
    }

    let missingProp = false;
    [
      'name',
      'email',
      'phone',
      'github',
      'linkedin',
      'address',
      'city',
      'state',
      'zip',
      'country',
    ].forEach((key) => {
      if (!(key in newResume.header)) {
        missingProp = true;
      }
    });

    if (missingProp) {
      throw new Error('');
    }

    const missingRootProps = [];

    if (!('experience' in newResume) && !Array.isArray(newResume.experience)) {
      if (!autoFix) {
        throw new Error('');
      } else {
        missingRootProps.push('experience');
      }
    }
    if (!('education' in newResume) && !Array.isArray(newResume.education)) {
      if (!autoFix) {
        throw new Error('');
      } else {
        missingRootProps.push('education');
      }
    }
    if (
      !('technicalSkills' in newResume) && !Array.isArray(newResume.technicalSkills)
    ) {
      if (!autoFix) {
        throw new Error('');
      } else {
        missingRootProps.push('technicalSkills');
      }
    }
    if (!('projects' in newResume) && !Array.isArray(newResume.projects)) {
      if (!autoFix) {
        throw new Error('');
      } else {
        missingRootProps.push('projects');
      }
    }
    if (
      !('certification' in newResume) && !Array.isArray(newResume.certification)
    ) {
      if (!autoFix) {
        throw new Error('');
      } else {
        missingRootProps.push('certification');
      }
    }
    if (!('professionalSummary' in newResume)) {
      if (!autoFix) {
        throw new Error('');
      } else {
        missingRootProps.push('professionalSummary');
      }
    }
    cleanedResume = {
      header: missingRootProps.includes('header')
        ? defaultResume.header
        : newResume.header,
      experience: missingRootProps.includes('experience')
        ? defaultResume.experience
        : newResume.experience,
      education: missingRootProps.includes('education')
        ? defaultResume.education
        : newResume.education,
      technicalSkills: missingRootProps.includes('technicalSkills')
        ? defaultResume.technicalSkills
        : newResume.technicalSkills,
      projects: missingRootProps.includes('projects')
        ? defaultResume.projects
        : newResume.projects,
      certification: missingRootProps.includes('certification')
        ? defaultResume.certification
        : newResume.certification,
      professionalSummary: missingRootProps.includes('professionalSummary')
        ? defaultResume.professionalSummary
        : newResume.professionalSummary,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return false;
  }
  return cleanedResume;
};

export const PROFESSIONAL_SUMMARY = 0;
export const TECH_SKILLS = 1;
export const EXPERIENCE = 2;
export const PROJECTS = 3;
export const EDUCATION = 4;
export const CERTIFICATION = 5;

export const defaultResumeOrder = [
  PROFESSIONAL_SUMMARY,
  TECH_SKILLS,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  CERTIFICATION,
];

export const STORED_RESUME_KEY = 'rr-ls-resume-key';

export const saveResume = (resume) => {
  if (ls.setItem(STORED_RESUME_KEY, resume)) {
    debounce(
      () => toast(' 💾 saved to localStorage...', { toastId: SAVE_RESUME_SUCCESS_TOAST_ID }),
      500,
      false,
      SAVE_RESUME_SUCCESS_TOAST_ID,
    );
  } else {
    debounce(
      () => toast(' ⚠️ error saving to localStorage...', { toastId: SAVE_RESUME_ERROR_TOAST_ID }),
      500,
      false,
      SAVE_RESUME_ERROR_TOAST_ID,
    );
  }
};

export const loadResume = () => {
  const resume = ls.getItem(STORED_RESUME_KEY);
  const cleaned = isValidJSON(resume, true, true);
  return cleaned;
};
