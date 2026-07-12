from sqlalchemy.orm import Session

from app.models.ai_history import AIHistory


def get_ai_history(
    db: Session,
    user_id: int,
):

    history = (
        db.query(AIHistory)
        .filter(AIHistory.user_id == user_id)
        .order_by(AIHistory.created_at.desc())
        .all()
    )

    result = []

    for item in history:

        result.append({
            "id": item.id,
            "user_id": item.user_id,
            "query_type": item.query_type,
            "response": item.response,
            "created_at": item.created_at,
        })

    return result