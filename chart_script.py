import plotly.graph_objects as go
import plotly.express as px
import json
import pandas as pd
import math

# Parse the data
data = {
  "sections": [
    {
      "title": "Data Types",
      "concepts": [
        {"type": "String", "example": "\"Hello World\"", "icon": "💬"},
        {"type": "Integer", "example": "42", "icon": "🔢"},
        {"type": "Float", "example": "3.14", "icon": "📊"},
        {"type": "Boolean", "example": "True/False", "icon": "✅"},
        {"type": "List", "example": "[1, 2, 3]", "icon": "📝"}
      ]
    },
    {
      "title": "Operators",
      "concepts": [
        {"type": "Addition", "example": "5 + 3 = 8", "icon": "➕"},
        {"type": "Subtraction", "example": "10 - 4 = 6", "icon": "➖"},
        {"type": "Multiplication", "example": "3 * 4 = 12", "icon": "✖️"},
        {"type": "Division", "example": "8 / 2 = 4", "icon": "➗"},
        {"type": "Equal", "example": "x == y", "icon": "⚖️"},
        {"type": "Not Equal", "example": "x != y", "icon": "❌"}
      ]
    },
    {
      "title": "Control Flow", 
      "concepts": [
        {"type": "If Statement", "example": "if age >= 13:", "icon": "🔀"},
        {"type": "For Loop", "example": "for i in range(5):", "icon": "🔄"},
        {"type": "While Loop", "example": "while count < 10:", "icon": "🔁"},
        {"type": "Function", "example": "def say_hello():", "icon": "📦"}
      ]
    },
    {
      "title": "Examples",
      "concepts": [
        {"type": "Variable", "example": "name = \"Alice\"", "icon": "📝"},
        {"type": "Print", "example": "print(\"Hello!\")", "icon": "📢"},
        {"type": "Input", "example": "age = input(\"Age?\")", "icon": "⌨️"},
        {"type": "List Access", "example": "colors[0]", "icon": "🎯"}
      ]
    }
  ]
}

# Bright, kid-friendly colors
colors = ['#1FB8CD', '#FFC185', '#ECEBD5', '#5D878F']

# Create the figure with subplots-like layout using rectangles and annotations
fig = go.Figure()

# Layout parameters
section_width = 3.5
section_height = 2.5
gap = 0.5

# Create grid positions for 2x2 layout
positions = [
    (0, section_height + gap),  # Top left - Data Types
    (section_width + gap, section_height + gap),  # Top right - Operators
    (0, 0),  # Bottom left - Control Flow
    (section_width + gap, 0)  # Bottom right - Examples
]

all_data = []

for section_idx, section in enumerate(data['sections']):
    section_x, section_y = positions[section_idx]
    section_color = colors[section_idx]
    
    # Add section background rectangle
    fig.add_shape(
        type="rect",
        x0=section_x, y0=section_y,
        x1=section_x + section_width, y1=section_y + section_height,
        fillcolor=section_color,
        opacity=0.3,
        line=dict(color=section_color, width=3)
    )
    
    # Add section title
    fig.add_annotation(
        x=section_x + section_width/2,
        y=section_y + section_height - 0.2,
        text=f"<b>{section['title']}</b>",
        showarrow=False,
        font=dict(size=16, color=section_color),
        bgcolor='white',
        bordercolor=section_color,
        borderwidth=2
    )
    
    # Position concepts within section
    concepts_per_row = 3
    concept_size = 0.4
    start_x = section_x + 0.3
    start_y = section_y + section_height - 0.8
    
    for j, concept in enumerate(section['concepts']):
        row = j // concepts_per_row
        col = j % concepts_per_row
        
        concept_x = start_x + col * 1.0
        concept_y = start_y - row * 0.8
        
        # Truncate text to meet character limits
        concept_type = concept['type'][:15]
        concept_example = concept['example'][:15]
        
        # Add concept circle
        fig.add_trace(go.Scatter(
            x=[concept_x],
            y=[concept_y],
            mode='markers+text',
            marker=dict(
                size=80,
                color=section_color,
                line=dict(width=3, color='white'),
                opacity=0.9
            ),
            text=concept['icon'],
            textposition='middle center',
            textfont=dict(size=20),
            hovertemplate=f'<b>{concept_type}</b><br>' +
                         f'Example: {concept_example}<extra></extra>',
            name=concept_type,
            showlegend=False
        ))
        
        # Add concept label below circle
        fig.add_annotation(
            x=concept_x,
            y=concept_y - 0.3,
            text=f"<b>{concept_type}</b>",
            showarrow=False,
            font=dict(size=10, color='black'),
            bgcolor='white',
            bordercolor=section_color,
            borderwidth=1
        )
        
        # Add example below label
        fig.add_annotation(
            x=concept_x,
            y=concept_y - 0.5,
            text=concept_example,
            showarrow=False,
            font=dict(size=8, color='gray'),
            bgcolor='white'
        )

# Update layout
fig.update_layout(
    title='Python Guide for Kids',
    xaxis=dict(
        showgrid=False,
        showticklabels=False,
        zeroline=False,
        range=[-0.5, section_width*2 + gap + 0.5]
    ),
    yaxis=dict(
        showgrid=False, 
        showticklabels=False,
        zeroline=False,
        range=[-0.5, section_height*2 + gap + 0.5]
    ),
    plot_bgcolor='white',
    paper_bgcolor='#f8f9fa'
)

# Save the chart
fig.write_image('python_guide_kids.png')