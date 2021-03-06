const keysOrder = [
  'fileReference',
  'ECOGStatus',
  'age',
  'gleasonScore',
  'gender',
  'Keywords',
  'cancerType',
  'zip',
];

export const mapKeyToOptions = {
  gender: ['Male', 'Female'],
  ECOGStatus: [0, 1, 2, 3, 4],
  'Disease within prostate': ['yes', 'no'],
  'Disease outside prostate': ['yes', 'no'],
  gleasonScore: ['3+3', '3+4', '4+3', '4+4', '9-10'],
  cancerType: [
    'Adrenal cancer',
    'Anal cancer',
    'Appendix cancer',
    'Bile duct cancer',
    'Bladder cancer',
    'Bone cancer',
    'Brain cancer',
    'Breast cancer',
    'Cervical cancer',
    'Colorectal cancer',
    'Esophageal cancer',
    'Gallbladder cancer',
    'Gestational trophoblastic disease',
    'Head and neck cancer',
    'Hodgkin lymphoma',
    'Intestinal cancer',
    'Kidney cancer',
    'Leukemia',
    'Liver cancer',
    'Lung cancer',
    'Melanoma',
    'Mesothelioma',
    'Multiple myeloma',
    'Neuroendocrine tumors',
    'Non-Hodgkin lymphoma',
    'Oral cancer',
    'Ovarian cancer',
    'Pancreatic cancer',
    'Prostate cancer',
    'Sinus cancer',
    'Skin cancer',
    'Soft tissue sarcoma',
    'Spinal cancer',
    'Stomach cancer',
    'Testicular cancer',
    'Throat cancer',
    'Thyroid cancer',
    'Uterine cancer',
    'Vaginal cancer',
    'Vulvar cancer',
    'Urinary Incontinence',
  ],
};

const mapKeyToDisplayField = {
  age: 'Age:',
  gender: 'Gender:',
  zip: 'Postcode:',
  cancerType: 'Type of Cancer:',
  fileReference: 'File name:',
  ECOGStatus: 'ECOG status:',
  gleasonScore: 'Gleason score:',
  'Disease within prostate': 'Disease within prostate:',
  'Disease outside prostate': 'Disease outside prostate:',
};

export const addOptionsFunc = data => {
  // this massive code is just for convrting the list from a simple array
  // to array of object that suitable for the form
  // did the user press edit-field for that one? (edit)
  // what the user should see instead of key name? (display)
  // what the value the field? (value)
  // if options have value then it's select input if not its just a text input
  return data.map(object =>
    keysOrder.reduce((acc, key) => {
      if (key === 'Keywords') {
        return acc.concat([
          {
            key: 'Disease within prostate',
            value: object[key].includes(
              ...['disease within prostate', 'focal disease']
            )
              ? 'yes'
              : 'no',
            edit: false,
            options: mapKeyToOptions['Disease in prostate'],
            display: mapKeyToDisplayField['Disease in prostate'],
          },
          {
            key: 'Disease outside prostate',
            value: object[key].includes([
              'disease outside prostate',
              'metastatic disease',
              'advanced disease',
            ])
              ? 'yes'
              : 'no',
            edit: false,
            options: mapKeyToOptions['Disease outside prostate'],
            display: mapKeyToDisplayField['Disease outside prostate'],
          },
        ]);
      }

      return acc.concat({
        id: object.id,
        key,
        value: object[key] || 'Data not found',
        edit: false,
        options: mapKeyToOptions[key],
        display: mapKeyToDisplayField[key],
      });
    }, [])
  );
};
