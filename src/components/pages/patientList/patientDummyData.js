// note:
// - we are assuming the data we are entering is in this format
// - we separate out diseaseinside + outside prostate though
export const patientDummyData = [
  {
    id: 1,
    fileReference: 123,
    age: 15,
    gender: 'male',
    postcode: 'E5 6TT',
    cancerType: 'Brain cancer',
    ECOGStatus: '0',
    gleasonScore: '3+3',
    Keywords: ['disease within prostate', 'focal disease'],
  },
  {
    id: 2,
    fileReference: 1235,
    age: 15,
    gender: 'female',
    postcode: 'E5 6TT',
    cancerType: 'Brain cancer',
    ECOGStatus: '0',
    gleasonScore: '3+3',
    Keywords: [
      'disease outside prostate',
      'metastatic disease',
      'advanced disease',
    ],
  },
  {
    id: 3,
    fileReference: 1234,
    postcode: 'E5 6TT',
    cancerType: 'Brain cancer',
    ECOGStatus: '0',
    gleasonScore: '3+3',
    Keywords: ['disease within prostate', 'focal disease'],
  },
];
