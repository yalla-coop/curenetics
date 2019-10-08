import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SingleTrial from './singleTrial';

const Pdf = () => (
  <div>
    <PDFDownloadLink document={<SingleTrial />}>
      {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);
export default Pdf;
