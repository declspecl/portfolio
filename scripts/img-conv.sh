#!/usr/bin/env bash

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

input_directory="$1"

if [ ! -d "$input_directory" ]; then
  echo "Error: $input_directory is not a valid directory."
  exit 1
fi

for file in "$input_directory"/*.png; do
  filename_without_extension="${file%.png}"

  echo "Processing $file..."

  ffmpeg -i "$file" -vf scale="460:-1" "${filename_without_extension}-460w.webp"
  ffmpeg -i "$file" -vf scale="350:-1" "${filename_without_extension}-350w.webp"
  ffmpeg -i "$file" -vf scale="740:-1" "${filename_without_extension}-740w.webp"

  ffmpeg -i "$file" "${filename_without_extension}.webp"
done

echo "Conversion completed."
