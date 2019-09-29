const formFields = {
  inputs: {
    ref: {
      label: 'Your ref:',
      id: 'ref',
      placeholder: '1 to 10 letters or numbers',
    },
    age: {
      label: 'Age:',
      id: 'age',
      placeholder: 'Patient’s age (in years)',
    },
    gender: {
      label: 'Gender',
      id: 'gender',
      placeholder: 'Patient’s gender',
    },
    cancer: {
      label: 'Cancer Type',
      id: 'cancer',
      placeholder: 'Patient’s cancer type',
    },
    ecog: {
      label: 'ECOG Status',
      id: 'ecog',
      placeholder: 'Patient’s ECOG status',
    },
    gleason: {
      label: 'Gleason Score',
      id: 'gleason',
      placeholder: 'Patient’s gleason score',
    },

  },
  dropdowns: {
    inside_prostate: {
      label: 'Disease inside prostate:',
      id: 'inside-prostate',
      placeholder: 'Select relevant terms',
    },
    outside_prostate: {
      label: 'Disease outside prostate:',
      id: 'outside-prostate',
      placeholder: 'Select relevant terms',
    },
  },
};

export default formFields;