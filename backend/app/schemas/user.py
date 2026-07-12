from pydantic import BaseModel, EmailStr


class UpdateProfileRequest(BaseModel):
    full_name: str
    email: EmailStr
    monthly_income: float
    monthly_expenses: float
    savings: float
    employment_type: str