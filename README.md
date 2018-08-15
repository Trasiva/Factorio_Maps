# Factorio_Maps
This is an improvement upon @Trast's original [project](https://github.com/trast/factorio-screenshots). Unfortunately it looks like at this point, it is no longer being curated.

## Prerequisites 
 * Python 2.7
 * Python Pillow (PIL is obscelete)
 * Either be on a Linux system, or have WSL Ubunto enabled.
 * Node

### Step 1
Run the script under `_scripts/Factorio_Script.lua` in Factorio. You may change the `New_Map` to something more meaningful if you wish. Just like all other screencaps, it'll be located in `%appdata%/Factorio/script-output`. This script will grab ***only*** the chunks that have been explored.
**DO NOT MODIFY ANYTHING BUT THE DIRECTORY WHERE IT'S BEING SAVED!** The python scripts expect a specific naming convention. All files should also have the same prefix, you'll see why later.
**If you wish to keep gaining achievements, save your game before running this command**

### Step 2
Once the game finishes running the script, in either Linux, or using WSL Ubunto, change the directory to the folder where you set had all of the images go.
```
cd /mnt/c/Users/Trasiva/AppData/Roaming/Factorio/script-output/New_Map
```

### Step 3
Afterwards, you'll call the following line, replacing `DIR` with the actual directory to the python scripts are located.
```
ls s_*.jpg | nice xargs -n100 -P8 DIR/slice.py
```

### Step 4
Call the following line, once again replacing `DIR` with the directory where the python scripts are.
```
DIR/shrink.py
```

### Step 5
This folder is everything you need, assuming you have Node installed. You can update the packages if you need to, but there's only two files that require updates:
 * **index.js**
   * Change line **7** to the path where your completed images are stored (this may be `rsync`'d, manually moved, or left where it is.
 * **views/map.js**
   * Change line **23** with the list of all files sans the aforementioned prefix.
   * Change line **29** with the prefix of all folders.
   
# Notes
This is a work in progress as I learn more about Node. Improvements will be made over time.
