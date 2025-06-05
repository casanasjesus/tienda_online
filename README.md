# 🛒 Tienda Online - Angular + Docker

Este repositorio contiene una aplicación web desarrollada con **Angular**, la cual ha sido **contenerizada usando Docker** y servida en mediante **Nginx**.

---

## 🚀 Tecnologías utilizadas

- Angular versión 20
- Docker
- Nginx (como servidor estático de producción)
- Node.js (para compilar la app Angular)

---

## 🧩 Requisitos previos

Asegurate de tener instalado en tu sistema:

- [Docker](https://www.docker.com/) (versión reciente)
- [Git](https://git-scm.com/)
- Acceso a una terminal (Linux, macOS o Git Bash en Windows)

---

## 📦 Clonar el repositorio

```bash
git clone https://github.com/usuario/tienda-online.git
cd tienda-online
```

## 🛠️ Construye la imagen en Docker

```bash
docker build -t tienda-online .
```

## ▶️ Ejecuta el contenedor

```bash
docker run -d -p 8080:80 tienda-online
```

## 🌐 Accede a la app en tu navegador web

http://localhost:8080

## 🧼 Detener y eliminar el contenedor

```bash
docker ps
```

```bash
docker stop ID_CONTENEDOR
```

```bash
docker rmi tienda-online
```

📁 Estructura del proyecto

```bash
tienda-online/
├── src/                    # Código fuente Angular
├── dist/tienda-online/     # Build generado
│   └── browser/            # Archivos de producción (HTML, JS, CSS, entre otros)
├── Dockerfile              # Archivo de definición del contenedor
├── README.md               # Documentación del proyecto
└── ...
```
