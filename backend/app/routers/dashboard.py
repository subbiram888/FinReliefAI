from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.dashboard_service import get_dashboard_data

from app.dependencies import get_current_user
from app.models.user import User

router = APIRouter(tags=["Dashboard"])


@router.get("/dashboard")
def dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_dashboard_data(
        db=db,
        user_id=current_user.id,
    )