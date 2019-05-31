import { toast } from 'react-toastify';
import { debounce } from './app.helper';
import ls from './localstorage.helper';

export const isValidJSON = (data) => {
  let cleanedResume;
  try {
    const newResume = JSON.parse(data);
    const keys = Object.keys(newResume);
    if (!('header' in keys) && typeof newResume.header !== 'object') {
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

    if (!('experience' in keys) && !Array.isArray(newResume.experience)) {
      throw new Error('');
    }
    if (!('education' in keys) && !Array.isArray(newResume.education)) {
      throw new Error('');
    }
    if (
      !('technicalSkills' in keys) && !Array.isArray(newResume.technicalSkills)
    ) {
      throw new Error('');
    }
    if (!('projects' in keys) && !Array.isArray(newResume.projects)) {
      throw new Error('');
    }
    if (
      !('certification' in keys) && !Array.isArray(newResume.certification)
    ) {
      throw new Error('');
    }
    cleanedResume = {
      header: newResume.header,
      experience: newResume.experience,
      education: newResume.education,
      technicalSkills: newResume.technicalSkills,
      projects: newResume.projects,
      certification: newResume.certification,
    };
  } catch (error) {
    return false;
  }
  return cleanedResume;
};

export const EDUCATION = 0;
export const TECH_SKILLS = 1;
export const PROJECTS = 2;
export const EXPERIENCE = 3;
export const CERTIFICATION = 4;

export const defaultResumeOrder = [EDUCATION, TECH_SKILLS, PROJECTS, EXPERIENCE, CERTIFICATION];

export const STORED_RESUME_KEY = 'rr-ls-resume-key';

export const saveResume = (resume) => {
  if (ls.setItem(STORED_RESUME_KEY, resume)) {
    debounce(() => toast(' 💾 saved to localStorage...', { toastId: 'rrtresumesaved' }),
      500,
      false,
      'rrtresumesaved');
  } else {
    debounce(() => toast(' ⚠️ error saving to localStorage...', { toastId: 'rrterrorsaveresume' }),
      500,
      false,
      'rrterrorsaveresume');
  }
};

export const loadResume = () => ls.getItem(STORED_RESUME_KEY);
