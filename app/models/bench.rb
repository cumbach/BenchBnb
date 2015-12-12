class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.where(lat: bounds['southWest']['lat'] .. bounds['northEast']['lat'],
    lng: bounds['southWest']['lng'] .. bounds['northEast']['lng'])
  end
end

# bounds[0].lat AND bounds[1].lat AND
# this.lng BETWEEN bounds[0].lng AND bounds[1].lng
