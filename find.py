import subprocess
import json
import os

def collect_dependencies(project_path):
    dependencies = {}
    try:
        # Read package-lock.json
        with open(f"{project_path}/package-lock.json", "r") as f:
            package_lock_json = json.load(f)

        # Extract dependencies
        for package, info in package_lock_json.get('dependencies', {}).items():
            dependencies[package] = info.get('version', '')

    except Exception as e:
        print(f"Error occurred while collecting dependencies: {e}")

    return dependencies

def add_dependencies_to_package_json(project_path, dependencies):
    try:
        # Read package.json
        with open(f"{project_path}/package.json", "r") as f:
            package_json = json.load(f)

        # Add dependencies to package.json if not already listed
        for package, version in dependencies.items():
            if package not in package_json.get('dependencies', {}):
                package_json['dependencies'][package] = version

        # Write updated package.json
        with open(f"{project_path}/package.json", "w") as f:
            json.dump(package_json, f, indent=2)

        print("Dependencies added to package.json successfully.")
    except Exception as e:
        print(f"Error occurred while adding dependencies to package.json: {e}")

def generate_reproduction_commands(project_path):
    try:
        # Change directory to project path
        os.chdir(project_path)

        # Generate commands to reproduce the environment
        commands = [
            "npm install",  # Install dependencies
            "npm run build"  # Build the project
            # Add more commands as needed
        ]

        # Print the commands sequentially
        print("Commands to reproduce the environment:")
        for command in commands:
            print(command)

    except Exception as e:
        print(f"Error occurred while generating reproduction commands: {e}")

def generate_markdown_tree(project_path):
    try:
        # Generate markdown tree of project structure
        markdown_tree = "```\n"
        for root, dirs, files in os.walk(project_path):
            level = root.replace(project_path, '').count(os.sep)
            indent = ' ' * 4 * level
            markdown_tree += f"{indent}{os.path.basename(root)}/\n"
            sub_indent = ' ' * 4 * (level + 1)
            for file in files:
                markdown_tree += f"{sub_indent}{file}\n"
        markdown_tree += "```"

        # Print the markdown tree
        print("Project structure:")
        print(markdown_tree)

    except Exception as e:
        print(f"Error occurred while generating markdown tree: {e}")

# Provide the path to the React project directory
project_path = "/home/james/Desktop/workspace/ecolet/backupbet"

# Step 1: Collect Dependencies from package-lock.json
dependencies = collect_dependencies(project_path)

# Step 2: Add Dependencies to package.json
add_dependencies_to_package_json(project_path, dependencies)

# Step 3: Generate Commands to Reproduce the Environment
generate_reproduction_commands(project_path)

# Step 4: Generate Markdown Tree of Project Structure
generate_markdown_tree(project_path)
