FROM python:3.10.13-alpine3.18
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 3300
CMD ["python", "main.py"]
