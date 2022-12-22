json.comments(@comments) do |comment|
    json.id comment.id
    json.body comment.body
    json.created_at comment.created_at
    json.product_id comment.product_id
    json.user do
        json.full_name comment.user.full_name
    end
end