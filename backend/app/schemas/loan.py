from pydantic import BaseModel


class LoanCreate(BaseModel):
    lender_name: str
    outstanding_amount: float
    emi: float
    interest_rate: float
    overdue_months: int