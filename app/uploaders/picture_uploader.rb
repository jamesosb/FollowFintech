# encoding: utf-8
# CarrierWave uploader for +Picture+ model.
class PictureUploader < CarrierWave::Uploader::Base

  include CarrierWave::RMagick

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  # include Sprockets::Helpers::RailsHelper
  # include Sprockets::Helpers::IsolatedHelper

  # Choose what kind of storage to use for this uploader:
  storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Generates +preview+ version.
  version :preview do
    resize_to_limit(400, 300)
  end

  version :large do
    process resize_to_limit: [800, 800]
  end

  version :medium, :from_version => :large do
    process resize_to_limit: [500, 500]
  end

  version :thumb, :from_version => :medium do
    process resize_to_fit: [100, 100]
  end

  version :square do
    process :resize_to_fill => [500, 500]
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

#  def root
#    Rails.root.join 'public/'
#  end
end
