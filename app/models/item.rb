class Item < ApplicationRecord
  validates :description, :title, :user_id, :img_url, :price, presence: true

  belongs_to :user,
foreign_key: :user_id,
  class_name: User

  def associated_items
    Item.where(user: user).where.not(id: id).limit(3)
  end

end
