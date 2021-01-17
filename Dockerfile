FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /goal_tracker
COPY requirements.txt /goal_tracker/
RUN pip install -r requirements.txt
COPY . /goal_tracker/