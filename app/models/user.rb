class User < ApplicationRecord
    validates :first_name, :last_name, :email, presence: true
    validates :email, uniqueness: { case_sensitive: false },
        format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

    has_many :products, dependent: :destroy
    has_secure_password

    before_save :downcase_email

    private

    def downcase_email
        self.email.downcase!
    end
end