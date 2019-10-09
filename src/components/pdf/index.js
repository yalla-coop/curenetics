import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SinglePage from './singleTrial';

const Pdf = () => (
  <div>
    <PDFDownloadLink document={<SinglePage />}>
      {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);
export default Pdf;
