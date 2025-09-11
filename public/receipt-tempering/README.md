# Receipt Fraud Detection API

A comprehensive Node.js application for advanced receipt fraud detection using OCR, vendor validation, and duplicate detection.

## Features

- **OCR Processing**: Extract text from receipt images and PDFs using Tesseract.js
- **Vendor Validation**: Check against known legitimate vendors (Amazon, MediaMarkt, Saturn, etc.)
- **Duplicate Detection**: Perceptual hashing to detect reused receipt images
- **Fraud Detection**: Identify suspicious patterns in receipts
- **AI Tampering Detection**: Detect if images were edited with AI tools (ChatGPT, DALL-E, etc.)
- **EXIF Analysis**: Analyze image metadata for tampering indicators (images only)
- **PDF Processing**: Convert PDFs to images, then process with Tesseract OCR
- **RESTful API**: Easy-to-use endpoints for receipt validation
- **Web Interface**: Drag & drop interface for file uploads
- **Real-time Analysis**: Fast processing with confidence scoring

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Upload Receipts

Use the web interface at `http://localhost:3000` to upload receipt images or PDFs, or use the API directly:

```bash
# Upload a receipt image
curl -X POST -F "receipt=@your-receipt.jpg" http://localhost:3000/upload-receipt

# Upload a receipt PDF
curl -X POST -F "receipt=@your-receipt.pdf" http://localhost:3000/upload-receipt
```

## API Endpoints

### GET /
Returns API information and available endpoints.

### GET /health
Health check endpoint.

### POST /upload-receipt
Upload and analyze a receipt image.

**Request:** Multipart form data with `receipt` field containing the image or PDF file.

**Response:**
```json
{
  "fileName": "receipt.jpg",
  "fileSize": 245760,
  "mimeType": "image/jpeg",
  "textExtracted": "Amazon.com\nOrder #123-4567890\n...",
  "vendorRecognized": true,
  "duplicate": false,
  "tamperingDetected": false,
  "tamperingDetails": {
    "tampered": false,
    "software": null,
    "softwareCategory": null,
    "confidence": "Low"
  },
  "receiptDate": "2024-01-15",
  "dateSuspicious": false,
  "dateReason": "Date appears valid",
  "fraudLikely": false,
  "imageHash": "abc123...",
  "vendor": "Amazon",
  "isLegitimate": true,
  "confidence": "High"
}
```

## Fraud Detection Features

### 1. Vendor Validation
The system validates against known legitimate vendors for Hausrat insurance:

**Electronics & Tech**: Amazon, MediaMarkt, Saturn, Apple, Samsung, Sony, LG, Bosch, Siemens, Miele, AEG, Electrolux, Philips, Braun

**Home & Garden**: IKEA, Bauhaus, OBI, Hornbach, Toom

**Retail**: Otto, Zalando, Galeria, Karstadt, C&A, H&M, Zara, Uniqlo

**Supermarkets**: Real, Kaufland, Lidl, Aldi, Rewe, Edeka

**Pharmacies**: DM, Rossmann, Müller

### 2. Fraud Detection Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| **Suspicious Order Numbers** | Sequential or repeated numbers | `999999`, `111-111-111` |
| **Unrealistic Pricing** | Extremely low prices for high-value items | iPhone for €1.00 |
| **Invalid Dates** | Non-existent dates or very old dates | `2024-02-30`, `2018-01-01` |
| **Typos in Brand Names** | Misspelled company or receipt type | `Recceipt`, `MediaMartk` |
| **Missing Contact Info** | No website or contact details | No `www.` or phone number |
| **Unknown Vendors** | Vendors not in legitimate vendor list | `ElectroShop`, `FakeStore` |
| **Duplicate Images** | Same receipt image used multiple times | Perceptual hash matching |

### 3. Duplicate Detection
Uses perceptual hashing to detect if the same receipt image has been submitted before, preventing fraud through image reuse.

## Supported File Types

The system supports the following file formats:

- **Images**: JPEG, PNG, GIF, BMP, TIFF
- **Documents**: PDF files
- **Maximum file size**: 10MB

## Development

### Project Structure

```
receipt-fraud/
├── index.js              # Main server file
├── package.json          # Dependencies
├── README.md             # This file
├── eng.traineddata       # Tesseract OCR training data
├── public/               # Web interface
│   └── index.html        # Frontend upload interface
└── uploads/              # Temporary upload directory (auto-created)
```

### Adding New Fraud Patterns

To add new fraud detection patterns, modify the `detectContentTampering` function in `index.js`:

```javascript
const patterns = [
  {
    name: 'Your Custom Pattern',
    regex: /your-pattern-regex/i,
    field: 'Field Name',
    confidence: 'High'
  },
  // ... existing patterns
];
```

## Dependencies

- **express**: Web framework
- **multer**: File upload handling
- **tesseract.js**: OCR processing
- **pdf2pic**: PDF to image conversion
- **image-hash**: Perceptual hashing for duplicate detection
- **exif-parser**: EXIF metadata analysis
- **crypto**: Cryptographic functions

## License

MIT
