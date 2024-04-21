# CRUD Operations Using Vite and Supabase

This project demonstrates CRUD (Create, Read, Update, Delete) operations using Vite (a build tool for modern web development) and Supabase (an open-source alternative to Firebase).

## Technologies Used

- **Vite**: A build tool that provides a fast and optimized development environment for modern web projects, leveraging esbuild for bundling.
- **Supabase**: An open-source Firebase alternative that offers a real-time database service and authentication system.
- **Vue.js**: A progressive JavaScript framework used for building user interfaces.

## Features

- **Create**: Add new records to the database.
- **Read**: Fetch and display records from the database.
- **Update**: Modify existing records.
- **Delete**: Remove records from the database.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (version >= 14.0.0)
- npm (Node.js package manager, comes with Node.js installation)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yVijayMakkad/CRUD-operations-Using-Vite-Supabase.git
   ```

2. Navigate into the project directory:

   ```bash
   cd CRUD-operations-Using-Vite-Supabase
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. **Supabase Setup**:
   - Create a free account on [Supabase](https://supabase.io/).
   - Create a new project and obtain your Supabase URL and public API key.
   - Replace the placeholders in `.env` with your Supabase URL and API key.

2. **Environment Variables**:
   - Rename `.env.example` to `.env`.
   - Update `.env` with your Supabase URL and API key:

     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_KEY=your_supabase_public_api_key
     ```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

## Deployment

To build the project for production:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README according to your project's specific details and structure. Happy coding!
