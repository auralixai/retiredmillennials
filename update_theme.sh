#!/bin/bash
FILES=$(find src/app/library src/app/blog src/app/tools -type f -name "page.tsx")

for file in $FILES; do
  echo "Processing $file"
  # Background and text colors
  sed -i 's/bg-\[#0A0B0D\]/bg-white/g' "$file"
  sed -i 's/text-white/text-black/g' "$file"
  
  # White borders and backgrounds to black
  sed -i 's/border-white\/5/border-black\/5/g' "$file"
  sed -i 's/border-white\/10/border-black\/10/g' "$file"
  sed -i 's/border-white\/20/border-black\/20/g' "$file"
  sed -i 's/bg-white\/5/bg-black\/5/g' "$file"
  sed -i 's/bg-white\/10/bg-black\/10/g' "$file"
  sed -i 's/bg-white\/\[0.02\]/bg-white shadow-sm hover:shadow-2xl/g' "$file"
  
  # Gold colors
  sed -i 's/bg-\[#FFD700\]/bg-\[#C5A059\]/g' "$file"
  sed -i 's/text-\[#FFD700\]/text-\[#C5A059\]/g' "$file"
  sed -i 's/border-\[#FFD700\]/border-\[#C5A059\]/g' "$file"
  sed -i 's/from-\[#FFD700\]/from-\[#C5A059\]/g' "$file"
  
  # Typography adjustments for luxurious feel
  sed -i 's/font-black tracking-tighter/font-serif font-bold tracking-tight/g' "$file"
  sed -i 's/italic uppercase//g' "$file"
  sed -i 's/uppercase italic//g' "$file"
  sed -i 's/text-gray-400/text-gray-600 font-light/g' "$file"
  sed -i 's/text-gray-300/text-gray-600 font-light/g' "$file"
  
done

echo "Theme update complete."
