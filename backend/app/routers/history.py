from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.services.history_service import get_ai_history

router = APIRouter(tags=["AI History"])


@router.get("/ai-history")
def history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_ai_history(
        db=db,
        user_id=current_user.id,
    )