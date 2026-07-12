from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime

from app.database.database import Base


class AIHistory(Base):
    __tablename__ = "ai_history"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    query_type = Column(String(100))
    response = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)