class Event < ApplicationRecord
  validates :user_id, :title, :description, :start_date, :end_date, presence: true
  validate :require_start_date_before_end
  validate :does_not_overlap_event

  belongs_to :user

  def require_start_date_before_end
    return if start_date < end_date
    errors[:start_date] << 'must be before end date'
    errors[:end_date] << 'must be after start date'
  end

  def overlapping_requests
    Event
    .where.not(id: self.id)
    .where(user_id: user_id)
    .where.not('start_date > :end_date OR end_date < :start_date',
               start_date: start_date, end_date: end_date)
  end

  def does_not_overlap_event
    return if overlapping_requests.empty?
    errors[:event] << 'request conflicts with existing event'
  end
end
