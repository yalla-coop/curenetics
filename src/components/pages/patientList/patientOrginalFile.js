import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Modal } from 'antd';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class Index extends Component {
  state = {
    numPages: null,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages } = this.state;
    const { medicalRecord, showModal, toggleModal } = this.props;
    return (
      <Modal
        visible={showModal}
        footer={null}
        onCancel={toggleModal}
        width="70%"
      >
        {medicalRecord && (
          <Document
            file={medicalRecord}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                scale="1.5"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        )}
      </Modal>
    );
  }
}
