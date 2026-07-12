from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.user import UpdateProfileRequest
from app.services.user_service import (
    update_profile,
    get_profile,
)

from app.dependencies import get_current_user
from app.models.user import User

router = APIRouter(tags=["User"])


@router.get("/profile")
def profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_profile(
        db=db,
        user_id=current_user.id,
    )


@router.put("/update-profile")
def profile_update(
    data: UpdateProfileRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return update_profile(
        db=db,
        user_id=current_user.id,
        full_name=data.full_name,
        email=data.email,
        monthly_income=data.monthly_income,
        monthly_expenses=data.monthly_expenses,
        savings=data.savings,
        employment_type=data.employment_type,
    )