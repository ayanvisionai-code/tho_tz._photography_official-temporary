import os
import glob
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

def convert_heic_to_jpg(directory):
    heic_files = glob.glob(os.path.join(directory, '*.heic')) + glob.glob(os.path.join(directory, '*.HEIC'))
    print(f"Found {len(heic_files)} HEIC files.")
    
    for file_path in heic_files:
        try:
            print(f"Converting {file_path}...")
            image = Image.open(file_path)
            # Remove alpha channel if present because JPEG doesn't support it
            if image.mode in ("RGBA", "P"):
                image = image.convert("RGB")
            
            jpg_path = os.path.splitext(file_path)[0] + '.jpg'
            image.save(jpg_path, format="JPEG", quality=85)
            
            # Delete original HEIC file
            os.remove(file_path)
        except Exception as e:
            print(f"Failed to convert {file_path}: {e}")

if __name__ == "__main__":
    target_dir = os.path.join(os.getcwd(), 'public', 'images')
    convert_heic_to_jpg(target_dir)
    print("Done!")
