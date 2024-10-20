# **Vedic Shastra API**

![Vedic Shastra](/assets/header.jpg)

The **Vedic Shastra API** is a comprehensive and scalable API designed to provide access to a vast collection of Hindu scriptures, including the Vedas, Upanishads, Puranas, Bhagavad Gita, Ramayana, and more. It offers easy retrieval of verses, translations, and commentaries in various languages, enabling developers, scholars, and enthusiasts to interact with the rich philosophical and spiritual content of Hindu scriptures.

---

## **Features**

- **Scriptures Database**: Access a growing collection of Hindu scriptures, including Vedas, Upanishads, Puranas, Bhagavad Gita, and Ramayana.
- **Translations & Commentary**: Retrieve verses along with translations and insightful commentaries.
- **Search Functionality**: Search for verses or scriptures by keywords, categories, or verses.
- **Multi-language Support**: Available in Sanskrit, English, and other languages.
- **Modular Design**: Add more scriptures and translations dynamically through the API.

---

## **Project Structure**

The project is built using **TypeScript** and **Node.js**, and uses **MongoDB** as the database.

```
vedic-shastra-api/
│
├── src/
│   ├── controllers/       # API controllers
│   ├── models/            # Mongoose models for scriptures, categories, translations
│   ├── routes/            # API routes
│   ├── seed/              # Data seeding scripts
│   ├── validations/       # Input validation with Joi
│   └── app.ts             # Main application entry point
│
├── tests/                 # Unit tests
├── .env                   # Environment variables
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## **Getting Started**

### **1. Prerequisites**

Make sure you have the following installed:

- **Node.js**: `v14.x` or later
- **MongoDB**: Make sure you have a MongoDB instance running, either locally or via a service like MongoDB Atlas.
- **TypeScript**: Installed globally (`npm install -g typescript`)

### **2. Installation**

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/vedic-shastra-api.git
cd vedic-shastra-api
npm install
```

### **3. Environment Setup**

Create a `.env` file at the root of the project and configure the following environment variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost/vedicshastra  # Or your MongoDB connection string
```

### **4. Database Seeding**

Before running the API, you can seed the database with some initial data like categories and scriptures:

```bash
ts-node seed/categories.ts
ts-node seed/scriptures.ts
```

### **5. Running the API**

Start the server in development mode:

```bash
npm run dev
```

The API will be running at `http://localhost:5000`.

---

## **API Endpoints**

### **Scriptures**

- **GET /api/scriptures**  
  Get all scriptures or filter by category, verse, or search term.

- **GET /api/scriptures/:id**  
  Get a specific scripture by ID.

- **POST /api/scriptures**  
  Add a new scripture (admin only).

- **DELETE /api/scriptures/:id**  
  Delete a specific scripture (admin only).

### **Categories**

- **GET /api/categories**  
  Retrieve all scripture categories (e.g., Vedas, Upanishads).

- **POST /api/categories**  
  Add a new category (admin only).

### **Translations**

- **GET /api/translations/:scriptureId**  
  Retrieve all translations for a specific scripture.

---

## **Usage Examples**

### **Retrieve All Scriptures**

```bash
curl http://localhost:5000/api/scriptures
```

### **Search Scriptures by Keyword**

```bash
curl http://localhost:5000/api/scriptures?search=Agni
```

### **Retrieve Scriptures by Category**

```bash
curl http://localhost:5000/api/scriptures?category=Vedas
```

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or suggestions, feel free to contact the project maintainer at **samarthsharma9377@gmail.com**.