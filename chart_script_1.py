import plotly.graph_objects as go
import plotly.io as pio

# Data from the provided JSON in the correct bottom-to-top order
modules_ordered = [
    {"name": "Creating Functions", "progress": 0},
    {"name": "Storing Data", "progress": 20},
    {"name": "Repeating Actions", "progress": 40},
    {"name": "Making Decisions", "progress": 60},
    {"name": "Python Basics", "progress": 80}
]

# Extract data 
progress_values = [module["progress"] for module in modules_ordered]

# Abbreviate module names to fit 15 character limit
abbreviated_names = [
    "Creating Func",
    "Storing Data", 
    "Repeating Act",
    "Making Decis",
    "Python Basics"
]

# Create horizontal bar chart
fig = go.Figure(data=[
    go.Bar(
        x=progress_values,
        y=abbreviated_names,
        orientation='h',
        marker_color='#1FB8CD',  # Using brand color
        text=[f'{val}%' for val in progress_values],
        textposition='inside'
    )
])

# Update layout
fig.update_layout(
    title='CodeBot Academy - Python Progress',
    xaxis_title='Progress (%)',
    yaxis_title='Modules',
    xaxis=dict(range=[0, 100], showgrid=True),
    yaxis=dict(showgrid=True)
)

# Save the chart
fig.write_image('python_learning_progress.png')