<!-- # README -->


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|

### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|
|email|string|null: false, add_index, unique: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
