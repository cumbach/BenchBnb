class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds, range)
    result =
      self.where(lat: bounds['southWest']['lat'] .. bounds['northEast']['lat'])

    if 1 > 0
      result = result.where(lng: bounds['southWest']['lng'] .. bounds['northEast']['lng'])
    end
    
    if range
      if range['min']
        result = result.where("seating > ?", range['min'])
      end

      if range['max']
        result = result.where("seating < ?", range['max'])
      end
    end


    result

  end
end
