FROM python:3

WORKDIR /usr/src/populate

COPY . /usr/src/populate

RUN pip install pymongo

CMD ["python", "./populate.py"]