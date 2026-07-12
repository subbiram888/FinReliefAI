from sqlalchemy.orm import Session
from app.models.user import User


def update_profile(
    db: Session,
    user_id: int,
    full_name,
    email,
    monthly_income,
    monthly_expenses,
    savings,
    employment_type,
):

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        return {"error": "User not found"}

    user.full_name = full_name
    user.email = email
    user.monthly_income = monthly_income
    user.monthly_expenses = monthly_expenses
    user.savings = savings
    user.employment_type = employment_type

    db.commit()
    db.refresh(user)

    return {
        "message": "Profile Updated Successfully",
        "user": user,
    }


def get_profile(
    db: Session,
    user_id: int,
):

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        return {"error": "User not found"}

    return user