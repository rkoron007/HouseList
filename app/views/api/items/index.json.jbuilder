json.items do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :title, :price, :user_id
      json.image_url url_for(item.photo)
    end
  end
end

json.users do
  @items.each do |item|
    json.set! item.user_id do
      json.partial! 'api/users/user', user: item.user
    end
  end
end
