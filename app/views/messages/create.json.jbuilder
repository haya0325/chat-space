json.user_id  @message.user.id
json.body  @message.body
json.image  @message.image
json.user_name  @message.user.name
json.time  @message.created_at.strftime("%Y/%m/%d %H:%M")
