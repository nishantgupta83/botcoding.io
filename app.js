// Application data
const lessons = [
    {
        id: "python-basics",
        title: "Python Basics",
        progress: 80,
        topics: ["Introduction to Python", "Print Statements", "Comments", "Variables"],
        description: "Learn the fundamentals of Python programming",
        content: {
            introduction: `
                <h2>Welcome to Python! 🐍</h2>
                <p>Python is a friendly programming language that's perfect for beginners. It was created to be easy to read and write, just like English!</p>
                
                <div class="concept-visual">
                    <img src="https://pplx-res.cloudinary.com/image/upload/v1749413286/pplx_project_search_images/1c3ee0e9941eb3135e18e7bd9ecb8cb66ce5c68e.jpg" alt="Programming languages for kids">
                </div>
                
                <h3>What makes Python special?</h3>
                <ul>
                    <li>🎯 Easy to learn and understand</li>
                    <li>🎮 Perfect for creating games and fun projects</li>
                    <li>🤖 Used by real programmers at companies like Google and Instagram</li>
                    <li>📚 Has lots of helpful tools and libraries</li>
                </ul>
            `,
            printStatements: `
                <h3>Print Statements - Your First Python Code! 📢</h3>
                <p>The <code>print()</code> function is like Python's voice - it lets your program talk to you!</p>
                
                <div class="code-example">
print("Hello, World!")
print("Welcome to Python!")
print("I'm learning to code!")
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('print(\"Hello, World!\")')">Try This Code!</button>
                
                <h4>You can print different things:</h4>
                <div class="code-example">
# Print text (strings)
print("My name is Alex")

# Print numbers
print(42)
print(3.14)

# Print math calculations
print(5 + 3)
print(10 * 2)
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('print(\"My name is Alex\")\\nprint(42)\\nprint(5 + 3)')">Try This Code!</button>
                
                <div class="exercise-box">
                    <h4>🎯 Try It Yourself!</h4>
                    <p>Create print statements that show:</p>
                    <ul>
                        <li>Your name</li>
                        <li>Your age</li>
                        <li>Your favorite color</li>
                        <li>The answer to 6 × 7</li>
                    </ul>
                </div>
            `,
            comments: `
                <h3>Comments - Notes for Your Code 📝</h3>
                <p>Comments are like sticky notes in your code. They help you remember what your code does!</p>
                
                <div class="code-example">
# This is a comment - Python ignores this line
print("Hello!")  # This comment explains what this line does

# Comments help you remember:
# - What your code does
# - Why you wrote it
# - How it works
                </div>
                
                <h4>Good commenting habits:</h4>
                <ul>
                    <li>✅ Explain tricky parts of your code</li>
                    <li>✅ Describe what each section does</li>
                    <li>✅ Leave notes for your future self</li>
                    <li>❌ Don't comment obvious things</li>
                </ul>
                
                <div class="exercise-box">
                    <h4>🎯 Practice Time!</h4>
                    <p>Add comments to explain this code:</p>
                    <div class="code-example">
print("Welcome to my program!")
name = "CodeBot"
age = 5
print("My name is", name)
print("I am", age, "years old")
                    </div>
                </div>
            `,
            variables: `
                <h3>Variables - Storing Information 📦</h3>
                <p>Variables are like labeled boxes where you can store information to use later!</p>
                
                <div class="concept-visual">
                    <div style="display: flex; gap: 20px; justify-content: center; align-items: center; background: #f0f9ff; padding: 20px; border-radius: 8px;">
                        <div style="background: #3b82f6; color: white; padding: 10px; border-radius: 8px; text-align: center;">
                            <strong>name</strong><br>
                            "Alice"
                        </div>
                        <div style="font-size: 24px;">→</div>
                        <div style="background: #10b981; color: white; padding: 10px; border-radius: 8px; text-align: center;">
                            <strong>age</strong><br>
                            10
                        </div>
                        <div style="font-size: 24px;">→</div>
                        <div style="background: #f59e0b; color: white; padding: 10px; border-radius: 8px; text-align: center;">
                            <strong>score</strong><br>
                            95.5
                        </div>
                    </div>
                </div>
                
                <h4>Creating Variables:</h4>
                <div class="code-example">
# Storing text (strings)
name = "Alice"
favorite_color = "blue"

# Storing numbers
age = 10
score = 95.5
height = 4.5

# Storing True/False values
is_student = True
has_pet = False
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('name = \"Alice\"\\nage = 10\\nprint(\"My name is\", name)\\nprint(\"I am\", age, \"years old\")')">Try This Code!</button>
                
                <h4>Variable Naming Rules:</h4>
                <ul>
                    <li>✅ Use descriptive names: <code>player_score</code> not <code>x</code></li>
                    <li>✅ Start with letters: <code>name</code>, <code>age</code></li>
                    <li>✅ Use underscores for spaces: <code>first_name</code></li>
                    <li>❌ Don't use spaces: <code>first name</code></li>
                    <li>❌ Don't start with numbers: <code>2name</code></li>
                </ul>
                
                <div class="exercise-box">
                    <h4>🎯 Variable Challenge!</h4>
                    <p>Create variables for:</p>
                    <ul>
                        <li>Your favorite movie</li>
                        <li>Number of pets you have</li>
                        <li>Whether you like pizza (True/False)</li>
                        <li>Your dream vacation destination</li>
                    </ul>
                    <p>Then print them all out!</p>
                </div>
            `
        }
    },
    {
        id: "making-decisions",
        title: "Making Decisions",
        progress: 60,
        topics: ["Boolean Values", "Comparison Operators", "If Statements", "Logical Operators"],
        description: "Learn how to make decisions in your code",
        content: {
            introduction: `
                <h2>Making Decisions in Code 🤔</h2>
                <p>Just like in real life, programs need to make decisions! Should I wear a jacket? Is it time for lunch? Python can help answer these questions!</p>
                
                <div class="concept-visual">
                    <img src="https://pplx-res.cloudinary.com/image/upload/v1748558235/pplx_project_search_images/25bbe10ceff7149ce6b0959d6b58ec2fd6e270a2.jpg" alt="Decision flowchart">
                </div>
            `,
            booleans: `
                <h3>Boolean Values - True or False? ✅❌</h3>
                <p>Boolean values are like yes/no questions. They can only be <code>True</code> or <code>False</code>!</p>
                
                <div class="code-example">
# Boolean variables
is_sunny = True
is_raining = False
likes_pizza = True
is_tired = False

print("Is it sunny?", is_sunny)
print("Is it raining?", is_raining)
                </div>
                
                <h4>Real-world examples:</h4>
                <ul>
                    <li>🌞 Is it sunny outside? → <code>True</code> or <code>False</code></li>
                    <li>🏠 Am I at home? → <code>True</code> or <code>False</code></li>
                    <li>🍕 Do I like pizza? → <code>True</code> or <code>False</code></li>
                    <li>📚 Is homework done? → <code>True</code> or <code>False</code></li>
                </ul>
            `,
            comparisons: `
                <h3>Comparison Operators - Comparing Things 🔍</h3>
                <p>We can compare numbers and text to make decisions!</p>
                
                <div class="code-example">
# Number comparisons
age = 12
print(age > 10)    # True - 12 is greater than 10
print(age < 5)     # False - 12 is not less than 5
print(age == 12)   # True - 12 equals 12
print(age != 15)   # True - 12 does not equal 15

# Text comparisons
name = "Alice"
print(name == "Alice")  # True
print(name == "Bob")    # False
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('age = 12\\nprint(\"Age > 10:\", age > 10)\\nprint(\"Age == 12:\", age == 12)')">Try This Code!</button>
                
                <h4>Comparison Operators:</h4>
                <ul>
                    <li><code>==</code> → Equal to</li>
                    <li><code>!=</code> → Not equal to</li>
                    <li><code>&gt;</code> → Greater than</li>
                    <li><code>&lt;</code> → Less than</li>
                    <li><code>&gt;=</code> → Greater than or equal to</li>
                    <li><code>&lt;=</code> → Less than or equal to</li>
                </ul>
            `,
            ifStatements: `
                <h3>If Statements - Making Choices 🛤️</h3>
                <p>If statements let your program make decisions and do different things based on conditions!</p>
                
                <div class="code-example">
# Simple if statement
age = 10
if age >= 13:
    print("You're a teenager!")
else:
    print("You're still a kid!")

# Weather decision
weather = "sunny"
if weather == "sunny":
    print("Let's go to the park!")
elif weather == "rainy":
    print("Let's stay inside and read!")
else:
    print("Let's see what the day brings!")
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('age = 10\\nif age >= 13:\\n    print(\"You\\'re a teenager!\")\\nelse:\\n    print(\"You\\'re still a kid!\")')">Try This Code!</button>
                
                <h4>Movie Rating Checker:</h4>
                <div class="code-example">
age = int(input("How old are you? "))

if age >= 17:
    print("You can watch R-rated movies!")
elif age >= 13:
    print("You can watch PG-13 movies!")
else:
    print("You can watch G and PG movies!")
                </div>
                
                <div class="exercise-box">
                    <h4>🎯 Decision Challenge!</h4>
                    <p>Create an if statement that decides what to wear based on temperature:</p>
                    <ul>
                        <li>Above 80°F → "Wear shorts and a t-shirt!"</li>
                        <li>60-80°F → "Wear jeans and a light jacket!"</li>
                        <li>Below 60°F → "Wear warm clothes and a coat!"</li>
                    </ul>
                </div>
            `
        }
    },
    {
        id: "repeating-actions",
        title: "Repeating Actions",
        progress: 40,
        topics: ["For Loops", "While Loops", "Break and Continue", "Nested Loops"],
        description: "Learn how to repeat actions efficiently",
        content: {
            introduction: `
                <h2>Repeating Actions with Loops 🔄</h2>
                <p>Imagine having to write "Hello!" 100 times. That would be boring! Loops let us repeat actions without writing the same code over and over.</p>
                
                <div class="concept-visual">
                    <img src="https://pplx-res.cloudinary.com/image/upload/v1748578361/pplx_project_search_images/750a9f5b02af9c3fd7de1e8abbb5b646191a1bdc.jpg" alt="Loop flowchart">
                </div>
            `,
            forLoops: `
                <h3>For Loops - Counting and Repeating 🔢</h3>
                <p>For loops are perfect when you know how many times you want to repeat something!</p>
                
                <div class="code-example">
# Count from 1 to 5
for i in range(1, 6):
    print("Count:", i)

# Print "Hello!" 3 times
for i in range(3):
    print("Hello!")

# Count by 2s
for i in range(0, 11, 2):
    print("Even number:", i)
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('for i in range(1, 6):\\n    print(\"Count:\", i)')">Try This Code!</button>
                
                <h4>Creating Patterns:</h4>
                <div class="code-example">
# Star pyramid
for i in range(1, 6):
    stars = "*" * i
    print(stars)

# Countdown
for i in range(5, 0, -1):
    print("Countdown:", i)
print("Blast off! 🚀")
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('for i in range(1, 6):\\n    stars = \"*\" * i\\n    print(stars)')">Try This Code!</button>
                
                <div class="exercise-box">
                    <h4>🎯 Loop Challenge!</h4>
                    <p>Use for loops to create:</p>
                    <ul>
                        <li>A multiplication table for 5 (5×1, 5×2, etc.)</li>
                        <li>A pattern that prints your name 7 times</li>
                        <li>Numbers from 10 down to 1</li>
                    </ul>
                </div>
            `,
            whileLoops: `
                <h3>While Loops - Keep Going Until... ⏰</h3>
                <p>While loops keep repeating as long as a condition is true!</p>
                
                <div class="code-example">
# Counting with while loop
count = 1
while count <= 5:
    print("Count is:", count)
    count += 1

# Guessing game
secret_number = 7
guess = 0
while guess != secret_number:
    guess = int(input("Guess the number (1-10): "))
    if guess == secret_number:
        print("You got it! 🎉")
    else:
        print("Try again!")
                </div>
                
                <h4>⚠️ Be Careful!</h4>
                <p>Make sure your while loop will eventually stop, or it will run forever!</p>
                
                <div class="code-example">
# Good - this will stop
counter = 0
while counter < 3:
    print("Counter:", counter)
    counter += 1  # This makes it stop eventually

# Bad - this runs forever!
# while True:
#     print("This never stops!")
                </div>
            `
        }
    },
    {
        id: "storing-data",
        title: "Storing Data",
        progress: 20,
        topics: ["Lists", "Dictionaries", "Tuples", "String Methods"],
        description: "Learn how to store and organize information",
        content: {
            introduction: `
                <h2>Storing Data - Organizing Information 📊</h2>
                <p>As your programs get bigger, you'll need to store lots of information. Python gives us great tools to organize data!</p>
                
                <div class="concept-visual">
                    <img src="https://pplx-res.cloudinary.com/image/upload/v1748548811/pplx_project_search_images/4fa67d786cbb5cd128aa722564af9d77d358b118.jpg" alt="Data structures comparison">
                </div>
            `,
            lists: `
                <h3>Lists - Collections of Items 📝</h3>
                <p>Lists are like shopping lists - they can hold many items in order!</p>
                
                <div class="code-example">
# Creating lists
fruits = ["apple", "banana", "orange", "grape"]
numbers = [1, 5, 10, 15, 20]
mixed_list = ["Alice", 12, True, 3.14]

# Accessing items (counting starts at 0!)
print("First fruit:", fruits[0])    # apple
print("Second fruit:", fruits[1])   # banana
print("Last fruit:", fruits[-1])    # grape

# Adding items
fruits.append("strawberry")
print("Updated fruits:", fruits)
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('fruits = [\"apple\", \"banana\", \"orange\"]\\nprint(\"First fruit:\", fruits[0])\\nfruits.append(\"strawberry\")\\nprint(fruits)')">Try This Code!</button>
                
                <h4>Cool List Methods:</h4>
                <div class="code-example">
# List of favorite games
games = ["Minecraft", "Roblox", "Among Us", "Fortnite"]

# Length of list
print("Number of games:", len(games))

# Sort alphabetically
games.sort()
print("Sorted games:", games)

# Remove an item
games.remove("Among Us")
print("After removing:", games)

# Check if item exists
if "Minecraft" in games:
    print("Minecraft is in the list!")
                </div>
                
                <div class="exercise-box">
                    <h4>🎯 List Challenge!</h4>
                    <p>Create a list of your favorite movies and:</p>
                    <ul>
                        <li>Add a new movie to the list</li>
                        <li>Print the first and last movies</li>
                        <li>Check if "Toy Story" is in your list</li>
                        <li>Sort the list alphabetically</li>
                    </ul>
                </div>
            `,
            dictionaries: `
                <h3>Dictionaries - Storing Key-Value Pairs 🗝️</h3>
                <p>Dictionaries are like real dictionaries - they store information with labels (keys)!</p>
                
                <div class="code-example">
# Student information
student = {
    "name": "Alex",
    "age": 12,
    "grade": 7,
    "favorite_subject": "Science",
    "has_pet": True
}

# Accessing information
print("Student name:", student["name"])
print("Student age:", student["age"])

# Adding new information
student["hobby"] = "reading"

# Updating existing information
student["age"] = 13

print("Updated student info:", student)
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('student = {\\n    \"name\": \"Alex\",\\n    \"age\": 12,\\n    \"grade\": 7\\n}\\nprint(\"Name:\", student[\"name\"])\\nstudent[\"hobby\"] = \"reading\"\\nprint(student)')">Try This Code!</button>
                
                <h4>Real-world Example - Game Character:</h4>
                <div class="code-example">
# RPG character stats
character = {
    "name": "Dragon Slayer",
    "level": 5,
    "health": 100,
    "magic_points": 50,
    "inventory": ["sword", "potion", "key"],
    "location": "Forest"
}

# Level up the character!
character["level"] += 1
character["health"] += 20
character["inventory"].append("magic scroll")

print(f"{character['name']} is now level {character['level']}!")
                </div>
            `
        }
    },
    {
        id: "creating-functions",
        title: "Creating Functions",
        progress: 0,
        topics: ["Function Definitions", "Parameters", "Return Values", "Scope"],
        description: "Learn how to create reusable code blocks",
        content: {
            introduction: `
                <h2>Creating Functions - Reusable Code Blocks 🧩</h2>
                <p>Functions are like recipes - they're sets of instructions you can use over and over again!</p>
                
                <p>Think of a function like a vending machine: you put something in (input), it does something, and gives you something back (output)!</p>
            `,
            basics: `
                <h3>Your First Function 🎉</h3>
                <p>Let's create a simple function that greets people!</p>
                
                <div class="code-example">
# Defining a function
def say_hello():
    print("Hello there!")
    print("Welcome to Python!")

# Using (calling) the function
say_hello()
say_hello()  # We can use it multiple times!
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('def say_hello():\\n    print(\"Hello there!\")\\n    print(\"Welcome to Python!\")\\n\\nsay_hello()')">Try This Code!</button>
                
                <h3>Functions with Parameters 📥</h3>
                <p>Parameters let us give information to our functions!</p>
                
                <div class="code-example">
# Function that takes a name
def greet_person(name):
    print(f"Hello, {name}!")
    print("Nice to meet you!")

# Using the function with different names
greet_person("Alice")
greet_person("Bob")
greet_person("CodeBot")
                </div>
                <button class="btn btn--primary try-code-btn" onclick="openCodeEditor('def greet_person(name):\\n    print(f\"Hello, {name}!\")\\n\\ngreet_person(\"Alice\")\\ngreet_person(\"Bob\")')">Try This Code!</button>
                
                <div class="exercise-box">
                    <h4>🎯 Function Challenge!</h4>
                    <p>Create a function called <code>calculate_age_in_days</code> that:</p>
                    <ul>
                        <li>Takes a person's age in years as a parameter</li>
                        <li>Calculates how many days old they are (age × 365)</li>
                        <li>Prints the result</li>
                    </ul>
                </div>
            `
        }
    }
];

const projects = [
    {
        id: "hello-world-art",
        title: "Hello World Art",
        level: "Beginner",
        duration: "30 minutes",
        skills: ["Print statements", "ASCII art", "String manipulation"],
        description: "Create beautiful text art and patterns using print statements",
        steps: [
            "Learn about print statements and how they work",
            "Discover ASCII art and special characters",
            "Create your first text banner",
            "Add decorative borders and patterns",
            "Experiment with emoji and unicode characters",
            "Build your own custom art gallery"
        ],
        code: `# Hello World Art Project
print('*' * 20)
print('*  Hello, World!  *')
print('*' * 20)

# Create your own art pattern
print('🌟' * 10)
print('🌟 Welcome to Python! 🌟')
print('🌟' * 10)

# ASCII Art Example
print("""
    /\\_/\\  
   (  o.o  ) 
    > ^ <
""")

# Your turn to create art!
print("=" * 30)
print("    MY AWESOME PYTHON ART")
print("=" * 30)`
    },
    {
        id: "magic-8-ball",
        title: "Magic 8 Ball",
        level: "Beginner",
        duration: "45 minutes",
        skills: ["Random module", "Lists", "User input"],
        description: "Build a mystical fortune-telling program that answers your questions",
        steps: [
            "Import the random module",
            "Create a list of magical responses",
            "Get input from the user",
            "Use random.choice() to pick a response",
            "Display the mystical answer",
            "Add more responses and improve the experience"
        ],
        code: `import random

# List of magic 8 ball responses
responses = [
    'Yes, definitely!',
    'No way!',
    'Ask again later',
    'Very likely',
    'Doubtful',
    'Absolutely!',
    'Don\\'t count on it',
    'Signs point to yes',
    'My sources say no',
    'Without a doubt'
]

print("🔮 Welcome to the Magic 8 Ball! 🔮")
print("Ask me any yes/no question and I'll give you an answer!")

# Get user question
question = input('Ask the Magic 8 Ball a question: ')
print(f'Question: {question}')

# Dramatic pause effect
print("🔮 The Magic 8 Ball is thinking...")
print(".")
print("..")
print("...")

# Generate random response
answer = random.choice(responses)
print(f'🔮 Magic 8 Ball says: {answer}')

# Ask if they want to play again
play_again = input("Want to ask another question? (yes/no): ")
if play_again.lower() == "yes":
    print("Ask away!")`
    },
    {
        id: "pet-age-calculator",
        title: "Pet Age Calculator",
        level: "Beginner",
        duration: "35 minutes",
        skills: ["Math operations", "Conditional logic", "Type conversion"],
        description: "Calculate your pet's age in human years with this fun calculator",
        steps: [
            "Learn about different pet aging formulas",
            "Get user input for pet type and age",
            "Use if statements for different calculations",
            "Convert between string and number types",
            "Display the results clearly",
            "Add support for more pet types"
        ],
        code: `# Pet Age Calculator
print("🐕🐱 Welcome to the Pet Age Calculator! 🐱🐕")
print("Find out how old your pet is in human years!")

pet_type = input('Do you have a dog or cat? ').lower()
human_age = int(input('How old is your pet in human years? '))

print(f"Calculating age for your {human_age} year old {pet_type}...")

if pet_type == 'dog':
    if human_age <= 2:
        pet_age = human_age * 10.5
    else:
        pet_age = 21 + (human_age - 2) * 4
    print(f"🐕 Your dog is approximately {pet_age} years old in dog years!")
    
elif pet_type == 'cat':
    if human_age <= 2:
        pet_age = human_age * 12.5
    else:
        pet_age = 25 + (human_age - 2) * 4
    print(f"🐱 Your cat is approximately {pet_age} years old in cat years!")
    
else:
    print("I don't know how to calculate age for that pet yet!")
    print("Try 'dog' or 'cat'")

# Fun facts
if pet_type in ['dog', 'cat']:
    print("\\n🎉 Fun Pet Facts:")
    if pet_type == 'dog':
        print("- Dogs age faster in their first 2 years")
        print("- Large dogs age faster than small dogs")
    else:
        print("- Indoor cats typically live longer")
        print("- Cats can live 13-17 years on average")`
    },
    {
        id: "password-generator",
        title: "Password Generator",
        level: "Intermediate",
        duration: "50 minutes",
        skills: ["Random module", "String manipulation", "Loops", "Functions"],
        description: "Create secure passwords with this customizable password generator",
        steps: [
            "Import necessary modules (random, string)",
            "Define character sets for passwords",
            "Create a function to generate passwords",
            "Add user customization options",
            "Implement password strength checking",
            "Generate multiple passwords at once"
        ],
        code: `import random
import string

def generate_password(length=12, include_uppercase=True, include_numbers=True, include_symbols=True):
    """Generate a secure password with customizable options"""
    
    # Start with lowercase letters
    characters = string.ascii_lowercase
    
    # Add other character types based on options
    if include_uppercase:
        characters += string.ascii_uppercase
    if include_numbers:
        characters += string.digits
    if include_symbols:
        characters += "!@#$%^&*"
    
    # Generate password
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

def check_password_strength(password):
    """Check how strong a password is"""
    score = 0
    feedback = []
    
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("Use at least 8 characters")
    
    if any(c.isupper() for c in password):
        score += 1
    else:
        feedback.append("Add uppercase letters")
    
    if any(c.islower() for c in password):
        score += 1
    else:
        feedback.append("Add lowercase letters")
    
    if any(c.isdigit() for c in password):
        score += 1
    else:
        feedback.append("Add numbers")
    
    if any(c in "!@#$%^&*" for c in password):
        score += 1
    else:
        feedback.append("Add symbols")
    
    strength_levels = ["Very Weak", "Weak", "Fair", "Good", "Strong"]
    return strength_levels[min(score, 4)], feedback

# Main program
print("🔐 Password Generator 🔐")
print("Create secure passwords for your accounts!")

# Get user preferences
try:
    length = int(input("Password length (8-50): ") or 12)
    length = max(8, min(50, length))  # Keep between 8-50
    
    include_uppercase = input("Include uppercase letters? (y/n): ").lower() != 'n'
    include_numbers = input("Include numbers? (y/n): ").lower() != 'n'
    include_symbols = input("Include symbols? (y/n): ").lower() != 'n'
    
    num_passwords = int(input("How many passwords to generate? (1-10): ") or 1)
    num_passwords = max(1, min(10, num_passwords))
    
    print(f"\\nGenerating {num_passwords} password(s)...")
    print("=" * 50)
    
    for i in range(num_passwords):
        password = generate_password(length, include_uppercase, include_numbers, include_symbols)
        strength, feedback = check_password_strength(password)
        
        print(f"Password {i+1}: {password}")
        print(f"Strength: {strength}")
        if feedback:
            print(f"Suggestions: {', '.join(feedback)}")
        print("-" * 30)

except ValueError:
    print("Please enter valid numbers!")`
    },
    {
        id: "rock-paper-scissors",
        title: "Rock Paper Scissors Game",
        level: "Intermediate",
        duration: "60 minutes",
        skills: ["Game logic", "Loops", "Score tracking", "User input validation"],
        description: "Build the classic game with score tracking and multiple rounds",
        steps: [
            "Set up the basic game rules and choices",
            "Create the game logic for determining winners",
            "Add score tracking for multiple rounds",
            "Implement input validation",
            "Add computer AI with different strategies",
            "Create a tournament mode"
        ],
        code: `import random

def get_computer_choice():
    """Computer makes a random choice"""
    choices = ["rock", "paper", "scissors"]
    return random.choice(choices)

def determine_winner(player_choice, computer_choice):
    """Determine who wins the round"""
    if player_choice == computer_choice:
        return "tie"
    
    winning_combinations = {
        ("rock", "scissors"): "player",
        ("paper", "rock"): "player", 
        ("scissors", "paper"): "player",
        ("scissors", "rock"): "computer",
        ("rock", "paper"): "computer",
        ("paper", "scissors"): "computer"
    }
    
    return winning_combinations.get((player_choice, computer_choice), "invalid")

def display_choice_art(choice):
    """Display ASCII art for choices"""
    art = {
        "rock": """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
""",
        "paper": """
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
""",
        "scissors": """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""
    }
    return art.get(choice, "")

# Game setup
print("🪨📄✂️ Rock Paper Scissors Tournament! ✂️📄🪨")
print("First to 3 wins is the champion!")
print("\\nRules:")
print("- Rock beats Scissors")
print("- Paper beats Rock") 
print("- Scissors beats Paper")
print("-" * 40)

# Score tracking
player_score = 0
computer_score = 0
round_num = 1

# Main game loop
while player_score < 3 and computer_score < 3:
    print(f"\\n🏆 ROUND {round_num} 🏆")
    print(f"Score - You: {player_score} | Computer: {computer_score}")
    
    # Get player choice
    player_choice = input("\\nChoose rock, paper, or scissors: ").lower().strip()
    
    # Validate input
    if player_choice not in ["rock", "paper", "scissors"]:
        print("Invalid choice! Please choose rock, paper, or scissors.")
        continue
    
    # Get computer choice
    computer_choice = get_computer_choice()
    
    # Display choices with art
    print(f"\\nYou chose: {player_choice}")
    print(display_choice_art(player_choice))
    
    print(f"Computer chose: {computer_choice}")
    print(display_choice_art(computer_choice))
    
    # Determine winner
    result = determine_winner(player_choice, computer_choice)
    
    if result == "tie":
        print("🤝 It's a tie! No points awarded.")
    elif result == "player":
        print("🎉 You win this round!")
        player_score += 1
    else:
        print("🤖 Computer wins this round!")
        computer_score += 1
    
    round_num += 1

# Final results
print("\\n" + "="*50)
print("🏁 TOURNAMENT OVER! 🏁")
print(f"Final Score - You: {player_score} | Computer: {computer_score}")

if player_score > computer_score:
    print("🎊 Congratulations! You are the champion! 🎊")
else:
    print("🤖 Computer wins the tournament! Better luck next time!")

print("\\nThanks for playing!")`
    }
];

// Application state
let currentTab = 'home';
let currentLesson = null;
let currentProject = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeModals();
    renderLessons();
    renderProjects();
    updateProgress();
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const heroButtons = document.querySelectorAll('[data-tab]');
    
    [...navButtons, ...heroButtons].forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            if (tab) {
                switchTab(tab);
            }
        });
    });
    
    // Back buttons
    document.getElementById('back-to-lessons').addEventListener('click', () => {
        showLessonsGrid();
    });
    
    document.getElementById('back-to-projects').addEventListener('click', () => {
        showProjectsGrid();
    });
}

function switchTab(tab) {
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        }
    });
    
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`${tab}-tab`).classList.add('active');
    currentTab = tab;
    
    // Reset views when switching tabs
    if (tab === 'learn') {
        showLessonsGrid();
    } else if (tab === 'projects') {
        showProjectsGrid();
    }
}

// Lessons
function renderLessons() {
    const lessonsGrid = document.getElementById('lessons-grid');
    lessonsGrid.innerHTML = lessons.map(lesson => `
        <div class="lesson-card" onclick="showLesson('${lesson.id}')">
            <div class="lesson-header">
                <div class="lesson-title">${lesson.title}</div>
                <div class="progress-circle" style="--progress: ${lesson.progress}%">
                    ${lesson.progress}%
                </div>
            </div>
            <p>${lesson.description}</p>
            <div class="lesson-topics">
                ${lesson.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function showLesson(lessonId) {
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    currentLesson = lesson;
    const lessonsGrid = document.querySelector('.lessons-grid');
    const lessonDetail = document.getElementById('lesson-detail');
    
    lessonsGrid.style.display = 'none';
    lessonDetail.classList.remove('hidden');
    
    renderLessonContent(lesson);
}

function showLessonsGrid() {
    const lessonsGrid = document.querySelector('.lessons-grid');
    const lessonDetail = document.getElementById('lesson-detail');
    
    lessonsGrid.style.display = 'grid';
    lessonDetail.classList.add('hidden');
    currentLesson = null;
}

function renderLessonContent(lesson) {
    const lessonContent = document.querySelector('.lesson-content');
    
    let contentHtml = `
        <h1>${lesson.title} 
            <span class="progress-circle" style="--progress: ${lesson.progress}%">${lesson.progress}%</span>
        </h1>
        <p class="lesson-description">${lesson.description}</p>
    `;
    
    // Add lesson content based on the lesson
    if (lesson.content) {
        Object.values(lesson.content).forEach(section => {
            contentHtml += section;
        });
    }
    
    // Add practice section
    contentHtml += `
        <div class="exercise-box">
            <h4>🚀 Ready to Practice?</h4>
            <p>Try the interactive code editor to experiment with what you've learned!</p>
            <button class="btn btn--primary" onclick="openCodeEditor('')">Open Code Editor</button>
        </div>
    `;
    
    lessonContent.innerHTML = contentHtml;
}

// Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="showProject('${project.id}')">
            <div class="project-level ${project.level.toLowerCase()}">${project.level}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-meta">
                <span>⏱️ ${project.duration}</span>
                <span>🎯 ${project.skills.length} skills</span>
            </div>
            <div class="project-skills">
                ${project.skills.map(skill => `<span class="topic-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function showProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    currentProject = project;
    const projectsGrid = document.querySelector('.projects-grid');
    const projectDetail = document.getElementById('project-detail');
    
    projectsGrid.style.display = 'none';
    projectDetail.classList.remove('hidden');
    
    renderProjectContent(project);
}

function showProjectsGrid() {
    const projectsGrid = document.querySelector('.projects-grid');
    const projectDetail = document.getElementById('project-detail');
    
    projectsGrid.style.display = 'grid';
    projectDetail.classList.add('hidden');
    currentProject = null;
}

function renderProjectContent(project) {
    const projectContent = document.querySelector('.project-content');
    
    const contentHtml = `
        <div class="project-header">
            <h1>${project.title} <span class="project-level ${project.level.toLowerCase()}">${project.level}</span></h1>
            <div class="project-meta">
                <span>⏱️ ${project.duration}</span>
                <span>🎯 ${project.skills.join(', ')}</span>
            </div>
        </div>
        
        <div class="project-description">
            <p>${project.description}</p>
        </div>
        
        <h3>📋 Step-by-Step Instructions</h3>
        <ol class="step-list">
            ${project.steps.map(step => `<li class="step-item">${step}</li>`).join('')}
        </ol>
        
        <h3>💻 Complete Code</h3>
        <div class="code-example">${escapeHtml(project.code)}</div>
        <button class="btn btn--primary try-code-btn" onclick="openCodeEditor(\`${project.code.replace(/`/g, '\\`')}\`)">Try This Code!</button>
        
        <div class="exercise-box">
            <h4>🎯 Challenge Yourself!</h4>
            <p>Once you've got the basic project working, try these enhancements:</p>
            <ul>
                <li>Add more features to make it your own</li>
                <li>Change the colors or styling</li>
                <li>Add error handling for unexpected inputs</li>
                <li>Create variations of the project</li>
            </ul>
        </div>
    `;
    
    projectContent.innerHTML = contentHtml;
}

// Code Editor Modal
function initializeModals() {
    const modal = document.getElementById('code-modal');
    const closeBtn = document.querySelector('.close-modal');
    const runBtn = document.getElementById('run-code');
    const clearBtn = document.getElementById('clear-code');
    
    closeBtn.addEventListener('click', closeCodeEditor);
    runBtn.addEventListener('click', runCode);
    clearBtn.addEventListener('click', clearCode);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCodeEditor();
        }
    });
}

function openCodeEditor(code = '') {
    const modal = document.getElementById('code-modal');
    const codeInput = document.getElementById('code-input');
    
    codeInput.value = code;
    modal.classList.remove('hidden');
    modal.classList.add('active');
}

function closeCodeEditor() {
    const modal = document.getElementById('code-modal');
    modal.classList.remove('active');
    modal.classList.add('hidden');
}

function runCode() {
    const codeInput = document.getElementById('code-input');
    const outputDisplay = document.getElementById('output-display');
    const code = codeInput.value;
    
    // Simple Python-like code simulation
    try {
        const output = simulatePythonCode(code);
        outputDisplay.textContent = output;
        outputDisplay.style.color = '#a0aec0';
    } catch (error) {
        outputDisplay.textContent = `Error: ${error.message}`;
        outputDisplay.style.color = '#ff6b6b';
    }
}

function clearCode() {
    const codeInput = document.getElementById('code-input');
    const outputDisplay = document.getElementById('output-display');
    
    codeInput.value = '';
    outputDisplay.textContent = 'Click "Run Code" to see the output!';
    outputDisplay.style.color = '#a0aec0';
}

function simulatePythonCode(code) {
    // This is a simple simulation - in a real app you'd use a proper Python interpreter
    let output = '';
    const lines = code.split('\n');
    
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('print(') && line.endsWith(')')) {
            const content = line.slice(6, -1);
            try {
                // Simple evaluation for basic print statements
                let result = content;
                
                // Handle string literals
                if ((content.startsWith('"') && content.endsWith('"')) || 
                    (content.startsWith("'") && content.endsWith("'"))) {
                    result = content.slice(1, -1);
                }
                // Handle simple math
                else if (/^[\d\+\-\*\/\s\(\)]+$/.test(content)) {
                    result = eval(content);
                }
                // Handle f-strings (basic)
                else if (content.startsWith('f"') || content.startsWith("f'")) {
                    result = content.slice(2, -1);
                }
                
                output += result + '\n';
            } catch (e) {
                output += content + '\n';
            }
        }
        else if (line.startsWith('#') || line === '') {
            // Skip comments and empty lines
            continue;
        }
        else if (line.includes('=') && !line.includes('==')) {
            // Variable assignment (simplified)
            output += ''; // Silent assignment
        }
        else {
            // Other code - just acknowledge it ran
            if (line.trim()) {
                output += `[Code executed: ${line.substring(0, 30)}${line.length > 30 ? '...' : ''}]\n`;
            }
        }
    }
    
    return output || 'Code executed successfully!';
}

// Utility functions
function updateProgress() {
    const totalLessons = lessons.length;
    const completedLessons = lessons.filter(l => l.progress >= 80).length;
    const overallProgress = Math.round((completedLessons / totalLessons) * 100);
    
    document.getElementById('overall-progress').textContent = `Overall Progress: ${overallProgress}%`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add syntax highlighting to code examples
function highlightCode() {
    const codeBlocks = document.querySelectorAll('.code-example');
    codeBlocks.forEach(block => {
        let code = block.innerHTML;
        
        // Basic Python syntax highlighting
        code = code.replace(/\b(def|if|elif|else|for|while|import|from|class|return|print|input|len|range|in|and|or|not|True|False|None)\b/g, '<span class="keyword">$1</span>');
        code = code.replace(/(["'][^"']*["'])/g, '<span class="string">$1</span>');
        code = code.replace(/(#.*$)/gm, '<span class="comment">$1</span>');
        code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
        
        block.innerHTML = code;
    });
}