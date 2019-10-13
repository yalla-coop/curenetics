export const matchData = [
  {
    id: 1,
    eligibilityStatus: 'potential',
    trialInfo: {
      nct: 'NCT0355514',
      title:
        'A Trial Comparing Cardiovascular Safety of Degarelix Versus Leuprolide in Patients With Advanced Prostate Cancer and Cardiovascular Disease',
      startingDate: 'Sept 27, 2018',
      endingDate: 'Sept 27, 2018',
      phase: 3,
      overallStatus: 'recruiting',
      enrolled: 6000000,
      interventions: ['Degarelix', 'Leuprolide'],
      sponsors: ['Ferring Pharmaceuticals', 'Memorial Sloan Kettering'],
      allocation:
        'Randomized|Intervention Model: Paralle. Assignment. Masking: Single (Outcomes Assessor). Primary Purpose: Treatment',
      detailsLink: 'https://ClinicalTrials.gov/show/NCT0355514',
      locations: [
        {
          name: 'St Bartholomew’s Hospital',
          address: 'London EC1A 7JQ',
          contact: '',
          recruitingStatus: 'recruiting',
        },
        {
          name: 'Clinic A',
          address: '345 London Road N4 4R4',
          contact: '',
          recruitingStatus: 'recruiting',
        },
      ],
    },
    matchingInfo: {
      trialCriteria: {
        age: '18-85',
        conditons: [
          'Prostate Cancer Metastatic',
          'Castration-resistant Prostate Cancer',
        ],
        gender: 'male',
        ecog: '0-2',
        gleason: 2,
        inProstate: true,
      },
      patientCriteria: {
        age: '72',
        conditons: ['Prostate Cancer'],
        gender: 'male',
        ecog: '0-2',
        gleason: 2,
        inProstate: true,
      },
    },
  },
  {
    id: 2,
    eligibilityStatus: 'nearly',
    trialInfo: {
      nct: 'NCT0355513',
      title: 'A Test Dummy Data Trial',
      startingDate: 'Oct 27, 2015',
      endingDate: 'Sept 27, 2021',
      phase: 3,
      overallStatus: 'not recruiting',
      enrolled: 1000,
      interventions: ['N/A', 'Leuprolide'],
      sponsors: ['Glaxo Smithkline', 'Memorial Sloan Kettering'],
      allocation:
        'Randomized|Intervention Model: Paralle. Assignment. Masking: Single (Outcomes Assessor). Primary Purpose: Treatment',
      detailsLink: 'https://ClinicalTrials.gov/show/NCT0355514',
      locations: [
        {
          name: 'St Tests Hospital',
          address: 'London EC1A 7JQ',
          contact: '',
          recruitingStatus: 'recruiting',
        },
        {
          name: 'Clinic A',
          address: '',
          contact: '',
          recruitingStatus: 'recruiting',
        },
      ],
    },
    matchingInfo: {
      trialCriteria: {
        age: '56-92',
        conditons: ['Breast Cancer', 'Castration-resistant Breast Cancer'],
        gender: 'male',
        ecog: '0-2',
        gleason: 2,
        inProstate: false,
      },
      patientCriteria: {
        age: '52',
        conditons: ['Breast Cancer'],
        gender: 'female',
        ecog: '0-2',
        gleason: 3,
        inProstate: false,
      },
    },
  },
];
