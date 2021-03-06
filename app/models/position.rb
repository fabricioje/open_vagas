class Position < ApplicationRecord
  belongs_to :company

  enum career: [:developer, :business_inteligence, :information_tecnology, :desing,
                :product, :tecnology, :other]
  enum contract:[:clt, :pj, :match]
  validates :name, :career, :contract, :city, :state, :summary, presence: true
end
