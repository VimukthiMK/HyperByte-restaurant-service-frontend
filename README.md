# HyperByte-restaurant-service-frontend
A React (Vite) Frontend for a restaurant service application.

## How to Run the Docker Container

1. **Clone Git Repository**:
    ```sh
    git clone https://github.com/VimukthiMK/HyperByte-restaurant-service-frontend.git
    ```

2. **Open your terminal**

3. **Navigate to the directory containing the application**:
    ```sh
    cd path/to/HyperByte-restaurant-service-frontend
    ```

4. **Build the Docker Image**:
    ```sh
    docker build -t frontend-app .
    ```

5. **Run the Docker Container**:
    ```sh
    docker run -p 5173:5173 frontend-app
    ```

Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to verify that Frontend application is running inside the Docker container.
