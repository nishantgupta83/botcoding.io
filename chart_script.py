import plotly.graph_objects as go
import json

# Data for the learning progression chart
data = {
    "modules": [
        {"name": "Python Basics", "progress": 80, "topics": 4, "difficulty": "Beginner"},
        {"name": "Making Decisions", "progress": 60, "topics": 4, "difficulty": "Beginner"}, 
        {"name": "Repeating Actions", "progress": 40, "topics": 4, "difficulty": "Intermediate"},
        {"name": "Storing Data", "progress": 20, "topics": 4, "difficulty": "Intermediate"},
        {"name": "Creating Functions", "progress": 0, "topics": 4, "difficulty": "Advanced"}
    ]
}

# Define colors based on difficulty levels
difficulty_colors = {
    "Beginner": "#58D68D",    # Green for basics
    "Intermediate": "#5DADE2", # Blue for intermediate  
    "Advanced": "#F8C471"     # Orange for advanced
}

# Extract data for plotting
modules = [module["name"] for module in data["modules"]]
progress = [module["progress"] for module in data["modules"]]
topics = [module["topics"] for module in data["modules"]]
difficulty = [module["difficulty"] for module in data["modules"]]

# Map colors to difficulty levels
colors = [difficulty_colors[diff] for diff in difficulty]

# Create horizontal bar chart
fig = go.Figure()

# Add main progress bars
fig.add_trace(go.Bar(
    y=modules,
    x=progress,
    orientation='h',
    marker=dict(color=colors),
    text=[f'{p}%' for p in progress],
    textposition='inside',
    textfont=dict(size=12, color='white'),
    hovertemplate='<b>%{y}</b><br>Progress: %{x}%<br>Topics: %{customdata}<br>Level: %{meta}<extra></extra>',
    customdata=[f'{t} topics' for t in topics],
    meta=difficulty,
    cliponaxis=False,
    name='Progress'
))

# Add topic indicators (small circles) for each module
for i, (module, topic_count) in enumerate(zip(modules, topics)):
    # Calculate positions for topic dots
    for j in range(topic_count):
        fig.add_trace(go.Scatter(
            x=[5 + j * 8],  # Spread dots horizontally
            y=[module],
            mode='markers',
            marker=dict(
                size=8,
                color='white',
                line=dict(color='gray', width=1)
            ),
            showlegend=False,
            hoverinfo='skip',
            cliponaxis=False
        ))

# Update layout with appropriate order
fig.update_layout(
    title='CodeBot Academy Learning Progress',
    xaxis_title='Progress (%)',
    yaxis_title='Modules',
    xaxis=dict(range=[0, 100], ticksuffix='%'),
    yaxis=dict(categoryorder='array', categoryarray=modules[::-1]),
    showlegend=False
)

# Save the chart
fig.write_image('learning_progression_chart.png')