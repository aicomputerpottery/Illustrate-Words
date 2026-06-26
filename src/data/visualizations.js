// ============================================================================
// VisualCraft — Data Layer
// Single source of truth for all visualization types, palettes, and styles.
// ============================================================================

export const CATEGORIES = [
  // --------------------------------------------------------------------------
  // 1. MINDMAP
  // --------------------------------------------------------------------------
  {
    id: "mindmap",
    name: "Mindmap",
    icon: "🧠",
    description: "Radial and tree-based idea organization",
    types: [
      {
        id: "central-node-map",
        name: "Central Node Map",
        description: "Single central topic with branches radiating outward",
        promptTemplate: "Create a professional central node mindmap visualization. The layout should feature a single prominent central topic node positioned at the geometric center of the canvas, with 5 to 8 main branch nodes radiating outward symmetrically in a balanced radial arrangement. Each main branch should split into 2 to 4 sub-branches creating a clear visual hierarchy. Use smooth curved lines to connect parent nodes to child nodes, with line thickness decreasing slightly as the hierarchy descends. The central node should be the largest element, with progressively smaller text and node sizes for outer branches. Apply consistent typography throughout, using bold weight for the central topic, semi-bold for primary branches, and regular weight for sub-branches. Maintain generous whitespace between nodes to avoid visual clutter. Use a clean white or very light background to ensure maximum readability. The overall feel should be modern, professional, and instantly scannable. Style this for use in a business presentation or strategy document. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "tree-mindmap",
        name: "Tree Mindmap",
        description: "Hierarchical top-down tree structure",
        promptTemplate: "Create a professional hierarchical tree mindmap with a clear top-down structure. Place the root concept at the top center of the canvas, then branch downward in successive levels - typically 3 to 4 levels deep. Each parent node should split into 2 to 5 child nodes, with all children at the same level aligned horizontally. Use straight lines with subtle elbow connectors (right angles softened with rounded corners) to link parent and child nodes. The visual flow should read naturally from top to bottom. Apply size hierarchy: largest text for the root, medium for second-level branches, smaller for leaf nodes. Use white background with clear contrast for text. Include subtle background tints to differentiate major branch families if it aids clarity. Maintain consistent horizontal spacing between sibling nodes and consistent vertical spacing between levels. The overall aesthetic should be clean, organized, and professional - suitable for academic, business, or strategic planning contexts. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "concept-web",
        name: "Concept Web",
        description: "Interconnected nodes showing complex relationships",
        promptTemplate: "Create a concept web visualization where multiple interconnected nodes show complex relationships between ideas. Unlike a traditional mindmap, this layout should not have a single dominant center - instead, position 8 to 15 concept nodes across the canvas in an organic, non-hierarchical arrangement. Connect related concepts with lines, allowing many-to-many relationships where any node can connect to several others. Use varying line styles or thicknesses to indicate relationship strength: thick solid lines for strong connections, thin or dashed lines for weaker associations. Group related concept clusters using subtle background shading or color regions. Each node should be a circle or rounded rectangle with concise text inside. Apply clean modern typography. Use a sophisticated color palette to differentiate concept categories. The overall composition should feel exploratory and intellectual - like a knowledge map. White or very light background. Include space around each node so the web does not feel cramped. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "fishbone-mindmap",
        name: "Fishbone Mindmap",
        description: "Cause and effect branches from a central spine",
        promptTemplate: "Create a fishbone (Ishikawa-style) mindmap visualization. Draw a horizontal central spine line running left to right across the canvas, with the main topic positioned in a labeled box at the right end of the spine, styled as the fish head. From the spine, draw 4 to 6 diagonal branches angling upward and downward, alternating sides like fish bones. Each diagonal branch represents a major category and should have its category label at the outer end. From each main bone, draw smaller perpendicular sub-bones with detail items. Use clean straight lines throughout. Maintain visual symmetry between top and bottom bones. Apply professional typography with bold labels for categories. Use a white background with strong line contrast. Optionally tint each bone in a different muted color to differentiate categories. The overall composition should be balanced, technical, and analytical - suitable for root cause analysis or strategic categorization. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 2. PROCESS
  // --------------------------------------------------------------------------
  {
    id: "process",
    name: "Process",
    icon: "⚙️",
    description: "Sequential workflows and procedures",
    types: [
      {
        id: "linear-flowchart",
        name: "Linear Flowchart",
        description: "Sequential steps with decision points",
        promptTemplate: "Create a professional linear flowchart visualization with clear sequential steps. Lay out the process from top to bottom (or left to right if it suits the content better), connecting each step with arrows showing the direction of flow. Use rounded rectangles for process steps and diamond shapes for decision points (yes/no branches). Decision diamonds should clearly label both outgoing paths. Use a consistent color for normal process steps and a contrasting accent color for decision points and key milestones. Connect all elements with clean arrows - solid lines with arrowheads pointing in the flow direction. Apply uniform spacing between elements. Use bold typography for step labels with concise wording. Add a clear start point (often rounded oval) and end point at the appropriate terminals. Use a white background with subtle drop shadows on shapes to add depth. The overall result should be technical, professional, and unambiguous - readable by someone unfamiliar with the process. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "swimlane-diagram",
        name: "Swimlane Diagram",
        description: "Parallel lanes showing who does what",
        promptTemplate: "Create a swimlane diagram showing parallel workflows divided by responsibility or role. Draw horizontal lanes (or vertical columns) stretching across the canvas, with each lane labeled at the left edge to indicate which person, team, or system owns the steps within that lane. Inside each lane, place the relevant process steps using consistent rounded rectangles, then connect steps with arrows that flow both within lanes and across lanes to show handoffs. Cross-lane arrows are critical - they reveal where work transitions between actors. Use a different subtle background tint for each lane to visually separate them. Include lane dividers as thin horizontal lines. Apply a consistent color for steps within each lane that picks up that lane's tint. Use clear bold typography for lane labels. Maintain alignment so steps representing the same time period stay vertically aligned across lanes. White overall background. The result should be technical, organized, and clearly show responsibility allocation. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "circular-process",
        name: "Circular Process",
        description: "Cyclical steps that loop continuously",
        promptTemplate: "Create a circular process diagram showing a cyclical workflow where steps loop back to the beginning. Arrange 4 to 8 process steps as boxes or labeled circles positioned evenly around the circumference of a large circle. Use curved arrows along the circle's edge to connect each step to the next, all flowing in the same rotational direction (typically clockwise). Place a brief title or central concept in the middle of the circle, often as a smaller circle or hexagon. Apply consistent step styling with a clean professional look. Use one cohesive color palette across all steps. Make arrows visible but not overpowering - they should suggest continuous flow without dominating the steps. Apply medium-weight typography for step labels, ensuring text inside circular elements is readable. Maintain perfect rotational symmetry. White background. The composition should communicate continuity and iteration - suitable for cycles like PDCA, design thinking, agile sprints, or any ongoing process. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "funnel-chart",
        name: "Funnel Chart",
        description: "Stages narrowing to an outcome",
        promptTemplate: "Create a funnel chart visualization showing stages that progressively narrow from top to bottom. Draw the funnel as a stack of trapezoidal segments, with the widest segment at the top and each subsequent segment becoming narrower until the bottom segment is the smallest. Each segment represents one stage of the funnel and should be labeled with the stage name and the value or percentage at that stage. The width of each segment should proportionally represent the value - larger numbers get wider segments. Use a gradient color scheme or a sequence of related colors that flow naturally from top to bottom, often going from light to dark or from warm to cool. Place stage labels and values directly inside each segment using high-contrast typography. Optionally include side labels with conversion percentages between stages. Use a white background. The overall composition should be balanced and clean, suitable for marketing funnels, sales pipelines, or any progressive narrowing process. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "user-journey-map",
        name: "User Journey Map",
        description: "Steps a user takes with emotions and touchpoints",
        promptTemplate: "Create a horizontal user journey map showing a user's experience across multiple stages. Lay out the journey from left to right as a series of phase columns - typically 4 to 7 phases representing chronological stages of the user's interaction. For each phase, include rows showing: the user's action at that stage, their thoughts or quotes in a callout style, their emotional state (use small face icons or an emotion line that rises and falls across the journey), touchpoints with the product or service, and pain points or opportunities. The emotional curve should be a prominent line graph traversing the top of the diagram, dipping during frustrating moments and peaking during positive ones. Use a soft, approachable color palette - this is a humanistic visualization, not purely technical. Apply clear sectioning between phases with vertical divider lines. Use empathetic, readable typography. White background with subtle row tints. The overall feel should be insightful, human-centered, and suitable for UX research or product strategy documentation. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 3. DATA
  // --------------------------------------------------------------------------
  {
    id: "data",
    name: "Data",
    icon: "📊",
    description: "Charts and quantitative visualizations",
    types: [
      {
        id: "bar-chart",
        name: "Bar Chart",
        description: "Vertical bars comparing categories",
        promptTemplate: "Create a professional vertical bar chart comparing values across multiple categories. Position bars along a horizontal x-axis with category labels below each bar, and values on a vertical y-axis with clean gridlines. Bars should be of uniform width with consistent spacing between them. Use a single primary color for all bars unless distinguishing categories is important, in which case use a cohesive palette. The tallest bar should clearly stand out as the maximum. Include a chart title at the top, axis labels, and value labels above each bar for quick reading. Use clean modern typography with appropriate font weights. Apply subtle horizontal gridlines (thin and light gray) to aid value reading without overwhelming the bars. Add a clear y-axis scale with rounded round-number intervals. Use a white background. Optional: include a brief legend if multiple data series are present. The overall composition should be clean, balanced, data-forward, and instantly readable - suitable for reports, presentations, and dashboards. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "horizontal-bar-chart",
        name: "Horizontal Bar Chart",
        description: "Horizontal bars ideal for long category labels",
        promptTemplate: "Create a horizontal bar chart where bars extend from left to right with category labels along the y-axis. This format is ideal when category names are long or when there are many categories that would crowd a vertical layout. Sort bars by value in descending order from top to bottom (longest bar at the top) unless chronological or alphabetical ordering is more appropriate to the content. Use a single accent color for bars, with the highest-value bar optionally emphasized in a brighter shade. Include the value at the end of each bar (just outside or just inside, depending on length) for fast scanning. Add a clean x-axis with rounded scale intervals and subtle vertical gridlines. Apply clear typography with category labels in medium weight and values in slightly lighter weight or smaller size. White background. Maintain consistent bar height and consistent gap spacing between bars. The composition should be elegant, scannable, and professional - suitable for rankings, comparisons, and analyses where category names need room to breathe. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "grouped-bar-chart",
        name: "Grouped Bar Chart",
        description: "Multiple bars per category for multi-series comparison",
        promptTemplate: "Create a grouped bar chart showing multiple data series across categories. For each category on the x-axis, display a cluster of 2 to 4 bars side by side, with each bar in the cluster representing a different data series. Use a distinct color for each series and keep those colors consistent across all clusters. Include a clear legend at the top or right showing what each color represents. Add slight spacing between groups so clusters are visually distinct, with bars within a cluster touching or nearly touching. Place category labels centered under each cluster. Use a clean vertical y-axis with gridlines and rounded scale intervals. Apply professional typography with the chart title at top, axis labels, and an optional source note at the bottom. Use a cohesive color palette - typically 3 or 4 harmonious colors that read clearly when adjacent. White background. The result should be a polished comparison visualization suitable for showing how multiple metrics evolve across categories - perfect for business dashboards and analytical reports. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "stacked-bar-chart",
        name: "Stacked Bar Chart",
        description: "Bars divided into segments showing composition",
        promptTemplate: "Create a stacked bar chart showing the composition of values across multiple categories. Each bar in the chart is divided into colored segments stacked on top of one another, with each segment representing a sub-component or sub-category that adds up to the total. Use a different color for each component, kept consistent across all bars - this is critical for readability. Include a clear legend explaining what each color represents. Optionally include the total value above each bar and the segment values inside each segment when space permits. Sort bars meaningfully (by total descending, or chronologically, depending on context). Use a cohesive sequential or qualitative color palette. Apply clean typography for axis labels, segment labels, and the chart title. Include axis gridlines that read subtly behind the bars. White background. The chart should clearly communicate both totals (overall bar height) and proportions (segment sizes within each bar). Suitable for budget breakdowns, demographic distributions, and any composition-over-time analysis. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "line-chart",
        name: "Line Chart",
        description: "Trends over time with connected data points",
        promptTemplate: "Create a clean line chart showing trends over time. Plot data points along the x-axis (typically time: dates, months, quarters, or years) and connect them with smooth or straight lines representing the trend. If multiple data series are shown, use distinct colors for each line and include a clear legend. Add data point markers (small circles or dots) at each measured value, with the option to label key inflection points or maximum/minimum values directly. Use clean modern typography for axis labels, title, and legend. Apply subtle horizontal gridlines to aid value reading. Use a y-axis with rounded scale intervals starting at a meaningful baseline. Style the lines with appropriate weight - thick enough to be prominent but not heavy. Use a cohesive color palette, often with one primary color for the main series and supporting colors for comparison series. White background with light gray gridlines. Include a chart title and axis labels for context. The overall composition should be analytical, professional, and easy to read at a glance - suitable for dashboards and reports. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "area-chart",
        name: "Area Chart",
        description: "Line chart with filled area below the line",
        promptTemplate: "Create an area chart showing values over time with a filled region beneath the line. The visualization should display the line trend prominently while the area underneath is shaded with a semi-transparent color that hints at volume or cumulative value. Use a single rich color or a gradient that fades from the line color to nearly transparent at the baseline. If multiple series are shown, use stacked areas with different colors, or overlapping semi-transparent areas if comparison is more important than total. Include data point markers at each measurement for precision. Apply a clean y-axis with gridlines and rounded scale intervals. Use professional typography for the chart title, axis labels, and any annotations. Mark significant events or inflection points with vertical reference lines or callouts when relevant. White background. Maintain a balanced aspect ratio - typically wider than tall. Include a brief legend if multiple series are present. The overall feel should be analytical yet aesthetically rich - suitable for revenue trends, audience growth, usage patterns, and similar continuous data over time. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "pie-chart",
        name: "Pie Chart",
        description: "Proportional slices showing parts of a whole",
        promptTemplate: "Create a pie chart showing proportional parts of a whole. The circle should be divided into wedge-shaped slices, each representing a category, with slice size proportional to that category's value. Limit to 5 to 7 slices maximum for readability - if there are more, consider grouping smaller items into an Other category. Use a harmonious, distinguishable color palette where adjacent slices have visibly different colors. Label each slice with both the category name and its percentage value, either inside the slice (if it's large enough) or outside with a connecting line for small slices. Sort slices clockwise starting from the 12 o'clock position, typically from largest to smallest. Include a clear title above the chart. Apply professional typography with adequate sizing for slice labels. Use a white background. Optionally separate the largest slice from the pie (slight pull-out) for emphasis. Add a thin outline around each slice in white to create clean separation. The result should be elegant, instantly comprehensible, and suitable for executive summaries and dashboards. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "donut-chart",
        name: "Donut Chart",
        description: "Pie chart with a hollow center for cleaner readability",
        promptTemplate: "Create a donut chart - essentially a pie chart with the center cut out to form a ring. Divide the ring into proportional segments based on the data values, using a harmonious color palette where each segment is clearly distinguishable from its neighbors. Limit to 4 to 7 segments for optimal readability. The hollow center is valuable real estate - use it to display a total value, a primary key metric, or a concise label that summarizes what the chart represents. Apply a slightly thicker ring than a thin donut for a modern feel. Label each segment with the category name and percentage, placed either inside the ring (if space allows) or outside with subtle leader lines. Sort segments clockwise from largest to smallest, starting at the 12 o'clock position. Use clean modern typography. Add thin white separators between segments for crisp definition. White background. The overall composition should feel modern, premium, and dashboard-ready - more visually sophisticated than a traditional pie chart. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "scatter-plot",
        name: "Scatter Plot",
        description: "Dots showing correlation between two variables",
        promptTemplate: "Create a scatter plot showing the relationship between two numeric variables. Plot data points as dots on a 2D plane with the x-axis representing one variable and the y-axis representing another. Each dot represents a single data observation. Use consistent dot size and a single primary color, unless categorizing dots by a third variable in which case use distinct colors with a legend. Include both x-axis and y-axis with clear labels, units, and rounded scale intervals. Add subtle gridlines to aid in reading individual dot positions. If a clear correlation exists, optionally include a trend line (regression line) running through the cluster with a different color or dashed style. Label notable outliers if relevant. Apply clean professional typography for the chart title, axis labels, and any annotations. White background with light gridlines. Maintain a balanced canvas with adequate space around the data cloud. The composition should be analytical, scientific, and clean - suitable for revealing correlations, distributions, and statistical relationships. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "bubble-chart",
        name: "Bubble Chart",
        description: "Scatter plot with sized bubbles for a third variable",
        promptTemplate: "Create a bubble chart - a scatter plot where each data point is rendered as a circle with the bubble size representing a third quantitative variable. Plot bubbles on an x-y plane with the x-axis representing one variable and the y-axis representing another. The radius or area of each bubble encodes the third variable - typically using area for accuracy. Use a cohesive color palette where bubbles can either be a single color with varying transparency (so overlaps remain visible) or color-coded by an additional categorical variable. Include axis labels with units and rounded scale intervals. Add a legend explaining what bubble size and color represent. Label important bubbles directly with text inside or beside the bubble. Use professional typography. Maintain enough whitespace so bubbles do not crowd one another, but keep overlaps visible to convey distribution. Subtle gridlines aid reading. White background. The overall composition should be sophisticated and data-rich - suitable for portfolio analysis, market positioning, or any visualization showing three quantitative dimensions at once. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "waterfall-chart",
        name: "Waterfall Chart",
        description: "Running total showing positive and negative changes",
        promptTemplate: "Create a waterfall chart showing the cumulative effect of sequential positive and negative changes leading from a starting value to an ending value. Display a sequence of vertical bars: the first bar shows the starting total, intermediate floating bars show each change (positive bars shown in one color, typically green, and negative bars in another, typically red), and a final bar shows the ending total. Connect bars with thin horizontal dotted lines showing the running total level. Each bar should be labeled with its value, including a plus or minus sign for changes. Include category labels under each bar. Use a clean professional palette - subtle greens for gains, subtle reds for losses, a neutral color (often dark blue or gray) for start and end totals. Apply consistent bar width with appropriate spacing. Use clean typography with values prominently displayed. Add a y-axis with rounded scale intervals and subtle gridlines. White background. The overall composition should be analytical and accountant-friendly - suitable for financial bridges, budget variance analysis, and any cumulative breakdown narrative. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "heatmap",
        name: "Heatmap",
        description: "Grid where cell color intensity shows values",
        promptTemplate: "Create a heatmap visualization showing values across a two-dimensional grid using color intensity to encode magnitude. Lay out the data as a matrix with row labels on the left and column labels along the top or bottom. Each cell in the grid is filled with a color whose intensity corresponds to its value - typically using a single-hue color scale (light to dark blue for example) for sequential data, or a diverging two-hue scale (red to white to blue) for data with a meaningful center point. Optionally display the numeric value inside each cell using contrasting text color (dark text on light cells, white text on dark cells). Include a color legend bar showing the scale from minimum to maximum. Apply clear typography for row and column labels. Maintain consistent cell sizing across the entire grid. Add thin white or light gray borders between cells for crisp definition. White overall background outside the grid. The composition should be data-dense yet readable - suitable for correlation matrices, calendar visualizations, performance dashboards, and any pattern-discovery analysis. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "treemap",
        name: "Treemap",
        description: "Nested rectangles sized proportionally by value",
        promptTemplate: "Create a treemap visualization showing hierarchical proportional data as nested rectangles. Divide the canvas into rectangles, with each rectangle's area proportional to its value. Nest sub-rectangles within parent rectangles to show hierarchical relationships - main categories are large rectangles and their sub-items are smaller rectangles inside. Use a cohesive color palette where related items share color family or where color intensity indicates a secondary variable like growth rate or status. Label each rectangle with its name and value, with text sizing scaled to fit the rectangle (large labels in big rectangles, smaller text in smaller ones, omitted text in the smallest if needed). Use clean professional typography. Add thin white borders between rectangles to maintain clear separation. Apply contrast-aware text colors so labels are readable against any background color. The largest rectangle typically goes in the top-left corner, with rectangles arranged so larger ones are toward the top and left, smaller toward the bottom and right. White background outside the treemap. The composition should be information-dense yet elegant - suitable for portfolio breakdowns, market segmentation, and storage usage. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "sankey-diagram",
        name: "Sankey Diagram",
        description: "Flow visualization with proportional width connections",
        promptTemplate: "Create a Sankey diagram showing flows between stages or categories using bands of varying width to represent quantity. The visualization has nodes (vertical bars) representing sources, intermediates, and destinations, connected by flowing curved bands whose width is proportional to the flow value. Position nodes in columns from left to right indicating the flow direction. Use a sophisticated color palette where each source or destination has its own hue, and flow bands inherit a translucent blend of source and destination colors. The bands curve smoothly between nodes. Label each node with its name and total value (sum of inflows or outflows). Label major flow bands directly with the flow value when space permits. Apply clean professional typography. Use semi-transparent flow bands so overlaps are visible and the structure remains legible. Maintain adequate node spacing so the diagram does not feel cramped. White background. The overall composition should be visually striking and analytically rich - suitable for energy flows, customer journey conversion, budget allocation, or any quantitative flow narrative. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 4. TIMELINES
  // --------------------------------------------------------------------------
  {
    id: "timelines",
    name: "Timelines",
    icon: "📅",
    description: "Chronological events and schedules",
    types: [
      {
        id: "horizontal-timeline",
        name: "Horizontal Timeline",
        description: "Events arranged left to right along a horizontal axis",
        promptTemplate: "Create a horizontal timeline visualization showing events arranged chronologically from left to right. Draw a central horizontal line spanning the full width of the canvas, with date markers positioned along the line at appropriate intervals. Each event appears as a labeled marker (circle, square, or diamond) on the timeline with the event title and date displayed in callout boxes alternating above and below the line. Connect each event marker to its callout box with a thin line if the callout is offset. Use a cohesive color palette - typically one primary color for the timeline and event markers, with subtle differentiation for milestone vs minor events through size or color saturation. Apply clean typography with the event title in bold and date in lighter weight. Include a chart title at the top. Maintain visual rhythm with consistent spacing patterns. White background. Optionally add small icons next to event markers to indicate event type. The composition should feel modern, organized, and easy to scan - suitable for company histories, project timelines, biographical events, and historical sequences. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "vertical-timeline",
        name: "Vertical Timeline",
        description: "Events stacked vertically reading top to bottom",
        promptTemplate: "Create a vertical timeline visualization with events flowing from top to bottom. Draw a central vertical line down the middle of the canvas, with event markers (circles, dots, or diamonds) positioned along it at appropriate intervals. Each event has a content card on alternating sides of the line - one event card on the left, the next on the right, and so on - creating a balanced zigzag pattern. Connect each event marker to its content card with a short horizontal line. Each card contains the date, event title, and a short description. Use clean modern typography with the date in a subtle accent color, title in bold, and description in regular weight. Use a cohesive color palette - typically one primary color for the line and markers, with neutral backgrounds for cards. Add subtle borders or shadows to the cards for definition. Maintain consistent vertical spacing between events. White overall background. The composition should be elegant and narrative-friendly - suitable for personal stories, project histories, milestone tracking, and documentation. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "milestone-timeline",
        name: "Milestone Timeline",
        description: "Key achievements marked along a journey line",
        promptTemplate: "Create a milestone timeline emphasizing major achievements or key turning points along a journey. Draw a clean horizontal or gently curved line representing the passage of time, with prominent milestone markers placed at significant moments. Each milestone marker should be visually distinct - using stars, large circles, flags, or trophy icons - and clearly larger than typical timeline events. Include the milestone name, date, and a brief description of its significance. Use a sophisticated color palette with a primary accent color for milestone markers and a more muted color for the timeline line itself. Apply hierarchical typography - large bold milestone titles, smaller dates, and concise description text. Consider numbering milestones if they represent stages of progress. Use a white or very light background. Add subtle visual treatments like glowing effects or thin connecting lines that emphasize the importance of each milestone. Maintain balanced spacing across the timeline. The composition should feel celebratory yet professional - suitable for company achievements, personal accomplishments, project phases, and product launch histories. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "gantt-chart",
        name: "Gantt Chart",
        description: "Project tasks with duration bars across time",
        promptTemplate: "Create a Gantt chart showing project tasks with duration bars across a time axis. List tasks vertically on the left side, each with a row, and use a horizontal time axis (days, weeks, or months) at the top. For each task, draw a horizontal bar spanning from its start date to its end date. Use color coding to differentiate task categories, phases, or status - completed tasks in one color, in-progress in another, upcoming in a third. Show dependencies between tasks using thin arrows connecting the end of one bar to the start of another. Highlight critical path tasks with a distinct color or border. Include a vertical line marker indicating today's date if relevant. Apply clean professional typography for task names, dates, and any duration or percentage labels on bars. Add subtle horizontal alternating row tints to aid in tracking tasks across the time axis. White background. Maintain clear gridlines for time intervals. The composition should be technical, well-organized, and project-management friendly - suitable for project plans, product roadmaps, and any schedule-driven work. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "roadmap",
        name: "Roadmap",
        description: "Future plans organized by quarter or phase",
        promptTemplate: "Create a strategic roadmap visualization showing planned initiatives organized by time period (typically quarters or phases). Lay out the canvas with horizontal lanes representing different workstreams (such as product, marketing, engineering) and vertical columns representing time periods (Q1, Q2, Q3, Q4 or Phase 1, Phase 2, etc.). Within each cell, place initiative cards as rounded rectangles labeled with the initiative name and any key details. Use color coding to indicate status (planned, in progress, complete) or priority. Some initiatives may span multiple time periods - represent these as wider cards that bridge columns. Add a clear header row with time period labels and a left column with workstream labels. Apply clean modern typography with workstream and time labels in bold and initiative details in regular weight. Use a cohesive color palette with subtle background tints differentiating workstream lanes. White overall background. Optionally include a small legend explaining color meanings. The composition should feel strategic, forward-looking, and presentation-ready - suitable for product roadmaps, marketing plans, and executive briefings. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 5. COMPARISON
  // --------------------------------------------------------------------------
  {
    id: "comparison",
    name: "Comparison",
    icon: "⚖️",
    description: "Side-by-side analysis of options",
    types: [
      {
        id: "side-by-side-table",
        name: "Side by Side Table",
        description: "Rows comparing two or more options across criteria",
        promptTemplate: "Create a clean comparison table showing two or more options across multiple evaluation criteria. Lay out the table with options as columns (each option getting its own column with a header) and criteria as rows (each criterion getting its own row with a left-side label). Each cell shows the value, feature presence, or evaluation for that option-criterion intersection. Use checkmarks, X marks, or qualitative ratings (such as star ratings) for binary or graded criteria. Use clean typography with column headers in bold (and optionally highlighted with a colored background bar). Apply alternating row tints (subtle, almost imperceptible) to aid horizontal reading. Use a primary accent color to highlight the recommended or winning option's column header. Add a small icon or summary score row at the top of each column for visual identification. White background with thin horizontal dividers between rows. Maintain consistent cell padding throughout. The composition should be authoritative, professional, and decision-supporting - suitable for product comparisons, vendor evaluations, plan selection, and any analytical comparison. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "pros-cons-list",
        name: "Pros and Cons List",
        description: "Two-column layout of advantages and disadvantages",
        promptTemplate: "Create a pros and cons comparison visualization. Divide the canvas into two equal vertical columns side by side, with the left column labeled Pros (or Advantages) and the right column labeled Cons (or Disadvantages). Use a positive green tint or color theme for the Pros column and a cautious red or warm tint for the Cons column. List each pro or con as a bullet point or card, with a checkmark icon next to pros and an X or warning icon next to cons. Each item should be a concise phrase or sentence. Optionally include short explanatory text under each main point. Apply clean modern typography with bold for the column headers and main points, regular weight for descriptions. Use a clear divider line or gap between the two columns. Maintain consistent spacing between items. The icons should be small but immediately recognizable. Use a white background. Optionally add a summary verdict at the bottom of the page or under each column. The composition should be balanced, clear, and decision-friendly - suitable for evaluation documents, weighing options, and decision frameworks. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "vs-diagram",
        name: "VS Diagram",
        description: "Head-to-head comparison of two things",
        promptTemplate: "Create a head-to-head VS (versus) comparison visualization. Split the canvas into two halves, separated by a bold VS label in the center, often with a stylized divider element. The left half features one option and the right half features the other, with each option getting equal visual weight. At the top of each half, show the option's name and an icon or logo placeholder, with the central VS prominently displayed between them. Below each option, list key attributes, statistics, or features in a stacked card layout. Use distinct but complementary color themes for each side - often a cool color on one side and a warm color on the other. Apply bold typography for option names, hierarchical sizing for attributes. Use icons next to each attribute for visual interest. Maintain perfect symmetry between the two sides. White or subtly tinted background. Add a clear divider down the middle. The composition should feel dynamic and competitive while remaining analytical - suitable for product battles, feature comparisons, and pros versus cons of two distinct options. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "radar-chart",
        name: "Radar Chart",
        description: "Polygon showing scores across multiple dimensions",
        promptTemplate: "Create a radar chart (also known as spider chart) showing scores across multiple dimensions. Draw a polygon with axes radiating from a central point - one axis for each dimension being measured (typically 5 to 8 axes). Each axis is labeled at its outer end with the dimension name. Plot a value for each dimension on its corresponding axis, then connect the points with straight lines to form a closed polygon shape. The polygon visualizes the overall profile, with extents on each axis showing relative strengths and weaknesses. Fill the polygon with a semi-transparent color so the shape is clearly visible. If comparing multiple subjects, plot multiple overlapping polygons in different colors with appropriate transparency. Include concentric reference rings to indicate score intervals. Apply clean typography for axis labels and an optional title. Use a cohesive color palette. Add a legend if multiple polygons are plotted. White background with thin gray axis lines and reference rings. The composition should be analytical and dimensional - suitable for skills assessments, product feature scores, performance reviews, and multivariate comparisons. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "feature-matrix",
        name: "Feature Matrix",
        description: "Grid of features vs products with checkmarks",
        promptTemplate: "Create a feature matrix grid comparing products across a set of features. Use a structured table with products as columns and features as rows. In each cell, indicate whether that product has that feature using clear visual marks: a colored checkmark for included, a gray dash for not included, a half-circle or partial mark for partial support. Optionally include qualitative values like Good, Better, Best with corresponding tier badges. Use a primary accent color to highlight the recommended product's column. Group related features into sections with section headers spanning the row, applying subtle background colors to differentiate sections. Apply clean modern typography with product names in bold at the column headers and feature names in regular weight in the row labels. Use a white background with thin horizontal dividers and clear vertical column separations. Add a summary row at the top or bottom showing total feature counts per product. The composition should feel professional, comprehensive, and evaluation-friendly - suitable for software comparisons, plan tiers, and competitive analysis documents. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "ranking-chart",
        name: "Ranking Chart",
        description: "Ordered items with visual bars showing scores",
        promptTemplate: "Create a ranking chart showing items ordered by score from highest to lowest. List items vertically from top to bottom with the highest-ranked item at the top, each labeled with its rank number (1, 2, 3...) in a prominent badge or circle to the left of the item name. Next to each item, draw a horizontal bar representing its score, with the bar length proportional to the score value. Optionally display the score value at the end of each bar. Use a color gradient that fades from a vibrant color at the top (#1) to a more muted color at the bottom, or highlight only the top three with bold colors and use a neutral color for the rest. Add small icons or emoji indicators next to top ranks (gold/silver/bronze trophy icons for top 3 if appropriate to context). Apply clean typography with item names in medium weight and ranks in bold. Use a white background with subtle row separators. Maintain consistent row height. The composition should feel competitive and clear - suitable for leaderboards, top-N lists, and any ordered comparison. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "venn-diagram",
        name: "Venn Diagram",
        description: "Overlapping circles showing shared attributes",
        promptTemplate: "Create a Venn diagram showing overlapping circles that represent groups with shared and unique attributes. Use 2 or 3 circles of equal size arranged so that they overlap in the center, creating distinct regions for unique attributes (in each circle's non-overlapping area) and shared attributes (in the overlap regions). Each circle should be filled with a semi-transparent color (typically 40-60 percent opacity) so overlapping areas naturally show the blend of colors. Use a harmonious palette - typically blue, red, and yellow, or any three colors that blend pleasantly. Label each circle prominently at its outer edge with the group name. Inside each region (unique or overlap), list the relevant attributes or items. If 3 circles are used, ensure the central triple-overlap region is visible and labeled distinctly. Apply clean typography with group labels in bold. White background. Maintain perfect symmetry of circles. The composition should be visually intuitive and analytically clear - suitable for showing similarities and differences between concepts, audiences, or strategies. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "quadrant-chart",
        name: "Quadrant Chart",
        description: "Four quadrants on X and Y axes for strategic placement",
        promptTemplate: "Create a quadrant chart with two perpendicular axes dividing the canvas into four equal quadrants. Label each axis with a meaningful dimension (such as High to Low, Cheap to Expensive, Easy to Difficult). Each quadrant represents a combination of the two axis extremes and gets a descriptive label inside it. Plot items as labeled dots or small icons positioned according to their score on each axis. Use a cohesive color palette with each quadrant having a subtle background tint to make the regions immediately readable. Apply distinctive colors for plotted items if categorization is important, or use a single accent color for all dots. Label each dot directly with the item name nearby. Include axis labels at the ends of each axis with clear directional indicators (arrows). Apply clean professional typography with quadrant labels in bold and prominent. Use a white background with subtle quadrant tints. Draw clear axis lines through the center. The composition should be strategic and visually balanced - suitable for prioritization matrices, market positioning, BCG-style frameworks, and Eisenhower decision matrices. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 6. BUSINESS FRAMEWORKS
  // --------------------------------------------------------------------------
  {
    id: "business",
    name: "Business Frameworks",
    icon: "💼",
    description: "Strategic and analytical business models",
    types: [
      {
        id: "swot-analysis",
        name: "SWOT Analysis",
        description: "2x2 grid of Strengths, Weaknesses, Opportunities, Threats",
        promptTemplate: "Create a classic SWOT analysis visualization as a 2 by 2 grid. The four quadrants are labeled: Strengths (top-left), Weaknesses (top-right), Opportunities (bottom-left), and Threats (bottom-right). Each quadrant gets a distinct color tint: green for Strengths, yellow for Weaknesses, blue for Opportunities, and red for Threats - all in muted, professional shades. List 3 to 6 bullet points within each quadrant. Each quadrant should have a header at the top with the quadrant name in bold, optionally with a small icon (lightning for strengths, warning for weaknesses, target for opportunities, alert for threats). Apply clean modern typography with consistent sizing across quadrants. Use a white overall background with clear thin dividers between quadrants. Include a title above the grid indicating the subject of the analysis. Add a brief summary or strategic implications note below the grid. Maintain visual balance - quadrants should appear equal in size and weight. The composition should be authoritative and strategically professional - suitable for executive presentations and strategic planning sessions. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "pestel-analysis",
        name: "PESTEL Analysis",
        description: "Six factors affecting business environment",
        promptTemplate: "Create a PESTEL analysis visualization showing the six external factors that affect a business environment: Political, Economic, Social, Technological, Environmental, and Legal. Arrange the six factors as either a 2x3 grid or as six labeled segments around a central concept. Each factor gets its own card or section with a distinctive icon (government building for Political, dollar/coin for Economic, people for Social, computer chip for Technological, leaf for Environmental, scales of justice for Legal) and a distinct color from a harmonious palette. Within each section, list 3 to 5 specific points relevant to that factor. Use bold for factor names and regular weight for the bullet points. Include a central title or subject the analysis is about. Apply clean modern typography. Use a white background with subtle colored backgrounds for each factor card. Maintain visual balance and consistent card sizing. The composition should feel comprehensive, analytical, and strategy-ready - suitable for market analysis, strategic planning, and competitive intelligence reports. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "business-model-canvas",
        name: "Business Model Canvas",
        description: "9-block canvas for business model design",
        promptTemplate: "Create a Business Model Canvas visualization with 9 distinct sections arranged in the classic layout. The layout has 4 sections in the top row (Key Partners on far left, Key Activities and Key Resources stacked in the next column, Value Proposition in the center, Customer Relationships and Channels stacked next, Customer Segments on far right). Below those, two wide sections span the bottom (Cost Structure on the left, Revenue Streams on the right). Value Proposition gets the largest visual emphasis in the center. Each section is labeled clearly at the top with its name and ideally a small icon. List 3 to 5 bullet points or notes within each section. Use a cohesive color palette - typically blue or green tints for sections, with the Value Proposition slightly emphasized with a warmer or brighter tint. Apply clean modern typography with section headers in bold. Add thin borders or dividers between sections. White background. The composition should be professional, structured, and instantly recognizable as the BMC framework - suitable for startups, business planning, and strategic workshops. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "value-proposition-canvas",
        name: "Value Proposition Canvas",
        description: "Customer profile vs value map",
        promptTemplate: "Create a Value Proposition Canvas visualization with two main sections side by side. On the right is the Customer Profile (depicted as a circle divided into three segments: Customer Jobs at the top, Pains on one side, Gains on the other). On the left is the Value Map (depicted as a square divided into three segments: Products & Services at the top, Pain Relievers on one side, Gain Creators on the other). The two shapes face each other to show the fit between value created and customer needs. Use distinct colors for the two shapes - blue tints for the customer profile circle, green tints for the value map square. Apply clean modern typography with section labels in bold and bullet points in regular weight. Include 3 to 5 specific items in each segment. Add a label above each main shape (Value Map and Customer Profile) and an optional fit indicator (such as a green arrow or checkmark) between them. Use a white background. The composition should be clear, structured, and immediately recognizable as the Strategyzer canvas - suitable for product development and customer-centric strategy. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "porters-five-forces",
        name: "Porter's Five Forces",
        description: "Competitive forces diagram",
        promptTemplate: "Create a Porter's Five Forces visualization showing competitive forces in an industry. Position the central force (Industry Rivalry / Competition Among Existing Competitors) in the middle of the canvas as a prominent circle or box. Around the center, place the four surrounding forces with arrows pointing toward the center: Threat of New Entrants at the top, Bargaining Power of Suppliers on the left, Bargaining Power of Buyers on the right, and Threat of Substitutes at the bottom. Each force is represented by a labeled box or circle with an associated icon (factory for entrants, truck or hand for suppliers, shopping cart for buyers, refresh symbol for substitutes). Arrows between each outer force and the center should be thick and clearly directional. Use a cohesive color palette with each force in a distinct tint and the center in a stronger emphasis color. Apply clean modern typography with force names in bold and supporting analysis text in regular weight. White background. The overall composition should feel strategic, analytical, and instantly recognizable as Porter's framework - suitable for industry analysis and competitive strategy presentations. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "okr-framework",
        name: "OKR Framework",
        description: "Objectives and Key Results tree",
        promptTemplate: "Create an OKR (Objectives and Key Results) framework visualization showing objectives at the top with their key results cascading below. Use a tree-like structure with the main objective (or set of objectives) at the top as bold labeled boxes. Connect each objective downward to 3 to 5 key results below it, each key result clearly stating a measurable outcome with target metrics. Use a clean professional color palette - typically blue tints for objectives and green tints for key results, with progress bars or percentage completion indicators on each key result. If there are multiple objective levels (company-level cascading to team-level), show this hierarchy with clear visual nesting. Apply clean modern typography with objective titles in large bold text, key result descriptions in medium weight, and metrics in slightly highlighted color. Connect parent objectives to child key results with thin clean lines. Use a white background with subtle card shadows for definition. The overall composition should be clear, goal-focused, and motivational - suitable for company-wide OKR planning, team alignment, and executive dashboards. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "bcg-matrix",
        name: "BCG Matrix",
        description: "Growth-share matrix for portfolio analysis",
        promptTemplate: "Create a BCG (Boston Consulting Group) Matrix visualization as a 2x2 grid for portfolio analysis. The horizontal axis represents Market Share (high on left, low on right) and the vertical axis represents Market Growth Rate (high at top, low at bottom). Label the four quadrants with their classic names and icons: Stars (top-left, high share + high growth, with a star icon) shown in a yellow or gold tint, Question Marks (top-right, low share + high growth, with a question mark icon) shown in blue, Cash Cows (bottom-left, high share + low growth, with a cow or dollar icon) shown in green, and Dogs (bottom-right, low share + low growth, with a dog or X icon) shown in red. Place portfolio items (products or business units) as labeled circles within the appropriate quadrant, with circle size optionally representing revenue or another metric. Include clear axis labels and quadrant headers. Apply clean modern typography. Use a white background with subtle quadrant tints. The composition should feel strategic, analytical, and immediately recognizable as the BCG framework. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "ansoff-matrix",
        name: "Ansoff Matrix",
        description: "2x2 market and product growth strategies",
        promptTemplate: "Create an Ansoff Matrix visualization as a 2x2 grid showing growth strategies. The horizontal axis represents Products (Existing on the left, New on the right) and the vertical axis represents Markets (Existing at the top, New at the bottom). The four quadrants are: Market Penetration (top-left, existing market + existing product, lowest risk), Product Development (top-right, existing market + new product), Market Development (bottom-left, new market + existing product), and Diversification (bottom-right, new market + new product, highest risk). Each quadrant gets a clearly labeled header, a brief description of the strategy, and 2 to 3 example actions or initiatives. Use a color gradient from green (lowest risk, top-left) through yellow to red (highest risk, bottom-right) to visually indicate risk levels. Include axis labels and arrows showing the dimension directions. Apply clean modern typography with quadrant titles in bold. Use a white background. The composition should feel strategic, decision-supportive, and instantly recognizable as the Ansoff framework - suitable for growth strategy presentations and market analysis. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 7. BRAINSTORMING
  // --------------------------------------------------------------------------
  {
    id: "brainstorming",
    name: "Brainstorming",
    icon: "💡",
    description: "Idea generation and organization formats",
    types: [
      {
        id: "idea-cluster",
        name: "Idea Cluster",
        description: "Grouped sticky notes by theme",
        promptTemplate: "Create an idea cluster visualization styled like grouped sticky notes on a whiteboard. Place clusters of colorful sticky notes (small rounded squares with slight rotation for an organic feel) across the canvas, grouped by theme. Each cluster has a clear header label indicating the theme. Within each cluster, individual ideas appear as small sticky notes with concise text, slightly offset and overlapping each other to create a casual brainstorm aesthetic. Use a varied palette - yellow, pink, blue, green, orange sticky notes - with each cluster optionally using a dominant color family. Apply hand-drawn-feeling subtle shadows under each note to create depth. Use casual but readable typography (clean sans-serif, not overly formal). Maintain whitespace between clusters so each group is visually distinct. Include a central title for the brainstorm topic. White or very subtle gray background to suggest a whiteboard. Add subtle dotted or grid background lines if it enhances the workshop feel. The composition should feel creative, energetic, and collaborative - suitable for design thinking sessions, ideation workshops, and team brainstorms. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "how-might-we",
        name: "How Might We",
        description: "Question-based brainstorm cards",
        promptTemplate: "Create a How Might We brainstorm visualization showing reframed problem statements as opportunity questions. Lay out 6 to 10 question cards in a grid, each card starting with How Might We... and posing a different angle on the central challenge. Each card uses a clean rounded rectangle design with the question prominently displayed in medium-large typography. Optionally include a small icon or color tag indicating the question category (user experience, business model, technology, etc.). Use a cohesive color palette with each card category in a different muted tint. Place the central problem or challenge at the top of the canvas in a more prominent banner. Apply clean modern typography with the How Might We... opener in slightly lighter weight and the rest of each question in medium-bold for emphasis. Use a white or very light cream background. Maintain consistent card sizing and spacing. Add subtle shadows for depth. The composition should feel exploratory, possibility-oriented, and design-thinking-aligned - suitable for problem framing workshops and ideation sprints. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "crazy-eights",
        name: "Crazy 8s Grid",
        description: "Eight rapid idea boxes for fast ideation",
        promptTemplate: "Create a Crazy 8s ideation grid - eight equal rectangular boxes arranged in a 4 by 2 or 2 by 4 grid representing rapid one-minute idea sketches. Each box is numbered 1 through 8 and contains a concise idea title and brief description, simulating the output of a rapid 8-minute design thinking exercise. Use a clean grid layout with thin borders between boxes. Apply a consistent muted background tint to each box (or alternating tints for visual rhythm). Include a prominent title at the top of the canvas naming the brainstorm topic with the eight ideas as quick responses. Each box gets a large numeral (1 to 8) in the top-left corner, an idea title in bold, and 1 to 2 lines of description. Use a casual but professional typography - the energy of the visualization should feel rapid and generative. Use a cohesive color palette across all eight cells. White overall background. Optionally add subtle hand-drawn texture or feel to suggest sketchbook origins. The composition should feel creative, fast-paced, and ideation-oriented - suitable for design sprints and brainstorm sessions. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "affinity-diagram",
        name: "Affinity Diagram",
        description: "Ideas sorted into emergent categories",
        promptTemplate: "Create an affinity diagram visualization showing scattered ideas organized into emergent groupings. Display the ideas as sticky-note-style cards (rounded rectangles with subtle shadow) clustered into 4 to 7 thematic groups. Each cluster gets a clear category header label - the emergent theme name in bold - placed above or near the group. Within each cluster, individual idea cards are casually arranged, sometimes slightly overlapping or offset for an authentic workshop feel. Use a cohesive color palette where each cluster uses a different soft pastel background, helping viewers visually identify groupings at a glance. Apply clean modern typography with cluster labels in bold and individual idea cards in regular weight. Include a central title for the overall analysis subject. Use a white or very light gray background to suggest a whiteboard. Maintain clear whitespace between clusters so groupings are obvious. Optionally add small connector lines between related clusters. The composition should feel post-it-note authentic, collaborative, and synthesized - suitable for research synthesis, workshop outputs, and pattern identification. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "lotus-blossom",
        name: "Lotus Blossom",
        description: "Central idea with surrounding themes, each expanding further",
        promptTemplate: "Create a Lotus Blossom diagram - a nested 3x3 grid structure used for creative idea expansion. The central 3x3 grid has the main topic in the center cell and 8 related themes in the surrounding cells. Each of those 8 themes becomes the center of its own 3x3 grid (placed around the outside of the main grid in their respective positions), and each of those grids has the theme in the center and 8 specific ideas in the surrounding cells. The result is a flower-like structure with the main 3x3 in the center and 8 surrounding 3x3 grids - a total of 9 nine-cell blocks. Use a cohesive color palette where the central grid stands out with a stronger color, and the 8 outer grids use related muted colors. Apply clean modern typography with the main topic in large bold text, themes in medium-bold, and ideas in regular weight. Maintain perfect symmetry of the layout. Use a white background with thin grid lines. The composition should feel structured yet generative, like a brainstorm in full bloom - suitable for deep idea expansion. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 8. PARTS OF A WHOLE
  // --------------------------------------------------------------------------
  {
    id: "parts",
    name: "Parts of a Whole",
    icon: "🧩",
    description: "How components combine into a complete picture",
    types: [
      {
        id: "org-chart",
        name: "Org Chart",
        description: "Organizational hierarchy of people and roles",
        promptTemplate: "Create a clean organizational chart showing a hierarchy of people and roles in a company or team. Use a top-down tree structure with the highest position at the top (often the CEO or leader) and direct reports cascading below in horizontal rows. Each role is represented by a card showing the person's name, title, and optionally a small avatar circle or photo placeholder. Connect each manager to their direct reports with clean vertical and horizontal lines (forming right-angle elbow connectors). Maintain symmetrical spacing - direct reports under the same manager should be aligned horizontally and evenly spaced. Use a cohesive color palette, often with department or team colors to differentiate teams across the chart. Apply clean modern typography with names in bold and titles in lighter weight. Add subtle card shadows for depth. Use a white background. Optionally include team labels above groups of cards to indicate departments. The composition should feel structured, professional, and immediately readable as a corporate hierarchy - suitable for company onboarding documents, team structure presentations, and reorganization plans. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "breakdown-tree",
        name: "Breakdown Tree",
        description: "Total split into components recursively",
        promptTemplate: "Create a breakdown tree visualization showing how a total whole is decomposed into successively smaller components. Start with the total at the top as a prominent labeled box with the overall value. Branch downward into 2 to 5 major components, each labeled with its name and value (and optionally its percentage of the parent). Each major component can further branch into sub-components below, creating a multi-level decomposition. Use clean rectangular boxes with right-angle elbow connectors between parent and child. Apply a cohesive color palette where colors flow through the tree - parent and children sharing a color family helps visual grouping. Optionally include thin horizontal bars within each box to visually indicate the component's proportion of the parent. Use clean modern typography with totals and component names in bold, values and percentages in lighter weight. Maintain consistent alignment - all components at the same level should be horizontally aligned. White background. The composition should feel analytical and quantitative - suitable for budget breakdowns, financial decompositions, work breakdown structures, and component analyses. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "radial-hierarchy",
        name: "Radial Hierarchy",
        description: "Circular org chart radiating outward",
        promptTemplate: "Create a radial hierarchy visualization where the central concept or top role is placed in the center, with subsequent levels of hierarchy radiating outward in concentric ring layers. The center contains the root element as a labeled circle. The next ring outward shows the direct children positioned evenly around the center, connected to the center with thin radial lines. The next ring outward shows grandchildren, positioned around their respective parents. Use a cohesive color palette where each ring level uses a slightly different shade, or where each branch family shares a color. Apply clean modern typography with sizes decreasing as the rings move outward - large bold text in the center, medium text in the first ring, smaller text in outer rings. Use thin radial lines to connect nodes across rings. Maintain rotational symmetry. White background. Include enough whitespace so the outer rings do not feel cramped. Optionally add subtle concentric ring outlines as visual guides. The composition should feel modern, balanced, and visually striking - suitable for organizational charts that emphasize a central role, knowledge taxonomies, and product family hierarchies. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "nested-circles",
        name: "Nested Circles",
        description: "Concentric circles showing containment relationships",
        promptTemplate: "Create a nested circles visualization showing how outer concepts contain inner concepts in a containment hierarchy. Use a series of concentric circles, with the largest circle on the outside representing the broadest concept and progressively smaller circles inside representing successively more specific or contained ideas. Each circle is labeled either at its top edge or inside (when space permits) with the concept name. Use a cohesive color palette where each ring has a slightly different tint - typically with the outer ring being the lightest and the inner ring being the most saturated, or vice versa. Apply clean modern typography with the labels sized appropriately for each ring. Add brief descriptive text inside each ring's annular space when there is room. Use a white background. Maintain perfect concentric alignment. Optionally include small icons next to each label to reinforce the concept. The composition should feel elegant and conceptual - suitable for showing systems within systems, conceptual taxonomies, scope diagrams, and inclusion relationships. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 9. PROBLEMS AND SOLUTIONS
  // --------------------------------------------------------------------------
  {
    id: "problems",
    name: "Problems and Solutions",
    icon: "🔧",
    description: "Diagnosing issues and proposing fixes",
    types: [
      {
        id: "root-cause-analysis",
        name: "Root Cause Analysis",
        description: "Why-why diagram drilling down to root causes",
        promptTemplate: "Create a root cause analysis (5 Whys) visualization showing the drill-down from a stated problem to its underlying root causes. Start with the problem statement at the top as a bold red or amber alert-styled box. Below it, draw a chain of why questions - each Why? leads to an answer (a contributing cause), which then generates the next Why? to drill deeper. Typically the chain extends 3 to 5 levels deep until reaching a root cause that cannot be productively asked Why? about further. The final root cause should be visually distinguished - perhaps with a darker color, a magnifying glass icon, or a Root Cause label. Use a vertical layout with downward arrows connecting each Why? and answer. Apply clean modern typography with Why? questions in italic or accent color, answers in bold. Use a cohesive color palette that intensifies as the chain descends. Include the initial problem prominently. White background. The composition should feel analytical and investigative - suitable for incident reviews, quality analysis, and problem-solving workshops. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "fishbone-diagram",
        name: "Fishbone Diagram",
        description: "Ishikawa cause-and-effect diagram",
        promptTemplate: "Create a fishbone (Ishikawa) cause-and-effect diagram. Draw a horizontal central spine line running left to right across the canvas, ending at the right with the problem statement displayed in a labeled box (the fish head). From the spine, draw 4 to 8 diagonal main bones angling outward (some upward, some downward, alternating) at roughly 45-degree angles. Each main bone is labeled at its outer end with a major category of causes (commonly People, Process, Equipment, Materials, Environment, Management - the classic 6Ms or 5Ms). From each main bone, draw smaller perpendicular sub-bones extending further to specific contributing factors within that category. Apply clean modern typography with the problem in bold (and a warning color tint), category names in medium-bold, and sub-causes in regular weight. Use clean straight lines throughout with consistent line thickness for main bones and slightly thinner for sub-bones. Use a cohesive professional color palette - often muted with one accent color for the problem. White background. The composition should be analytical and technical - suitable for quality control, manufacturing analysis, and root cause workshops. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "problem-tree",
        name: "Problem Tree",
        description: "Problem at center with causes below and effects above",
        promptTemplate: "Create a problem tree visualization showing a core problem at the center with its causes growing as roots below (the underground portion) and its effects growing as branches above (the canopy portion), styled like a tree. Place the central problem statement at the vertical midpoint of the canvas as a prominent labeled trunk element. Below it, draw the root system - branching lines downward leading to root cards, each labeled with a contributing cause. The causes can further split into deeper sub-causes. Above the trunk, draw the canopy - branching lines upward leading to branch cards, each labeled with an effect or consequence of the problem. The effects can further branch into secondary effects. Use a metaphorical natural color palette - browns and reds for the roots/causes area (suggesting depth and underground origins), greens and bright accents for the branches/effects (suggesting visible outcomes). Apply clean modern typography. Use a white background with subtle tinted backgrounds for the root and canopy zones. The composition should feel organic yet analytical - suitable for development planning, social analysis, and policy advocacy. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "solution-matrix",
        name: "Solution Matrix",
        description: "Grid of problems mapped against solutions",
        promptTemplate: "Create a solution matrix visualization mapping problems against potential solutions. Use a grid table format with problems listed in rows (left column) and solutions listed in columns (top row). Each cell at the intersection of a problem row and solution column indicates whether (and how well) that solution addresses that problem - use clear visual markers like filled circles (strong fit), half circles (partial fit), empty circles (no fit), or a color-coded scale from light to dark for impact level. Highlight the best problem-solution matches with bold borders or background tints. Optionally include scoring columns at the right (showing total problems addressed by each solution) and a recommended solution highlighted with a distinct accent color. Apply clean modern typography with problem names in bold rows, solution names in bold columns, and clear visual markers in cells. Use a cohesive professional color palette. White background with subtle row/column dividers. Add a clear title at the top. The composition should feel evaluative and decision-supportive - suitable for product roadmap prioritization, intervention planning, and decision frameworks. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "risk-matrix",
        name: "Risk Matrix",
        description: "Likelihood vs impact grid for risk assessment",
        promptTemplate: "Create a risk matrix visualization mapping risks across two dimensions: Likelihood (x-axis) and Impact (y-axis). Draw a grid divided into a 5x5 or 4x4 array of cells, with the bottom-left corner representing Low Likelihood + Low Impact (acceptable risks) and the top-right corner representing High Likelihood + High Impact (critical risks). Apply a color gradient across the grid that goes from green in the bottom-left, through yellow in the middle, to red in the top-right - indicating risk severity. Plot individual risks as labeled circles or numbered markers within the appropriate cells. Each risk gets a brief label or a number with a legend showing what each number represents. Include axis labels with clear directional indicators (arrows showing increasing likelihood and impact). Apply clean modern typography with risk labels in bold. Use a white background outside the grid. Maintain consistent cell sizing. Optionally add quadrant labels (Low/Medium/High/Critical) within or beside the grid. The composition should feel analytical, executive-friendly, and decision-supportive - suitable for risk management, project planning, and security assessments. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 10. VISUAL METAPHORS
  // --------------------------------------------------------------------------
  {
    id: "metaphors",
    name: "Visual Metaphors",
    icon: "🎭",
    description: "Concrete imagery to express abstract ideas",
    types: [
      {
        id: "iceberg-model",
        name: "Iceberg Model",
        description: "Visible tip vs hidden mass below the surface",
        promptTemplate: "Create an iceberg model visualization showing what is visible above the water line versus what is hidden below. Draw a stylized iceberg as the central element, with about 10 to 20 percent of the iceberg visible above a clear horizontal water line and 80 to 90 percent hidden below the surface. The above-water portion represents what is observable or surface-level, while the below-water portion represents underlying causes, hidden factors, or deeper truths. Label both regions clearly - what is visible above (typically symptoms or observable behaviors) and what is hidden below (typically root causes, mental models, or systemic factors). Within each region, list specific items as bullet points or small labels. Use a cohesive color palette - cool whites and light blues for the visible portion, deeper blues fading to dark navy at the deepest points to suggest depth. Apply clean modern typography. Make the water line distinct with a subtle reflection effect on the iceberg. Use a sky-toned background above the water (light blue) and deeper blue gradient below. The composition should feel symbolic yet clear - suitable for systems thinking, organizational analysis, and surface vs depth comparisons. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "pyramid-diagram",
        name: "Pyramid Diagram",
        description: "Hierarchical levels arranged in a triangular shape",
        promptTemplate: "Create a pyramid diagram showing hierarchical levels stacked in a triangular shape. Draw a triangle divided into horizontal sections, with the widest section at the bottom and progressively narrower sections rising to a single peak at the top. Each section represents a level in the hierarchy and is labeled with its name and a brief description. Use a cohesive color palette where each level has a distinct color, often progressing from cool colors at the base to warm/bright at the top (or vice versa to suggest depth/foundation). The bottom section is typically the foundation (largest, most important supporting level) and the top section is the peak (smallest but most aspirational, like self-actualization in Maslow's hierarchy). Apply clean modern typography with section labels in bold and descriptions in regular weight. Include a clear title above the pyramid. Use a white background. Maintain symmetrical sloped sides. Add subtle borders between sections in white for clean separation. The composition should feel symbolic, hierarchical, and instantly recognizable - suitable for Maslow's hierarchy, organizational levels, content strategies, and any layered framework. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "bridge-diagram",
        name: "Bridge Diagram",
        description: "From current state to future state across a bridge",
        promptTemplate: "Create a bridge diagram showing the journey from a current state to a future desired state. Lay out the visualization horizontally with the current state (problem or starting point) labeled on the left side, the future state (desired outcome or goal) on the right side, and a bridge structure spanning between them in the middle. The bridge can be drawn realistically with arches or supports, or as a stylized progression. Place key initiatives, strategies, or steps as labeled supports or pillars beneath the bridge - these are the actions that enable the crossing. Include obstacles or risks as figures in the water below the bridge. Use a cohesive color palette - typically muted or warning colors on the left (current state), neutral grays through the bridge, and uplifting brighter colors on the right (future state). Apply clean modern typography with state labels in bold large text and initiative labels in medium weight. Use a white background, optionally with subtle sky-and-water suggestion. The composition should feel narrative and aspirational - suitable for change management, transformation roadmaps, and strategic vision documents. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "ladder-of-inference",
        name: "Ladder of Inference",
        description: "Steps from observed data to taken action",
        promptTemplate: "Create a Ladder of Inference visualization showing the cognitive steps from raw observation to action. Draw a vertical ladder with 6 to 7 distinct rungs, each labeled as a step in the inference process. The classic rungs from bottom to top are: Observable Data, Selected Data (what we choose to focus on), Interpreted Data (meanings we apply), Assumptions, Conclusions, Beliefs, and Actions. Each rung is a labeled horizontal element with text describing the cognitive process at that level. Optionally show a feedback loop arrow from the top (Actions) back to the bottom (which influences what data we select next time) to emphasize how beliefs shape perception. Use a cohesive color palette with the bottom (data) in neutral tones and the top (action) in stronger emphasis colors. Apply clean modern typography with each rung label in bold. Add small descriptive text alongside each rung. White background. Maintain even spacing between rungs. The composition should feel thoughtful, reflective, and educational - suitable for leadership training, critical thinking workshops, and decision-making reflection. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "flywheel",
        name: "Flywheel",
        description: "Self-reinforcing cycle of growth",
        promptTemplate: "Create a flywheel diagram showing a self-reinforcing cycle of growth. Arrange 3 to 5 stages or activities as labeled segments around the circumference of a large central wheel shape, with each stage feeding into and accelerating the next. Use curved arrows between segments to indicate the rotational momentum, all flowing in the same direction (typically clockwise). Place a central hub label that names the overall outcome the flywheel produces (such as growth, customer love, or product-led adoption). Use a cohesive color palette with each segment in a slightly different shade of the same color family, with the rotation suggested through subtle motion blur effects or arrow weight. Apply clean modern typography with stage names in bold and brief descriptions in regular weight. Make the wheel feel substantial - thick segments rather than thin ones. White background. Add subtle radial lines or wedge dividers to give the flywheel structure. The composition should feel kinetic and momentum-building - suitable for product strategy, growth strategy, and the Amazon-style flywheel concept popularized by Jim Collins. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "funnel-metaphor",
        name: "Funnel Metaphor",
        description: "Input narrowing to output through filtering",
        promptTemplate: "Create a funnel metaphor visualization showing how a large input narrows down to a smaller output through a series of filtering stages. Draw a tapered funnel shape (wide at the top, narrow at the bottom), divided horizontally into 3 to 6 stages. Each stage represents a filtering or conversion step. Above the funnel, show the input flowing in (often as small icons, dots, or labels representing the initial volume). Below the funnel, show the refined output. Within each funnel section, label the stage and indicate the volume or percentage that passes through. Use a cohesive color palette that flows from a light, broad color at the top (representing many possibilities) to a deeper, focused color at the bottom (representing refined output). Apply clean modern typography with stage names in bold and conversion metrics in lighter weight. Show drop-off at each stage with small outward arrows. White background. The composition should feel processual and clarifying - suitable for sales funnels, hiring processes, decision pipelines, and any filtering or refining metaphor. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 11. NARRATIVE
  // --------------------------------------------------------------------------
  {
    id: "narrative",
    name: "Narrative",
    icon: "📖",
    description: "Story-driven and dramatic structures",
    types: [
      {
        id: "story-arc",
        name: "Story Arc",
        description: "Tension rising and falling over time",
        promptTemplate: "Create a story arc visualization showing the rise and fall of dramatic tension over time. Draw a curve plotted across a horizontal axis (representing the sequence of events or chapters) and a vertical axis (representing tension level). The classic shape: starts at a low level on the left (exposition), rises through rising action, peaks at the climax in the upper portion, then descends through falling action to resolution on the right. Annotate key story beats along the curve with labeled points: Exposition, Inciting Incident, Rising Action, Climax, Falling Action, Resolution. Each beat gets a labeled marker on the curve and a brief description in a callout. Use a cohesive color palette that intensifies through the climax (warm reds and oranges) and cools down in resolution (calming blues). Apply clean modern typography with story beats in bold and descriptions in regular weight. Use a white or subtle background. The composition should feel narrative and dramatic - suitable for story structure analysis, content marketing narratives, presentation arcs, and creative writing planning. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "before-after",
        name: "Before and After",
        description: "Two states showing transformation",
        promptTemplate: "Create a before and after visualization showing transformation from one state to another. Divide the canvas into two clearly distinct sections - the left side labeled Before (showing the original state) and the right side labeled After (showing the transformed state). Use a transition element in the middle - an arrow, lightning bolt, gear icon, or pathway suggesting the intervention or process that caused the change. Each side should have visual elements representing key attributes: lists, icons, statistics, or stylized illustrations of the relevant state. Use contrasting color palettes - typically duller, washed-out colors for Before and vibrant, energetic colors for After to emphasize improvement. Or use a meaningful color contrast that reflects the nature of the transformation. Apply clean modern typography with state labels in large bold text and supporting details in regular weight. Include specific quantitative comparisons if relevant. Use a white background with optional subtle tinted backgrounds for each side. The composition should feel transformative and compelling - suitable for case studies, marketing narratives, and progress documentation. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "heros-journey",
        name: "Hero's Journey",
        description: "12 stages of the classic narrative journey",
        promptTemplate: "Create a Hero's Journey visualization showing the 12 classic stages of Joseph Campbell's monomyth structure. Arrange the stages along a circular or horizontal arc path showing the hero's departure from the ordinary world, descent into the special world, and return. The 12 stages are: Ordinary World, Call to Adventure, Refusal of the Call, Meeting the Mentor, Crossing the Threshold, Tests and Trials, Approach to the Ordeal, The Ordeal, Reward, The Road Back, Resurrection, and Return with the Elixir. Place each stage as a labeled marker along the path with a small icon or symbol representing the stage's essence. Optionally divide the journey into three acts (Departure, Initiation, Return) with subtle background coloring. Use a cohesive color palette that evolves through the journey - calmer at the start, intense at the climax (the Ordeal), triumphant at the return. Apply clean modern typography. White background. The composition should feel mythological and structured - suitable for storytelling courses, brand narrative development, screenplay planning, and product launch narratives. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "problem-agitate-solution",
        name: "Problem-Agitate-Solution",
        description: "Three-act copywriting structure",
        promptTemplate: "Create a Problem-Agitate-Solution (PAS) visualization showing the three-act copywriting and persuasion structure. Lay out three distinct sections, either stacked vertically or arranged horizontally. The first section is Problem - state the audience's pain point clearly, with a relevant icon (such as a warning symbol or frowning face) and concise descriptive text. The second section is Agitate - explore the consequences, emotions, and stakes of the problem, intensifying the urgency, often using stronger colors and more emotional language with an attention-grabbing icon. The third section is Solution - present the proposed remedy with optimistic framing, a checkmark or solution icon, and clear actionable language. Use a color progression that moves from concerning (warm reds or oranges for Problem and Agitate) to optimistic (greens or blues for Solution). Apply clean modern typography with section labels in large bold and supporting content in regular weight. Use a white background. The composition should feel persuasive and structured - suitable for marketing copy planning, sales presentations, and case study narratives. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 12. CAUSE AND EFFECT
  // --------------------------------------------------------------------------
  {
    id: "cause",
    name: "Cause and Effect",
    icon: "🔗",
    description: "Showing how actions lead to outcomes",
    types: [
      {
        id: "impact-map",
        name: "Impact Map",
        description: "Goal with actors, impacts, and deliverables",
        promptTemplate: "Create an impact map visualization showing how deliverables connect to ultimate goals through actors and impacts. Start with the central goal on the left side as a prominent labeled box. Branch rightward to actors (the people or groups whose behavior we want to change), then further rightward to impacts (the behavior changes needed), and finally to deliverables (the specific things we will build or do to drive those impacts). The structure flows left-to-right through four columns: Goal | Actors | Impacts | Deliverables. Use clean connecting lines between elements showing which actors enable which impacts and which deliverables produce which impacts. Use a cohesive color palette with each column using a slightly different tint. Apply clean modern typography with the goal in large bold text, actors in medium-bold, impacts in italic, and deliverables in regular weight. Add subtle column headers above each layer. White background. The composition should feel strategic and actionable - suitable for product planning, OKR planning, and outcome-focused roadmaps. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "logic-model",
        name: "Logic Model",
        description: "Inputs, activities, outputs, outcomes, impact",
        promptTemplate: "Create a logic model visualization showing the chain from program inputs to ultimate impact. Lay out the canvas horizontally with five sequential columns left to right: Inputs (resources used), Activities (what we do), Outputs (immediate products), Outcomes (intermediate results), and Impact (long-term change). Each column contains 3 to 5 specific items relevant to that stage. Connect columns with horizontal arrows showing the cause-effect flow. Use a cohesive color palette where colors progress through the stages, often building from cool tones at Inputs to warmer/brighter tones at Impact to suggest culminating value. Apply clean modern typography with column headers in bold and items in regular weight. Use subtle column background tints for visual separation. Include a clear title at the top naming the program or initiative. White overall background. Optionally include assumptions and external factors as small notes below the main chart. The composition should feel structured, programmatic, and evaluation-friendly - suitable for grant proposals, program design, and impact reporting. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "theory-of-change",
        name: "Theory of Change",
        description: "Pathway from intervention to long-term impact",
        promptTemplate: "Create a Theory of Change visualization showing the pathway from intervention to long-term impact, with the impact at the top and the intervention at the bottom. Draw a vertical flow that reads from bottom to top: Intervention (what we do) at the bottom, then Outputs (immediate results), then Short-term Outcomes (initial changes), then Long-term Outcomes (deeper changes), and finally Long-term Impact (the ultimate goal) at the top. Connect each level with upward arrows indicating the causal chain. Optionally include parallel branches for different intervention streams that converge at higher levels. Add Assumptions and Preconditions as side notes next to relevant transitions. Use a cohesive color palette that progresses from neutral at the bottom to inspiring colors at the top. Apply clean modern typography with level labels in bold and content in regular weight. Use a white background. The composition should feel theoretical yet actionable, suitable for nonprofit program design, social impact planning, and policy advocacy. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "causal-loop-diagram",
        name: "Causal Loop Diagram",
        description: "Reinforcing and balancing feedback loops",
        promptTemplate: "Create a causal loop diagram showing reinforcing and balancing feedback loops between variables. Lay out 4 to 8 variables as labeled nodes (circles or text labels) positioned around the canvas. Connect variables with arrows that indicate causal relationships, labeling each arrow with a polarity symbol: a plus sign (+) for same-direction influence (when one increases, the other increases) and a minus sign (-) for opposite-direction influence (when one increases, the other decreases). Identify and label the resulting feedback loops as either Reinforcing (R) - loops that amplify change - or Balancing (B) - loops that counteract change. Mark each loop with a circular arrow in its center and a label (R1, B1, etc.) along with a brief description. Use a cohesive color palette where reinforcing loops are highlighted with one color (often warm) and balancing loops with another (often cool). Apply clean modern typography with variable names in bold. White background. The composition should feel systems-thinking-oriented, like a Donella Meadows or Peter Senge illustration. Use this exact content: [USER_CONTENT]"
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 13. HIERARCHY
  // --------------------------------------------------------------------------
  {
    id: "hierarchy",
    name: "Hierarchy",
    icon: "🏛️",
    description: "Structured levels and classifications",
    types: [
      {
        id: "corporate-org-chart",
        name: "Corporate Org Chart",
        description: "CEO down to teams in a traditional structure",
        promptTemplate: "Create a traditional corporate organizational chart with the CEO at the top and the structure cascading down through executives, directors, managers, and individual contributors. Use a top-down tree layout where each level is horizontally aligned, with rounded rectangle cards for each person showing their name, title, and optionally an avatar circle. Connect each manager to their direct reports with clean elbow connectors (vertical line down, then horizontal across to each child). Maintain perfect horizontal alignment for all employees at the same level. Use a cohesive color palette - often with executive cards (top levels) in a slightly more saturated or accent color and lower levels in neutral tones. Optionally use department color coding to differentiate teams (e.g., engineering in blue, marketing in green, sales in orange). Apply clean modern typography with names in bold and titles in lighter weight. Add subtle card shadows for depth. Include department labels above clusters of cards if helpful. Use a white background. The composition should feel formal, structured, and immediately recognizable as a corporate hierarchy. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "decision-tree",
        name: "Decision Tree",
        description: "Branching choices and their outcomes",
        promptTemplate: "Create a decision tree visualization showing branching choices and their outcomes. Start at the top with the initial decision or question in a diamond-shaped box. From that, branch outward (typically downward) with arrows labeled with the choice or condition (such as Yes/No or different options). Each branch leads to either another decision diamond (for further branching) or a terminal outcome box (rectangle or rounded rectangle). Build out the tree several levels deep. Use clean elbow connectors between nodes. Apply a cohesive color palette - decision diamonds in one color (often a thoughtful blue or amber), outcomes in another (greens for positive outcomes, reds for negative, neutrals for informational). Label every branch with the condition that leads down that path. Apply clean modern typography with decisions and outcomes in bold and branch labels in regular weight. Use a white background. Maintain symmetrical layout where possible. The composition should feel logical, decision-supportive, and clear - suitable for troubleshooting flows, business logic documentation, and choice analysis. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "taxonomy-tree",
        name: "Taxonomy Tree",
        description: "Classification hierarchy of related items",
        promptTemplate: "Create a taxonomy tree visualization showing a classification hierarchy of related items. Use a top-down branching structure with the most general category at the top and progressively more specific subcategories cascading downward through multiple levels. Each node is a labeled card or box. Connect parent nodes to child nodes with clean elbow connectors. Apply a cohesive color palette where each branch family shares a color - for example, all descendants of a particular high-level category share the same color tint, with slight variations at deeper levels. Apply clean modern typography with high-level categories in bold large text, subcategories in medium-bold, and leaf items in regular weight. Use a white background. Maintain consistent spacing between siblings and between levels. The composition should feel systematic, taxonomic, and reference-friendly - suitable for product categorization, biological taxonomies, content categorization, and knowledge organization. Use this exact content: [USER_CONTENT]"
      },
      {
        id: "sitemap",
        name: "Sitemap",
        description: "Website pages and their relationships",
        promptTemplate: "Create a website sitemap visualization showing the page hierarchy and navigation structure. Start with the home page at the top center as a prominent labeled box. Branch downward to main navigation sections (such as About, Products, Services, Blog, Contact), each represented as a card. Below each main section, show its sub-pages in another level of cards. Continue cascading for deeper navigation levels if relevant. Connect parent pages to child pages with clean elbow connectors. Use color coding to indicate page types or sections - for example, content pages in one color, transactional pages in another, utility pages in a third. Optionally include icons next to page names to indicate page type (document, shopping cart, contact form, etc.). Apply clean modern typography with the home page label most prominent, main sections in medium-bold, and sub-pages in regular weight. Maintain symmetrical horizontal alignment for pages at the same level. White background. The composition should feel structured, technical, and navigation-friendly - suitable for web design planning, information architecture, and content audits. Use this exact content: [USER_CONTENT]"
      }
    ]
  }
];

// ============================================================================
// COLOR PALETTES - 25 curated combinations
// ============================================================================

export const PALETTES = [
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    colors: ["#E3F2FD", "#90CAF9", "#42A5F5", "#1E88E5", "#1565C0"],
    mood: "professional",
    preview: "#1E88E5"
  },
  {
    id: "forest-green",
    name: "Forest Green",
    colors: ["#E8F5E9", "#A5D6A7", "#66BB6A", "#43A047", "#2E7D32"],
    mood: "natural",
    preview: "#43A047"
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    colors: ["#FFF3E0", "#FFCC80", "#FFA726", "#FB8C00", "#E65100"],
    mood: "energetic",
    preview: "#FB8C00"
  },
  {
    id: "royal-purple",
    name: "Royal Purple",
    colors: ["#F3E5F5", "#CE93D8", "#AB47BC", "#8E24AA", "#6A1B9A"],
    mood: "luxurious",
    preview: "#8E24AA"
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    colors: ["#FCE4EC", "#F8BBD0", "#F06292", "#E91E63", "#AD1457"],
    mood: "elegant",
    preview: "#E91E63"
  },
  {
    id: "midnight-dark",
    name: "Midnight Dark",
    colors: ["#263238", "#37474F", "#455A64", "#546E7A", "#78909C"],
    mood: "dramatic",
    preview: "#37474F"
  },
  {
    id: "arctic-ice",
    name: "Arctic Ice",
    colors: ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C"],
    mood: "calm",
    preview: "#90A4AE"
  },
  {
    id: "autumn-warm",
    name: "Autumn Warm",
    colors: ["#FFF8E1", "#FFD54F", "#FFA000", "#E64A19", "#BF360C"],
    mood: "warm",
    preview: "#E64A19"
  },
  {
    id: "corporate-gray",
    name: "Corporate Gray",
    colors: ["#FAFAFA", "#E0E0E0", "#9E9E9E", "#616161", "#212121"],
    mood: "professional",
    preview: "#616161"
  },
  {
    id: "neon-pop",
    name: "Neon Pop",
    colors: ["#FF1744", "#F50057", "#D500F9", "#651FFF", "#00E5FF"],
    mood: "energetic",
    preview: "#D500F9"
  },
  {
    id: "earth-tones",
    name: "Earth Tones",
    colors: ["#EFEBE9", "#D7CCC8", "#A1887F", "#795548", "#4E342E"],
    mood: "grounded",
    preview: "#795548"
  },
  {
    id: "lavender-dream",
    name: "Lavender Dream",
    colors: ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2"],
    mood: "calm",
    preview: "#9575CD"
  },
  {
    id: "tropical",
    name: "Tropical",
    colors: ["#00BCD4", "#FFEB3B", "#FF5722", "#4CAF50", "#E91E63"],
    mood: "energetic",
    preview: "#00BCD4"
  },
  {
    id: "monochrome",
    name: "Monochrome",
    colors: ["#FFFFFF", "#BDBDBD", "#757575", "#424242", "#000000"],
    mood: "minimal",
    preview: "#424242"
  },
  {
    id: "fire-red",
    name: "Fire Red",
    colors: ["#FFEBEE", "#EF9A9A", "#EF5350", "#E53935", "#B71C1C"],
    mood: "bold",
    preview: "#E53935"
  },
  {
    id: "sky-blue",
    name: "Sky Blue",
    colors: ["#E1F5FE", "#81D4FA", "#29B6F6", "#039BE5", "#0277BD"],
    mood: "fresh",
    preview: "#29B6F6"
  },
  {
    id: "mint-fresh",
    name: "Mint Fresh",
    colors: ["#E0F2F1", "#80CBC4", "#26A69A", "#00897B", "#00695C"],
    mood: "fresh",
    preview: "#26A69A"
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    colors: ["#FFFDE7", "#FFF59D", "#FFEE58", "#FDD835", "#F57F17"],
    mood: "warm",
    preview: "#FDD835"
  },
  {
    id: "deep-navy",
    name: "Deep Navy",
    colors: ["#E8EAF6", "#9FA8DA", "#5C6BC0", "#3949AB", "#1A237E"],
    mood: "professional",
    preview: "#3949AB"
  },
  {
    id: "coral-reef",
    name: "Coral Reef",
    colors: ["#FFEBE9", "#FFAB91", "#FF7043", "#F4511E", "#BF360C"],
    mood: "warm",
    preview: "#FF7043"
  },
  {
    id: "sage-green",
    name: "Sage Green",
    colors: ["#F1F8E9", "#C5E1A5", "#9CCC65", "#7CB342", "#558B2F"],
    mood: "natural",
    preview: "#7CB342"
  },
  {
    id: "berry-mix",
    name: "Berry Mix",
    colors: ["#FCE4EC", "#F8BBD0", "#CE93D8", "#9575CD", "#5E35B1"],
    mood: "playful",
    preview: "#9575CD"
  },
  {
    id: "desert-sand",
    name: "Desert Sand",
    colors: ["#FFF8E1", "#FFE0B2", "#FFAB91", "#BCAAA4", "#8D6E63"],
    mood: "warm",
    preview: "#BCAAA4"
  },
  {
    id: "electric-blue",
    name: "Electric Blue",
    colors: ["#E1F5FE", "#4FC3F7", "#00B0FF", "#0091EA", "#01579B"],
    mood: "energetic",
    preview: "#00B0FF"
  },
  {
    id: "classic-black",
    name: "Classic Black",
    colors: ["#FFFFFF", "#F5F5F5", "#9E9E9E", "#424242", "#000000"],
    mood: "minimal",
    preview: "#000000"
  }
];

// ============================================================================
// CONNECTOR STYLES - line/connection visual styles
// ============================================================================

export const CONNECTOR_STYLES = [
  {
    id: "curved",
    name: "Curved",
    description: "Smooth bezier curves for an organic feel"
  },
  {
    id: "straight",
    name: "Straight",
    description: "Direct lines from point to point for technical clarity"
  },
  {
    id: "rounded",
    name: "Rounded",
    description: "Right-angle elbows with softened corners"
  },
  {
    id: "dashed",
    name: "Dashed",
    description: "Dashed or dotted lines for optional or weak connections"
  },
  {
    id: "bold",
    name: "Bold",
    description: "Thick solid lines for high emphasis"
  },
  {
    id: "arrow-only",
    name: "Arrow Only",
    description: "Minimal arrowheads without long connecting lines"
  }
];

// ============================================================================
// ICON STYLES - iconography rendering options
// ============================================================================

export const ICON_STYLES = [
  {
    id: "outline",
    name: "Outline",
    description: "Thin outline icons with no fill, modern and minimal"
  },
  {
    id: "filled",
    name: "Filled",
    description: "Solid filled icons for strong visual presence"
  },
  {
    id: "duotone",
    name: "Duotone",
    description: "Two-tone icons with primary and accent colors"
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Ultra simple geometric shapes only"
  },
  {
    id: "none",
    name: "None",
    description: "No icons - pure text and shapes only"
  }
];

// ============================================================================
// LAYOUT MOODS - overall aesthetic direction
// ============================================================================

export const LAYOUT_MOODS = [
  {
    id: "corporate",
    name: "Corporate",
    description: "Formal, structured, conservative - boardroom-ready"
  },
  {
    id: "playful",
    name: "Playful",
    description: "Rounded shapes, colorful, friendly - workshop-ready"
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Lots of whitespace, simple lines, Apple-clean aesthetic"
  },
  {
    id: "bold",
    name: "Bold",
    description: "High contrast, strong typography, eye-catching"
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Sophisticated, refined, magazine-like finish"
  },
  {
    id: "technical",
    name: "Technical",
    description: "Grid-based, precise, data-forward engineering aesthetic"
  }
];

// ============================================================================
// GALLERY EXAMPLES - pre-written prompts for the Gallery page
// ============================================================================

export const GALLERY_EXAMPLES = [
  {
    id: "ex-swot-startup",
    categoryId: "business",
    typeId: "swot-analysis",
    title: "Early-stage SaaS Startup SWOT",
    excerpt: "A SWOT analysis for a B2B SaaS startup launching its first product, identifying their AI-first product differentiation as a key strength..."
  },
  {
    id: "ex-mindmap-strategy",
    categoryId: "mindmap",
    typeId: "central-node-map",
    title: "2025 Content Strategy Mindmap",
    excerpt: "A radial mindmap with content strategy at the center and branches for blog, video, podcast, and social, each with their channel-specific sub-themes..."
  },
  {
    id: "ex-funnel-marketing",
    categoryId: "process",
    typeId: "funnel-chart",
    title: "Marketing Funnel for E-commerce",
    excerpt: "A 5-stage marketing funnel showing visitors, leads, MQLs, opportunities, and customers with conversion rates between each stage..."
  },
  {
    id: "ex-timeline-product",
    categoryId: "timelines",
    typeId: "horizontal-timeline",
    title: "Product Launch Timeline 2025",
    excerpt: "A horizontal timeline showing key product launch milestones from concept through MVP to public launch and post-launch iterations..."
  },
  {
    id: "ex-pros-cons-remote",
    categoryId: "comparison",
    typeId: "pros-cons-list",
    title: "Remote vs Office Work Pros and Cons",
    excerpt: "A balanced two-column visualization weighing the advantages and disadvantages of remote work versus traditional office work for knowledge teams..."
  },
  {
    id: "ex-iceberg-org",
    categoryId: "metaphors",
    typeId: "iceberg-model",
    title: "Organizational Culture Iceberg",
    excerpt: "An iceberg showing visible cultural elements (dress code, rituals, communication) above the water and hidden cultural elements (beliefs, assumptions, values) below..."
  },
  {
    id: "ex-bar-revenue",
    categoryId: "data",
    typeId: "bar-chart",
    title: "Quarterly Revenue Bar Chart",
    excerpt: "A vertical bar chart showing revenue across four quarters with each bar labeled with its value and the highest quarter highlighted..."
  },
  {
    id: "ex-pestel-retail",
    categoryId: "business",
    typeId: "pestel-analysis",
    title: "Retail Industry PESTEL Analysis",
    excerpt: "A comprehensive PESTEL analysis of the retail industry covering political, economic, social, technological, environmental, and legal factors..."
  },
  {
    id: "ex-fishbone-defect",
    categoryId: "problems",
    typeId: "fishbone-diagram",
    title: "Product Quality Defect Analysis",
    excerpt: "A fishbone diagram analyzing the root causes of a recurring product quality defect, with branches for people, process, equipment, materials, and environment..."
  },
  {
    id: "ex-flywheel-growth",
    categoryId: "metaphors",
    typeId: "flywheel",
    title: "B2B SaaS Growth Flywheel",
    excerpt: "A growth flywheel showing how content attracts visitors, free tools convert leads, product delight drives retention, and referrals start the cycle again..."
  },
  {
    id: "ex-radar-skills",
    categoryId: "comparison",
    typeId: "radar-chart",
    title: "Engineering Skills Self-Assessment",
    excerpt: "A radar chart showing self-assessed scores across 7 engineering competencies, with comparison polygons for current vs target proficiency levels..."
  },
  {
    id: "ex-gantt-product",
    categoryId: "timelines",
    typeId: "gantt-chart",
    title: "Q1 Product Development Gantt",
    excerpt: "A Gantt chart showing all Q1 product development tasks with dependencies, status indicators, and the critical path highlighted..."
  },
  {
    id: "ex-business-canvas",
    categoryId: "business",
    typeId: "business-model-canvas",
    title: "Subscription Box Business Model",
    excerpt: "A complete Business Model Canvas for a curated subscription box service covering all 9 building blocks with concrete examples..."
  },
  {
    id: "ex-journey-onboarding",
    categoryId: "process",
    typeId: "user-journey-map",
    title: "SaaS Onboarding User Journey",
    excerpt: "A user journey map tracing a new SaaS user from signup through first value moment, including emotional curve, touchpoints, and pain points..."
  },
  {
    id: "ex-quadrant-priorities",
    categoryId: "comparison",
    typeId: "quadrant-chart",
    title: "Eisenhower Priority Matrix",
    excerpt: "An Eisenhower-style quadrant chart placing weekly tasks on urgency vs importance axes, with action recommendations for each quadrant..."
  },
  {
    id: "ex-bridge-transformation",
    categoryId: "metaphors",
    typeId: "bridge-diagram",
    title: "Digital Transformation Bridge",
    excerpt: "A bridge diagram showing the current legacy state on the left, the digital-first future state on the right, and key initiatives as the bridge supports..."
  },
  {
    id: "ex-okr-quarterly",
    categoryId: "business",
    typeId: "okr-framework",
    title: "Q3 Engineering OKRs",
    excerpt: "An OKR cascade showing one engineering objective and four key results with target metrics and current progress percentages..."
  },
  {
    id: "ex-tree-decision",
    categoryId: "hierarchy",
    typeId: "decision-tree",
    title: "Hiring Decision Tree",
    excerpt: "A decision tree guiding hiring managers through resume screening with branching questions about experience, skills, and culture fit..."
  },
  {
    id: "ex-roadmap-2025",
    categoryId: "timelines",
    typeId: "roadmap",
    title: "2025 Product Roadmap",
    excerpt: "A quarterly roadmap with separate lanes for engineering, product, and marketing initiatives across all four quarters of 2025..."
  },
  {
    id: "ex-pyramid-maslow",
    categoryId: "metaphors",
    typeId: "pyramid-diagram",
    title: "Modern Maslow's Hierarchy",
    excerpt: "A pyramid showing the classic five levels of Maslow's hierarchy of needs from physiological at the base to self-actualization at the peak..."
  },
  {
    id: "ex-affinity-research",
    categoryId: "brainstorming",
    typeId: "affinity-diagram",
    title: "User Research Affinity Diagram",
    excerpt: "An affinity diagram clustering 30+ user interview insights into 6 emergent themes about onboarding pain points and feature requests..."
  },
  {
    id: "ex-org-startup",
    categoryId: "parts",
    typeId: "org-chart",
    title: "Series A Startup Org Chart",
    excerpt: "An organizational chart for a 25-person Series A startup showing CEO, leadership team, and individual contributors with department color coding..."
  },
  {
    id: "ex-causal-loop",
    categoryId: "cause",
    typeId: "causal-loop-diagram",
    title: "Customer Acquisition Causal Loop",
    excerpt: "A causal loop diagram showing reinforcing loops between product quality, customer satisfaction, referrals, and acquisition with feedback effects..."
  },
  {
    id: "ex-story-arc-pitch",
    categoryId: "narrative",
    typeId: "story-arc",
    title: "Investor Pitch Story Arc",
    excerpt: "A story arc visualization mapping a 10-minute investor pitch with rising tension through problem reveal, climactic solution demo, and resolution..."
  }
];

// ============================================================================
// FAQ ITEMS - About page accordion content
// ============================================================================

export const FAQ_ITEMS = [
  {
    id: "faq-free",
    question: "Is VisualCraft really free?",
    answer: "Yes, completely. VisualCraft is a static website that runs entirely in your browser - there are no subscriptions, no usage limits, no premium features hidden behind a paywall. The entire tool is free forever. We don't even ask for your email."
  },
  {
    id: "faq-account",
    question: "Do I need to create an account?",
    answer: "No account is required. VisualCraft saves your selections locally in your browser using localStorage. Nothing is stored on a server, no login is needed, and no personal data is collected."
  },
  {
    id: "faq-tools",
    question: "Which AI tools work with the prompts?",
    answer: "Any AI tool that accepts text prompts and produces visual or text output will work. We've tested with Google Gemini, ChatGPT (especially GPT-4 with image generation), Claude (for diagram code), and Midjourney. For image-style outputs, Midjourney and DALL-E work best. For diagram code (SVG, Mermaid, etc.), Claude and Gemini work best."
  },
  {
    id: "faq-vs-napkin",
    question: "How is this different from Napkin AI?",
    answer: "Napkin AI is a complete generative tool that creates visualizations directly. VisualCraft is a prompt generator - it produces detailed prompts you take to any AI tool of your choice. This means you're never locked into one platform, you can use cutting-edge models as they release, and the tool is free forever. You trade a small extra step (paste the prompt into another AI) for unlimited flexibility."
  },
  {
    id: "faq-commercial",
    question: "Can I use this for commercial projects?",
    answer: "Absolutely. Use VisualCraft for client work, business presentations, marketing materials, or anything else. The prompts are yours to use however you like. Note that any output you generate from external AI tools (Gemini, ChatGPT, etc.) is subject to those tools' own terms of service."
  },
  {
    id: "faq-best-results",
    question: "How do I get the best results from the prompts?",
    answer: "First, provide rich, specific content in the 'Your content' field - the more concrete your data, the better the visualization. Second, try multiple AI tools - different models produce different aesthetic results. Third, iterate - if the first generation isn't perfect, add follow-up prompts like 'make it more minimalist' or 'use a darker color scheme'. Fourth, consider using Claude or Gemini to generate SVG/Mermaid code that you can then edit precisely."
  },
  {
    id: "faq-open-source",
    question: "Is VisualCraft open source?",
    answer: "Yes, the source code is freely available on GitHub. You can fork it, modify it, host your own version, or contribute improvements back to the main project."
  },
  {
    id: "faq-categories",
    question: "Why these 13 categories?",
    answer: "The 13 categories cover the complete taxonomy of visualizations offered by Napkin AI, which represents the most comprehensive commercial set we found. Within each category, we've included the most useful and commonly-needed sub-types - 76 in total. If a visualization type you need is missing, let us know and we'll add it."
  }
];
