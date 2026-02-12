#!/usr/bin/env python3
"""Show folder structure of script location - writes structure.txt in same folder"""
import sys
import argparse
from pathlib import Path

def show_structure(folder, prefix="", max_files=50, depth=0, max_depth=None):
    """Generate folder structure lines with error handling and depth limits"""
    lines = []
    folder = Path(folder)
    
    # Check depth limit
    if max_depth is not None and depth > max_depth:
        lines.append(f"{prefix}[max depth reached]")
        return lines
    
    try:
        items = sorted(folder.iterdir())
    except PermissionError:
        lines.append(f"{prefix}[access denied]")
        return lines
    except OSError as e:
        lines.append(f"{prefix}[error: {e}]")
        return lines
    
    dirs = []
    files = []
    
    for i in items:
        try:
            if i.is_dir():
                dirs.append(i)
            elif i.is_file():
                files.append(i)
        except (PermissionError, OSError):
            # Skip items we can't access
            continue
    
    for f in files[:max_files]:
        lines.append(f"{prefix}{f.name}")
    if len(files) > max_files:
        lines.append(f"{prefix}... and {len(files) - max_files} more files")
    
    for d in dirs:
        lines.append(f"{prefix}{d.name}/")
        # Recursive call with increased depth
        sub_lines = show_structure(d, prefix + "  ", max_files, depth + 1, max_depth)
        lines.extend(sub_lines)
    
    return lines

def main():
    parser = argparse.ArgumentParser(
        description="Generate folder structure report of the script's location"
    )
    parser.add_argument(
        "-m", "--max-files", 
        type=int, 
        default=50,
        help="Maximum files per folder to list (default: 50)"
    )
    parser.add_argument(
        "-d", "--max-depth", 
        type=int, 
        default=None,
        help="Maximum directory depth to traverse (default: unlimited)"
    )
    parser.add_argument(
        "-o", "--output",
        help="Custom output filename (default: structure.txt in script folder)"
    )
    
    args = parser.parse_args()
    
    # Always use the directory where the script is located
    script_location = Path(__file__).parent.resolve()
    target_folder = script_location
    
    print(f"Script location: {script_location}")
    print(f"Analyzing: {target_folder}")
    if args.max_depth:
        print(f"Max depth: {args.max_depth}")
    
    try:
        lines = [f"{target_folder}/"]
        structure_lines = show_structure(
            target_folder, 
            max_files=args.max_files,
            max_depth=args.max_depth
        )
        lines.extend(structure_lines)
    except KeyboardInterrupt:
        print("\n⚠️  Interrupted by user. Saving partial results...")
    
    # Always serve the TXT report in the script's location
    if args.output:
        output_path = script_location / args.output
    else:
        output_path = script_location / "structure.txt"
    
    output_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"✓ Report written: {output_path} ({len(lines)} lines)")

if __name__ == "__main__":
    main()