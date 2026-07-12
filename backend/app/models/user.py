from sqlalchemy import Column, Integer, String, Float
from app.database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)

    monthly_income = Column(Float, default=0)
    monthly_expenses = Column(Float, default=0)
    savings = Column(Float, default=0)
    employment_type = Column(String, default="")