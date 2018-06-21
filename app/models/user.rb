class User < ApplicationRecord
  validates :first_name, :last_name, presence: true
  validates :username, presence: true, uniqueness: true

  has_many :events, dependent: :destroy
end
