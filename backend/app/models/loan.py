from sqlalchemy import Column, Integer, Float, String, ForeignKey
from app.database.database import Base


class Loan(Base):
    __tablename__ = "loans"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))

    lender_name = Column(String, nullable=False)
    outstanding_amount = Column(Float)
    emi = Column(Float)
    overdue_months = Column(Integer)
    interest_rate = Column(Float)