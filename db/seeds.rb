# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create!({description: 'Warm blue bench', lat: 37.775785, lng: -122.445979})
Bench.create!({description: 'Cold red bench', lat: 37.776785, lng: -122.446979})
Bench.create!({description: 'Hot orange bench', lat: 37.777785, lng: -122.447979})
Bench.create!({description: 'Freezing yellow bench', lat: 37.778785, lng: -122.448979})
Bench.create!({description: 'Brisk green bench', lat: 37.779785, lng: -122.449979})
Bench.create!({description: 'Chilly indigo bench', lat: 37.771785, lng: -122.441979})
Bench.create!({description: 'Toasty violet bench', lat: 37.772785, lng: -122.442979})
